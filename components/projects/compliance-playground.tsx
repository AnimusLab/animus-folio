"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";

interface Rule {
  id: string;
  name: string;
  severity: "BLOCKER" | "ERROR" | "WARNING";
  policy: string;
  sourceCode: string;
  astQuery: string;
  result: string;
}

const RULES: Rule[] = [
  {
    id: "ALN-001",
    name: "Unvalidated LLM API Call",
    severity: "BLOCKER",
    policy: "All LLM generation calls must pass through an AST-registered validator function.",
    sourceCode: `# Unvalidated call (Fails compliance)
response = openai.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": prompt}]
)
print(response.choices[0].message.content)`,
    astQuery: `(call_expression
  function: (attribute
    object: (attribute
      object: (identifier) @mod
      attribute: (identifier) @method)
    attribute: (identifier) @action)
  (#eq? @mod "openai")
  (#eq? @method "chat")
  (#eq? @action "completions"))`,
    result: `[ALN-001] VIOLATION: Unvalidated LLM call detected.
  File: main.py, Line 2
  Mitigation: Wrap call in a verified validator helper.`
  },
  {
    id: "SEC-004",
    name: "Raw API Key String Literal",
    severity: "ERROR",
    policy: "API keys must be loaded from env configurations and not embedded as string literals.",
    sourceCode: `# Embedded key (Fails compliance)
client = Anthropic(
    api_key="sk-ant-api03-xxxxxxxxx"
)`,
    astQuery: `(keyword_argument
  name: (identifier) @arg_name
  value: (string) @val
  (#eq? @arg_name "api_key")
  (#match? @val "^\\\"sk-"))`,
    result: `[SEC-004] VIOLATION: Raw api_key string literal exposed.
  File: anthropic_client.py, Line 3
  Mitigation: Extract key to process.env config.`
  },
  {
    id: "GD-012",
    name: "Implicit Temperature Configuration",
    severity: "WARNING",
    policy: "Temperature parameters must be set explicitly to ensure generation determinism.",
    sourceCode: `# Implicit settings (Fails compliance)
completion = client.generate(
    prompt="Run analysis..."
)`,
    astQuery: `(call_expression
  function: (attribute attribute: (identifier) @name)
  arguments: (argument_list) @args
  (#eq? @name "generate")
  (#not-match? @args "temperature"))`,
    result: `[GD-012] VIOLATION: Implicit temperature config.
  File: runner.py, Line 2
  Mitigation: Set temperature parameter explicitly to 0.0.`
  }
];

export function CompliancePlayground() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeRule = RULES[activeIdx];

  return (
    <Card className="p-0 overflow-hidden border-border bg-surface shadow-lg mt-12">
      <div className="border-b border-border bg-surface-muted/50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="text-xs font-mono text-muted-foreground ml-2">anchor-audit simulator v5.0.4</span>
        </div>
        <Badge variant="muted">Interactive Shell</Badge>
      </div>

      <div className="grid lg:grid-cols-[280px_1fr]">
        {/* Rules Sidebar */}
        <div className="border-r border-border bg-surface-muted/30 p-4 space-y-2">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3 px-2">Rule Catalogue</p>
          {RULES.map((rule, idx) => (
            <button
              key={rule.id}
              onClick={() => setActiveIdx(idx)}
              className={`w-full text-left p-3 rounded-xl border transition-all flex flex-col gap-1 ${
                idx === activeIdx
                  ? "border-accent/40 bg-accent/5 text-foreground"
                  : "border-transparent text-muted-foreground hover:bg-surface-muted hover:text-foreground"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold">{rule.id}</span>
                <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border ${
                  rule.severity === "BLOCKER" ? "border-red-900/30 text-red-400 bg-red-950/20" :
                  rule.severity === "ERROR" ? "border-amber-900/30 text-amber-400 bg-amber-950/20" :
                  "border-zinc-800 text-zinc-400 bg-zinc-900/20"
                }`}>
                  {rule.severity}
                </span>
              </div>
              <span className="text-xs font-medium truncate">{rule.name}</span>
            </button>
          ))}
        </div>

        {/* Console Workspace */}
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <Heading level={3} className="text-sm font-semibold">Policy Constraint</Heading>
            <Text size="sm" className="text-muted-foreground">{activeRule.policy}</Text>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Source Code */}
            <div className="space-y-2">
              <p className="text-xs font-mono text-muted-foreground">Source Code</p>
              <pre className="overflow-x-auto rounded-2xl border border-border bg-surface-muted p-4 font-mono text-xs text-foreground leading-relaxed">
                {activeRule.sourceCode}
              </pre>
            </div>

            {/* AST Match Pattern */}
            <div className="space-y-2">
              <p className="text-xs font-mono text-muted-foreground">AST Tree-sitter Pattern</p>
              <pre className="overflow-x-auto rounded-2xl border border-border bg-surface-muted p-4 font-mono text-xs text-accent/90 leading-relaxed">
                {activeRule.astQuery}
              </pre>
            </div>
          </div>

          {/* Verification Result */}
          <div className="space-y-2 pt-2 border-t border-border">
            <p className="text-xs font-mono text-muted-foreground">Evaluation Terminal Output</p>
            <pre className="overflow-x-auto rounded-2xl border border-red-900/30 bg-red-950/5 p-4 font-mono text-xs text-red-400 leading-relaxed">
              {activeRule.result}
            </pre>
          </div>
        </div>
      </div>
    </Card>
  );
}
