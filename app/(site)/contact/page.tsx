import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { contactMethods } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-4xl space-y-6">
          <Badge>Contact</Badge>
          <Heading
            level={1}
            description="The simplest way to reach the project owner or request a collaboration."
          >
            Contact
          </Heading>
          <Text size="lg" className="max-w-2xl">
            This page keeps communication details isolated from the homepage so
            the main experience can stay focused on research, writing, and
            publication work.
          </Text>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {contactMethods.map((method) => (
            <Card key={method.label} className="space-y-4">
              <Heading level={3}>{method.label}</Heading>
              <Text>{method.summary}</Text>
              <Button href={method.href} variant="outline">
                {method.value}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}