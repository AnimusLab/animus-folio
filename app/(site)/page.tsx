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
import { flagshipSystems, systemCategories } from "@/lib/systems-data";
import { formatDate } from "@/utils/formatDate";

export default function HomePage() {
  return (
    <>
      <Section className="pt-16 sm:pt-24 lg:pt-28">
        <Container>
          <div className="max-w-4xl space-y-8">
            <Badge>AnimusLab Research Portfolio</Badge>
            <div className="space-y-5">
              <Heading level={1} className="max-w-3xl">
                Building deterministic governance infrastructure for autonomous AI systems.
              </Heading>
              <Text size="lg" className="max-w-2xl">
                Tanishq Dasari is a computer science student and Founder & Research Engineer at AnimusLab. This portfolio documents ongoing research, engineering work, publications, technical essays, and long-term projects centered on AI governance, runtime policy enforcement, constitutional AI, and deterministic execution.
              </Text>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/research">View research program</Button>
              <Button href="/contact" variant="outline">
                Contact research lab
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Primary focus", "AI governance, runtime enforcement, deterministic replay."],
                ["Projects", "Anchor, Canon, and Governance Hub."],
                ["Lab direction", "Research infrastructure for autonomous AI systems."],
              ].map(([label, value]) => (
                <Card key={label} className="space-y-2">
                  <p className="text-sm text-muted-foreground">{label}</p>
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
                eyebrow="Systems"
                description="The ecosystem is organized by system importance, with Anchor, Canon, and Governance Hub treated as the public flagship layer."
              >
                Flagship systems
              </Heading>
              <div className="grid gap-4">
                {flagshipSystems.map((system) => (
                  <Card key={system.slug} className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-foreground">{system.name}</p>
                      <Badge variant="muted">Flagship</Badge>
                    </div>
                    <Text>{system.summary}</Text>
                    <Button href={`/systems/${system.slug}`} variant="ghost" className="px-0">
                      Read documentation
                    </Button>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="space-y-5 bg-surface-muted">
              <Heading level={3} eyebrow="Ecosystem">
                Support layers
              </Heading>
              <div className="space-y-4">
                {systemCategories.map((category) => (
                  <div key={category.title} className="space-y-2">
                    <p className="text-sm font-medium text-foreground">{category.title}</p>
                    <Text size="sm">{category.summary}</Text>
                  </div>
                ))}
              </div>
              <Button href="/systems" variant="outline">
                Open systems index
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            level={2}
            eyebrow="Research Areas"
            description="Research supports the systems work and focuses on governance, deterministic execution, and human-approved control loops."
          >
            Core research themes
          </Heading>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {researchEntries.map((entry) => (
              <Card key={entry.title} className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    {entry.title}
                  </p>
                  <Text>{entry.summary}</Text>
                </div>
                <p className="text-sm text-muted-foreground">
                  {entry.focus}
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  {entry.outputs.map((output) => (
                    <li key={output} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground" />
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            level={2}
            eyebrow="Publications"
            description="Release notes, technical consultations, and governance documents form the public record of the lab's work."
          >
            Recent publications and consultations
          </Heading>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {publicationEntries.map((publication) => (
              <Card key={publication.title} className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    {publication.title}
                  </p>
                  <Text>{publication.abstract}</Text>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span>{publication.venue}</span>
                  <span>•</span>
                  <span>{formatDate(publication.date)}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            level={2}
            eyebrow="Writing"
            description="Technical essays focus on governance as code, runtime AI safety, constitutional systems, and model risk management."
          >
            Recent technical essays
          </Heading>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {writingEntries.map((post) => (
              <Card key={post.slug} className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    {post.title}
                  </p>
                  <Text>{post.summary}</Text>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span>{formatDate(post.date)}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                <Button href={`/writing/${post.slug}`} variant="ghost" className="px-0">
                  Read article
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="space-y-5">
              <Heading level={2} eyebrow="Timeline">
                Recent milestones
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
            </Card>

            <Card className="space-y-5" id="contact">
              <Heading level={2} eyebrow="Contact">
                Research collaboration and review
              </Heading>
              <Text>
                For governance infrastructure work, technical reviews, open-source collaboration, or model risk management discussions, reach out directly.
              </Text>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Email:{" "}
                  <Link className="text-foreground underline" href="mailto:tanishq@animuslab.dev">
                    tanishq@animuslab.dev
                  </Link>
                </p>
                <p>Availability: selective research collaborations and technical consultation.</p>
              </div>
              <Button href="/contact" variant="outline">
                View contact channels
              </Button>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}