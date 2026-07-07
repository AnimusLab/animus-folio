import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import {
  publicationEntries,
  researchEntries,
  timelineEntries,
  writingEntries,
} from "@/lib/site-data";
import { systemCategories } from "@/lib/projects-data";
import { formatDate } from "@/utils/formatDate";

export default function HomePage() {
  const flagshipSystems = systemCategories.flatMap(c => c.items.filter(i => i.featured));

  return (
    <>
      <Section className="pt-16 sm:pt-24 lg:pt-28">
        <Container>
          <div className="max-w-4xl space-y-8">
            <Badge>Personal Research &amp; Engineering Archive</Badge>
            <div className="space-y-5">
              <Heading level={1} className="max-w-3xl">
                Tanishq Dasari<span className="terminal-cursor" />
              </Heading>
              <Text size="lg" className="max-w-2xl text-muted-foreground">
                I am a Computer Engineering student and backend engineer from Solapur, Maharashtra, India. I enjoy building systems that remain understandable as they grow.
              </Text>
              <Text className="max-w-2xl">
                Most of my work revolves around backend infrastructure, static analysis, AI governance, runtime policy enforcement, developer tooling, and knowledge systems. Rather than building isolated applications, I design infrastructure that helps developers build safer and more reliable software.
              </Text>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/projects">Explore Projects</Button>
              <Button href="/principles" variant="outline">
                Read Engineering Principles
              </Button>
            </div>

            {/* Selected Impact List */}
            <div className="border border-border/80 rounded-3xl bg-surface-muted/20 p-6 space-y-4 max-w-2xl">
              <p className="text-xs font-mono text-accent uppercase tracking-wider">Selected Impact</p>
              <ul className="space-y-2.5 text-sm text-foreground/90">
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5 shrink-0">✔</span>
                  <span><strong>Built Anchor:</strong> AST compliance scanning and isolation engine supporting 118 governance rules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5 shrink-0">✔</span>
                  <span><strong>Published Zenodo Preprints:</strong> Authored academic and implementation briefs detailing deterministic execution boundaries.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5 shrink-0">✔</span>
                  <span><strong>Regulatory Contributions:</strong> Submitted formal policy feedback and briefs to the FSB and RBI.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-0.5 shrink-0">✔</span>
                  <span><strong>Apache-2.0 &amp; MIT:</strong> Open-source projects and packages published on PyPI (<code>anchor-audit</code>, <code>shadowwatch</code>).</span>
                </li>
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Primary focus", "AI governance, static analysis, runtime policy enforcement."],
                ["Key projects", "Anchor, Canon, AnchorGrid, and Shadow Watch."],
                ["Verifiability", "Every claim is backed by open-source code and papers."],
              ].map(([label, value]) => (
                <Card key={label} className="space-y-2 card-hover-effect">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-6">
              <Heading
                level={2}
                eyebrow="Work"
                description="I document my systems work as complete engineering case studies rather than simple summaries."
              >
                Flagship Projects
              </Heading>
              <div className="grid gap-4">
                {flagshipSystems.slice(0, 4).map((system) => (
                  <Card key={system.slug} className="space-y-4 card-hover-effect">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-foreground">{system.name}</p>
                      <Badge variant="muted">{system.badge || "Flagship"}</Badge>
                    </div>
                    <Text size="sm">{system.description}</Text>
                    {system.href ? (
                      <Button href={system.href} variant="ghost" className="px-0 text-xs font-mono">
                        Read Case Study →
                      </Button>
                    ) : null}
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="space-y-5 bg-surface-muted">
                <Heading level={3} eyebrow="Invariants">
                  Engineering Principles
                </Heading>
                <div className="space-y-4">
                  {[
                    ["Deterministic logic", "Software should be understandable before it is clever."],
                    ["Explicit design", "Good architecture reduces complexity rather than hiding it."],
                    ["Documentation as code", "Every design decision should be reproducible, reviewable, and explainable."],
                  ].map(([title, desc]) => (
                    <div key={title} className="space-y-1">
                      <p className="text-sm font-medium text-foreground">{title}</p>
                      <Text size="sm">{desc}</Text>
                    </div>
                  ))}
                </div>
                <Button href="/principles" variant="outline" className="w-full">
                  Read Principles Page
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            level={2}
            eyebrow="Journal"
            description="Lab notebook logs exploring AST patterns, static analysis false positives, and compiler tooling design decisions."
          >
            Engineering Journal
          </Heading>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {writingEntries.map((post) => (
              <Card key={post.slug} className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    {post.title}
                  </p>
                  <Text size="sm">{post.summary}</Text>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span>{formatDate(post.date)}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                <Button href={`/writing/${post.slug}`} variant="ghost" className="px-0">
                  Read essay
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Card className="space-y-5">
              <Heading level={2} eyebrow="Milestones">
                Timeline
              </Heading>
              <div className="space-y-4">
                {timelineEntries.slice(0, 4).map((entry) => (
                  <div
                    key={entry.title}
                    className="space-y-1 border-l border-border pl-4"
                  >
                    <p className="text-sm font-medium text-foreground">
                      {entry.title}
                    </p>
                    <Text size="sm">{entry.summary}</Text>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(entry.date)}
                    </p>
                  </div>
                ))}
              </div>
              <Button href="/timeline" variant="outline" className="w-full">
                View Timeline
              </Button>
            </Card>

            <Card className="space-y-5" id="contact">
              <Heading level={2} eyebrow="Contact">
                Get in touch
              </Heading>
              <Text size="sm">
                I am open to discussions about software architecture, AI risk frameworks, and systems engineering.
              </Text>
              <div className="space-y-2 text-sm text-muted-foreground font-mono">
                <p>Email: <Link className="text-foreground underline" href="mailto:tan@animuslab.dev">tan@animuslab.dev</Link></p>
                <p>GitHub: <a className="text-foreground underline" href="https://github.com/Tanishq1030" target="_blank" rel="noopener noreferrer">github.com/Tanishq1030</a></p>
                <p>LinkedIn: <a className="text-foreground underline" href="https://www.linkedin.com/in/tanishq-dasari10/" target="_blank" rel="noopener noreferrer">linkedin.com/in/tanishq-dasari10</a></p>
                <p>X (Twitter): <a className="text-foreground underline" href="https://x.com/TanishqDasari1" target="_blank" rel="noopener noreferrer">@TanishqDasari1</a></p>
              </div>
              <Button href="/contact" variant="outline" className="w-full">
                View Contact details
              </Button>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}