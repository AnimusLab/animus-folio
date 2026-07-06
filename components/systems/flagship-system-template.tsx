import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import type { FlagshipSystem } from "@/types/system";

const sectionIds = {
  overview: "overview",
  problem: "problem",
  solution: "solution",
  architecture: "architecture",
  components: "components",
  features: "features",
  demo: "demo",
  code: "code-example",
  documentation: "documentation",
  whitepapers: "whitepapers",
  benchmarks: "benchmarks",
  roadmap: "roadmap",
  related: "related-systems",
} as const;

export function FlagshipSystemTemplate({ system }: { system: FlagshipSystem }) {
  return (
    <>
      <Section className="pt-16 sm:pt-24 lg:pt-28">
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <Badge>{system.category}</Badge>
              <Heading level={1} className="max-w-3xl">
                {system.name}
              </Heading>
              <Text size="lg" className="max-w-2xl">
                {system.tagline}
              </Text>
            </div>
            <Text className="max-w-3xl">{system.summary}</Text>
            <div className="flex flex-wrap gap-3">
              {system.links.map((link) => (
                <Button key={link.label} href={link.href} variant="outline">
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            <Card id={sectionIds.overview} className="space-y-3">
              <Heading level={2}>Overview</Heading>
              {system.overview.map((paragraph) => (
                <Text key={paragraph} size="sm">
                  {paragraph}
                </Text>
              ))}
            </Card>
            <Card id={sectionIds.problem} className="space-y-3">
              <Heading level={2}>Problem</Heading>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {system.problem.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card id={sectionIds.solution} className="space-y-3">
              <Heading level={2}>Solution</Heading>
              {system.solution.map((paragraph) => (
                <Text key={paragraph} size="sm">
                  {paragraph}
                </Text>
              ))}
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card id={sectionIds.architecture} className="space-y-5 p-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <Heading level={2}>{system.architecture.title}</Heading>
              <p className="text-sm text-muted-foreground">
                {system.status}
              </p>
            </div>
            <pre className="overflow-x-auto rounded-3xl border border-border bg-surface-muted p-6 font-mono text-sm leading-7 text-foreground">
              {system.architecture.diagram.join("\n")}
            </pre>
            <div className="grid gap-4 md:grid-cols-2">
              {system.architecture.notes.map((note) => (
                <Text key={note} size="sm">
                  {note}
                </Text>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            level={2}
            eyebrow="Components"
            description="The flagship documentation uses the same component taxonomy across every system."
          >
            Functional building blocks
          </Heading>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {system.components.map((component) => (
              <Card key={component.name} className="space-y-3">
                <p className="text-sm font-medium text-foreground">{component.name}</p>
                <Text size="sm">{component.description}</Text>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            level={2}
            eyebrow="Features"
            description="These are product features in the engineering sense, not marketing copy."
          >
            Core capabilities
          </Heading>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {system.features.map((feature) => (
              <Card key={feature} className="flex items-center justify-between gap-4 p-4">
                <p className="text-sm font-medium text-foreground">{feature}</p>
                <span className="text-sm text-muted-foreground">✓</span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Card id={sectionIds.demo} className="space-y-4">
              <Heading level={2}>{system.demo.title}</Heading>
              <Text>{system.demo.description}</Text>
              <pre className="overflow-x-auto rounded-3xl border border-border bg-surface-muted p-5 font-mono text-sm leading-7 text-foreground">
                {system.demo.code}
              </pre>
            </Card>

            <Card id={sectionIds.code} className="space-y-4">
              <Heading level={2}>Example output</Heading>
              <Text>
                A governed action should return enough evidence to review without
                reconstructing the entire runtime path.
              </Text>
              <pre className="overflow-x-auto rounded-3xl border border-border bg-surface-muted p-5 font-mono text-sm leading-7 text-foreground">
                {system.demo.output.join("\n")}
              </pre>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card id={sectionIds.documentation} className="space-y-3">
              <Heading level={2}>Documentation</Heading>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {system.documentation.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card id={sectionIds.whitepapers} className="space-y-3">
              <Heading level={2}>Whitepapers</Heading>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {system.whitepapers.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card id={sectionIds.benchmarks} className="space-y-3">
              <Heading level={2}>Benchmarks</Heading>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {system.benchmarks.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card id={sectionIds.roadmap} className="space-y-5 p-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-3">
                <Heading level={2}>Roadmap</Heading>
                <Text>
                  The roadmap separates what is already shipped from the next layer of
                  work so the public record stays explicit.
                </Text>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">Shipped</p>
                  <p className="text-sm text-muted-foreground">
                    {system.roadmap.shipped.join(" · ")}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Next</p>
                <p className="text-sm text-muted-foreground">
                  {system.roadmap.next.join(" · ")}
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            level={2}
            eyebrow="Related Systems"
            description="Systems in the ecosystem that depend on or complement this flagship project."
          >
            Connected systems
          </Heading>
          <div className="mt-6 flex flex-wrap gap-3">
            {system.relatedSystems.map((relatedSystem) => (
              <Link
                key={relatedSystem}
                href={`/systems/${relatedSystem.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-surface-muted"
              >
                {relatedSystem}
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}