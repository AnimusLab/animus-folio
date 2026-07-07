import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Open Source Work",
  description: "Verifyable open-source libraries, packages, and code repositories by Tanishq Dasari.",
  alternates: { canonical: "/open-source" },
};

const openSourceProjects = [
  {
    name: "anchor-audit",
    platform: "PyPI",
    description: "The core verification and static compliance scanner library for Anchor. Used to detect policy violations and architectural drifts in Python, JS/TS, Go, Java, and Rust codebases.",
    link: "https://pypi.org/project/anchor-audit/",
    metric: "Package"
  },
  {
    name: "shadowwatch",
    platform: "PyPI",
    description: "Passive behavioral intelligence and account takeover (ATO) detection library. Computes temporal continuity trust scores on user activity logs.",
    link: "https://pypi.org/project/shadowwatch/",
    metric: "Package"
  },
  {
    name: "Anchor",
    platform: "GitHub",
    description: "Primary repository for the static compliance scanning, AST verification, and runtime isolation engine.",
    link: "https://github.com/Tanishq1030/Anchor",
    metric: "Source code"
  },
  {
    name: "Canon",
    platform: "GitHub",
    description: "Deterministic policy supply chain synchronization and hashing engine designed to track external regulatory frameworks.",
    link: "https://github.com/AnimusLab/Canon",
    metric: "Source code"
  },
  {
    name: "AnchorGrid-hub",
    platform: "GitHub",
    description: "Reference implementation for the governed peer-to-peer agent network and Proof-of-Integrity handshake.",
    link: "https://github.com/quantforge-ai/AnchorGrid-hub",
    metric: "Source code"
  },
  {
    name: "QuantForge-terminal",
    platform: "GitHub",
    description: "Terminal-native financial terminal analytics shell and backend APIs, integrated with behavioral telemetry.",
    link: "https://github.com/Tanishq1030/QuantForge-terminal",
    metric: "Source code"
  },
  {
    name: "FORGE",
    platform: "GitHub",
    description: "File-Oriented Rust Grade Engine that syncs data collections as binary files directly to cloud storage backups.",
    link: "https://github.com/AnimusLab/FORGE",
    metric: "Source code"
  }
];

export default function OpenSourcePage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-3xl space-y-6">
          <Badge>Repositories</Badge>
          <Heading
            level={1}
            description="Verifiable source packages, libraries, and developer tools."
          >
            Open Source
          </Heading>
          <Text size="lg" className="max-w-2xl text-muted-foreground">
            I publish packages and library implementations to ensure every technical claim is verifiable by inspection.
          </Text>
        </div>

        <div className="mt-12 max-w-4xl space-y-6">
          {openSourceProjects.map((proj) => (
            <Card key={proj.name} className="space-y-4 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold text-foreground">{proj.name}</p>
                    <Badge variant="muted">
                      {proj.platform} · {proj.metric}
                    </Badge>
                  </div>
                  <Text size="sm">{proj.description}</Text>
                </div>
                <Button href={proj.link} target="_blank" variant="outline" className="text-xs">
                  Verify Repository →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
