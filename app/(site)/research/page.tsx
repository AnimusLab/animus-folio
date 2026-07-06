import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { researchEntries } from "@/lib/site-data";

export default function ResearchPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-4xl space-y-6">
          <Heading
            level={1}
            eyebrow="Research"
            description="Questions, methods, and notes organized for long-term use."
          >
            Research agenda and working questions
          </Heading>
          <Text size="lg" className="max-w-2xl">
            This section will grow into a publication-quality archive. The
            current structure is already normalized for later content imports,
            MDX essays, and project-specific commentary.
          </Text>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {researchEntries.map((entry) => (
            <Card key={entry.title} className="space-y-4">
              <Heading level={3}>{entry.title}</Heading>
              <Text>{entry.summary}</Text>
              <p className="text-sm text-muted-foreground">{entry.focus}</p>
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
  );
}