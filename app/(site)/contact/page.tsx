import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tanishq Dasari.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-3xl space-y-6">
          <Badge>Contact</Badge>
          <Heading
            level={1}
            description="The direct way to reach me for systems engineering or research conversations."
          >
            Get in Touch
          </Heading>
          <Text size="lg" className="max-w-2xl text-muted-foreground">
            I am open to discussions about static analysis compiler infrastructure, distributed policy synchronization, and AI risk governance systems.
          </Text>
        </div>

        <div className="mt-12 max-w-2xl space-y-6">
          <Card className="space-y-4 p-6">
            <Heading level={2}>Direct Email</Heading>
            <Text size="sm">
              Best for research collaboration, technical inquiries, and project-specific review requests.
            </Text>
            <Button href="mailto:tan@animuslab.dev" variant="default" className="font-mono">
              tan@animuslab.dev
            </Button>
          </Card>

          <Card className="space-y-4 p-6">
            <Heading level={2}>Elsewhere</Heading>
            <div className="font-mono text-sm space-y-2 text-muted-foreground">
              <div>
                <span className="text-foreground font-semibold">GitHub:</span>{" "}
                <a href="https://github.com/Tanishq1030" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  github.com/Tanishq1030
                </a>
              </div>
              <div>
                <span className="text-foreground font-semibold">LinkedIn:</span>{" "}
                <a href="https://www.linkedin.com/in/tanishq-dasari10/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  linkedin.com/in/tanishq-dasari10
                </a>
              </div>
              <div>
                <span className="text-foreground font-semibold">X (Twitter):</span>{" "}
                <a href="https://x.com/TanishqDasari1" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  @TanishqDasari1
                </a>
              </div>
              <div>
                <span className="text-foreground font-semibold">ORCID:</span>{" "}
                <a href="https://orcid.org/0009-0008-1597-1834" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  0009-0008-1597-1834
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}