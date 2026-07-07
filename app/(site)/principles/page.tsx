import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering Principles",
  description:
    "How Tanishq Dasari thinks about software engineering — the reasoning behind recurring architectural and systems design decisions.",
  alternates: { canonical: "/principles" },
};

const principles = [
  {
    id: "01",
    title: "Deterministic systems over probabilistic behavior",
    body: [
      "Most modern software systems choose probabilistic shortcuts because they are easier to build. A safety classifier is easier to deploy than a verified enforcement boundary. I accept this tradeoff in experiments, but not in core infrastructure.",
      "When evaluating a choice between a probabilistic solution and a deterministic one, I ask: if this fails, will I be able to explain exactly why? If the answer is no — if the failure is just model drift or parameter variance — the solution is too fragile for runtime controls.",
      "This is why Anchor evaluates policies using AST queries rather than LLM classifiers. Every execution query, policy ruleset, and context input must yield the same decision receipt, every time."
    ],
    evidence: [
      { text: "Anchor case study", href: "/projects/anchor" },
      { text: "Essay on deterministic systems", href: "/writing/governance-as-code-for-autonomous-systems" },
    ],
  },
  {
    id: "02",
    title: "Governance infrastructure over AI applications",
    body: [
      "As large language models grew common, most engineering energy went into downstream products (wrappers, application bots). I was more interested in the control plane: how do you audit these systems? How do you authorize actions? How do you update policies without breaking prior compliance guarantees?",
      "These are systems problems that cannot be solved by simply fine-tuning a model or adding a prompt safeguard. They require strict, verifiable infrastructure layers.",
      "I focus on AI safety and governance tooling because application surfaces change rapidly, but the need for auditable, predictable execution boundaries is durable."
    ],
    evidence: [
      { text: "Canon synchronization engine", href: "/projects/canon" },
      { text: "Essay: Runtime AI Safety", href: "/writing/runtime-ai-safety-and-deterministic-enforcement" },
    ],
  },
  {
    id: "03",
    title: "Research published alongside code",
    body: [
      "Systems engineering is incomplete without formal explanation. Writing research forces a precision that standard codebase development does not require. When design choices are written down, they can be scrutinized and improved by the community.",
      "I maintain a first-principles research practice alongside my repositories. This includes submitting comments to central banks (RBI) and regulatory reviews (FSB) to verify that my academic assertions hold up under policy scrutiny.",
      "Open-source code proves a system works; research papers explain why it is necessary. Both are essential."
    ],
    evidence: [
      { text: "Research archive", href: "/research" },
      { text: "Anchor preprint on Zenodo", href: "https://zenodo.org/records/19734724" },
    ],
  },
  {
    id: "04",
    title: "Documentation as code",
    body: [
      "A software system without documentation is invisible. I treat architecture drawings, design logs, and sync specs with the same status as source code. They are maintained under version control, they decay without care, and they accumulate value when reviewed regularly.",
      "This is particularly important for audit engines. If the rules of the system itself are illegible, the trust promises it makes to external compliance teams are broken.",
      "Documentation must be self-describing, version-locked, and verifiable alongside the implementation."
    ],
    evidence: [
      { text: "Canon Sync Specification (PDF)", href: "/docs/canon/governance_sync_spec.pdf" },
    ],
  },
];

export default function PrinciplesPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-3xl space-y-6">
          <Badge>Philosophy</Badge>
          <Heading
            level={1}
            description="The rules and constraints that guide how I choose, structure, and implement software systems."
          >
            Engineering Principles
          </Heading>
          <Text size="lg" className="max-w-2xl text-muted-foreground">
            These are not abstract values. They are practical, recurring systems design decisions — why I prefer AST matches over semantic models for security, why I publish papers, and why documentation is treated as code.
          </Text>
        </div>

        <div className="mt-12 max-w-4xl space-y-10">
          {principles.map((p) => (
            <Card key={p.id} className="space-y-4 p-8">
              <div className="flex gap-4">
                <span className="font-mono text-sm text-muted-foreground">{p.id}</span>
                <Heading level={2}>{p.title}</Heading>
              </div>
              <div className="pl-8 space-y-4">
                {p.body.map((para, i) => (
                  <Text key={i} size="sm" className="leading-relaxed">
                    {para}
                  </Text>
                ))}
                {p.evidence.length > 0 && (
                  <div className="flex flex-wrap gap-4 pt-2">
                    {p.evidence.map((ev) => (
                      <Link
                        key={ev.href}
                        href={ev.href}
                        className="text-xs font-mono text-muted-foreground hover:text-foreground underline underline-offset-2 decoration-border"
                        target={ev.href.startsWith("http") ? "_blank" : undefined}
                      >
                        {ev.text} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
