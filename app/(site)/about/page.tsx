import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "About Tanishq Dasari — software engineer, AI governance researcher, and founder of AnimusLab.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-3xl space-y-6">
          <Badge>About Me</Badge>
          <Heading level={1} description="Final-year Computer Engineering student building deterministic safety infrastructure.">
            Tanishq Dasari
          </Heading>
          <div className="space-y-4 text-sm leading-relaxed text-foreground">
            <p>
              I&apos;m a Computer Engineering student and backend engineer from Solapur, Maharashtra, India, graduating in 2027.
            </p>
            <p>
              Most of my work revolves around backend infrastructure, static analysis, AI governance, runtime policy enforcement, developer tooling, and knowledge systems. Rather than building isolated applications, I&apos;m interested in designing infrastructure that helps developers build safer and more reliable software.
            </p>
            <p>
              Recently, my work has focused on governance systems for autonomous AI, deterministic execution, runtime observability, and human-in-the-loop control systems. I write software, technical papers, implementation notes, and design documents because I believe engineering should be explainable — not just executable.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-4xl space-y-6">
          <Heading level={2} eyebrow="Principles">How I Think</Heading>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Deterministic logic", "Software should be understandable before it is clever. I prefer deterministic systems over implicit behavior."],
              ["Explicit design", "Good architecture reduces complexity rather than hiding it. Every important engineering decision should be reproducible, reviewable, and explainable."],
              ["Documentation as code", "Documentation is part of the product. Clean boundaries, explicit contracts, and writing things down are invariants."],
              ["Open source", "Open source is the best way to validate engineering ideas. Legible engineering allows for peer review and communal trust."],
            ].map(([title, desc]) => (
              <Card key={title} className="space-y-2 p-5">
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <Text size="sm">{desc}</Text>
              </Card>
            ))}
          </div>
          <div className="pt-4">
            <Button href="/principles" variant="outline">Read Full Engineering Principles Page →</Button>
          </div>
        </div>

        <div className="mt-12 max-w-4xl space-y-6">
          <Heading level={2} eyebrow="Focus">Research Interests</Heading>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {[
              "AI Governance",
              "Runtime Policy Enforcement",
              "Constitutional AI",
              "Static Analysis",
              "Developer Tooling",
              "Knowledge Systems",
              "Software Architecture",
              "Distributed Backend Systems",
              "Human-in-the-loop AI",
            ].map((interest) => (
              <span key={interest} className="border border-border px-3 py-1.5 rounded-full text-muted-foreground bg-surface-muted">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
