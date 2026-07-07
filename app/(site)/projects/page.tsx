import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { systemCategories } from "@/lib/projects-data";
import { CompliancePlayground } from "@/components/projects/compliance-playground";

export default function ProjectsPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-4xl space-y-6">
          <Badge>Work Archive</Badge>
          <Heading
            level={1}
            description="Engineering notebooks, dynamic compliance layers, and protocol-level security implementations."
          >
            Engineering Projects
          </Heading>
          <Text size="lg" className="max-w-2xl">
            A comprehensive list of systems I have built or maintain, grouped by architectural layer. Click on any system to read its technical case study.
          </Text>
        </div>

        <div className="mt-12 space-y-12">
          {systemCategories.map((category) => (
            <section key={category.title} className="space-y-4">
              <div className="max-w-3xl space-y-2 border-b border-border pb-2">
                <Heading level={2}>{category.title}</Heading>
                <Text size="sm" className="text-muted-foreground">{category.summary}</Text>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => {
                  const card = (
                    <Card className="h-full space-y-4 hover:border-foreground/30 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-foreground">{item.name}</p>
                            {item.badge ? <Badge variant="muted">{item.badge}</Badge> : null}
                          </div>
                          <Text size="sm">{item.description}</Text>
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

        {/* Interactive Playground Section */}
        <section className="mt-20 space-y-4">
          <div className="max-w-3xl space-y-2 border-b border-border pb-2">
            <Heading level={2}>Policy AST Evaluation Simulator</Heading>
            <Text size="sm" className="text-muted-foreground">
              Interact with the live AST match parser below to see how anchor-audit evaluates rulesets.
            </Text>
          </div>
          <CompliancePlayground />
        </section>
      </Container>
    </Section>
  );
}