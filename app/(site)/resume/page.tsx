import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resume",
  description: "Résumé of Tanishq Dasari — software engineer and AI governance researcher.",
  alternates: { canonical: "/resume" },
};

const experience = [
  {
    role: "Founder & Research Engineer",
    organization: "AnimusLab",
    period: "2025 – present",
    description: "Leading research and engineering work on Anchor (governance-as-code engine, published on PyPI), Canon (deterministic sync engine), and Governance Hub. Submitted formal AI governance consultation responses to the Financial Stability Board (FSB) and Reserve Bank of India (RBI)."
  },
  {
    role: "Open Source Contributor",
    organization: "Systems Tooling & Security",
    period: "2024 – present",
    description: "Built shadowwatch on PyPI (passive user activity and temporal continuity telemetry library). Authored FORGE (Rust binary cloud-storage database engine) and QuantForge (financial analysis developer terminal)."
  }
];

const projects = [
  { name: "Anchor", desc: "Governance-as-code engine doing AST parsing compliance checks. Multi-language (Python, Go, TS, Rust). Published on PyPI." },
  { name: "Canon", desc: "Monitors, diffs, and syncs framework updates deterministically with an append-only transaction ledger." },
  { name: "AnchorGrid", desc: "Governed P2P agent network enforcing OWASP and compliance standards during handshakes." },
  { name: "Shadow Watch", desc: "Passive behavioral continuity logging package for ATO mitigation. Self-hosted PostgreSQL store." },
  { name: "FORGE", desc: "High-performance database query engine written in Rust backing data collections to Google Drive." },
  { name: "QuantForge", desc: "Terminal-native financial terminal analytics shell and FastAPI REST layer for developers." }
];

const skills = [
  { title: "Languages", items: ["Python", "TypeScript", "Rust", "Go", "SQL"] },
  { title: "AI & Tooling", items: ["AST parsing (Tree-sitter)", "Deterministic execution", "Constitutional AI", "Static analysis"] },
  { title: "Backend Systems", items: ["FastAPI", "PostgreSQL", "AsyncIO", "Docker", "API key authentication", "Write-Ahead Logs"] },
  { title: "Research & Writing", items: ["Technical writing", "Regulatory consultation", "Systems design documentation"] }
];

export default function ResumePage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <Badge>Résumé</Badge>
              <Heading level={1} description="Software Engineer · AI Governance Researcher · Solapur, Maharashtra, India">
                Tanishq Dasari
              </Heading>
            </div>
            <Button
              href="/docs/resume/tanishq_dasari_resume.pdf"
              download
              variant="default"
            >
              Download PDF CV
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <Card className="space-y-4">
              <Heading level={2}>Experience</Heading>
              <div className="space-y-4">
                {experience.map((item) => (
                  <div key={item.role} className="space-y-2 border-t border-border pt-4 first:border-t-0 first:pt-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <p className="text-sm font-semibold text-foreground">{item.role}</p>
                      <p className="text-xs font-mono text-muted-foreground">{item.period}</p>
                    </div>
                    <p className="text-xs font-mono text-muted-foreground">{item.organization}</p>
                    <Text size="sm">{item.description}</Text>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="space-y-4">
              <Heading level={2}>Projects</Heading>
              <div className="grid gap-3 sm:grid-cols-2">
                {projects.map((proj) => (
                  <div key={proj.name} className="border border-border p-3 rounded-2xl bg-surface-muted/30">
                    <p className="text-xs font-semibold text-foreground mb-1">{proj.name}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{proj.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="space-y-4">
              <Heading level={2}>Education</Heading>
              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="text-sm font-semibold text-foreground">B.Tech — Computer Engineering</p>
                  <p className="text-xs font-mono text-muted-foreground">2023 – 2027 (Expected)</p>
                </div>
                <Text size="sm">Focusing on systems programming, compiler engineering, and runtime policy enforcement boundaries.</Text>
              </div>
            </Card>
          </div>

          <Card className="space-y-5 h-fit">
            <Heading level={2}>Skills &amp; Technologies</Heading>
            <div className="space-y-4">
              {skills.map((group) => (
                <div key={group.title} className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{group.title}</p>
                  <Text size="sm" className="font-medium text-foreground">{group.items.join(" · ")}</Text>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}