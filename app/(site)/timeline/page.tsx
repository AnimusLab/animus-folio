import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { timelineEntries } from "@/lib/site-data";
import { formatDate } from "@/utils/formatDate";

export default function TimelinePage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-4xl space-y-6">
          <Heading
            level={1}
            eyebrow="Timeline"
            description="A concise chronology of major milestones, publications, and releases."
          >
            Timeline
          </Heading>
          <Text size="lg" className="max-w-2xl">
            The page is structured as data, not decoration, so it can expand to
            include talks, releases, residencies, and research milestones later.
          </Text>
        </div>

        <div className="mt-12 space-y-4">
          {timelineEntries.map((entry) => (
            <Card key={entry.title} className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span>{formatDate(entry.date)}</span>
                <span>•</span>
                <span>{entry.kind}</span>
              </div>
              <Heading level={3}>{entry.title}</Heading>
              <Text>{entry.summary}</Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}