import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { systemCategories } from "@/lib/systems-data";

export default function SystemsPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-4xl space-y-6">
          <Badge>Systems</Badge>
          <Heading
            level={1}
            description="AnimusLab is organized as an ecosystem of systems, not a flat project gallery."
          >
            Systems and infrastructure
          </Heading>
          <Text size="lg" className="max-w-2xl">
            Anchor, Canon, and Governance Hub are the flagship systems. Everything else supports them or extends the lab's broader AI and developer infrastructure.
          </Text>
        </div>

        <div className="mt-12 space-y-8">
          {systemCategories.map((category) => (
            <section key={category.title} className="space-y-4">
              <div className="max-w-3xl space-y-2">
                <Heading level={2}>{category.title}</Heading>
                <Text>{category.summary}</Text>
              </div>
              <div className="grid gap-4 lg:grid-cols-3">
                {category.items.map((item) => {
                  const card = (
                    <Card className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-foreground">{item.name}</p>
                            {item.badge ? <Badge variant="muted">{item.badge}</Badge> : null}
                          </div>
                          <Text>{item.description}</Text>
                        </div>
                      </div>
                    </Card>
                  );

                  return item.href ? (
                    <Link key={item.name} href={item.href} className="block">
                      {card}
                    </Link>
                  ) : (
                    <div key={item.name}>{card}</div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}