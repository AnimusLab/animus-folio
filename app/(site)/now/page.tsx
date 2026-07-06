import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { currentWorkItems } from "@/lib/site-data";

export default function NowPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-4xl space-y-6">
          <Heading
            level={1}
            eyebrow="Now"
            description="A living snapshot of what is active right now."
          >
            What I am working on now
          </Heading>
          <Text size="lg" className="max-w-2xl">
            This page is intentionally short and easy to update. It is designed
            for current priorities rather than evergreen biography.
          </Text>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {currentWorkItems.map((item) => (
            <Card key={item.title} className="space-y-3">
              <Heading level={3}>{item.title}</Heading>
              <Text>{item.summary}</Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}