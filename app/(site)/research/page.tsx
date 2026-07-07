import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Research Archive",
  description: "Academic preprints, policy consultations, and neuro-symbolic reasoning volumes by Tanishq Dasari.",
  alternates: { canonical: "/research" },
};

const researchOutputs = [
  {
    title: "Anchor: Deterministic Governance Infrastructure for AI Systems",
    venue: "Zenodo Preprint",
    year: "2026",
    id: "zenodo.19734724",
    link: "https://zenodo.org/records/19734724",
    download: "/docs/anchor/anchor_paper.pdf",
    description: "The primary theoretical draft outlining AST-level enforcement, deterministic rule validation, and verification architectures."
  },
  {
    title: "Anchor Runtime V5.0.4 Institutional Rebuild",
    venue: "Whitepaper",
    year: "2026",
    download: "/docs/anchor/anchor_v5_whitepaper.pdf",
    description: "Technical specification for enterprise AST parsing, isolation boundaries, and compliance patterns."
  },
  {
    title: "Response to the FSB Consultation on AI in Financial Services",
    venue: "Financial Stability Board Regulatory Response",
    year: "2026",
    download: "/docs/fsb/fsb_response.pdf",
    description: "Advisory brief evaluating policy propagation mechanisms, auditable history tracking, and decision validation requirements in automated banking systems."
  },
  {
    title: "Comments on the RBI AI Governance Framework Draft",
    venue: "Reserve Bank of India Policy Consultation",
    year: "2026",
    download: "/docs/fsb/rbi_comments.pdf",
    description: "Advisory brief evaluating policy propagation mechanisms and AST scanning requirements in commercial finance environments."
  },
  {
    title: "ANIMUS Research Volume I: Symbolic Knowledge Representation",
    venue: "AnimusLab Research Paper",
    year: "2025",
    download: "/docs/animus/animus_vol1.pdf",
    description: "Theoretical framework introducing symbolic knowledge boundaries and deterministic evaluation rules for autonomous systems."
  },
  {
    title: "ANIMUS Research Volume II: Neuro-Symbolic Integration",
    venue: "AnimusLab Research Paper",
    year: "Drafting",
    description: "Architectural specification detailing low-latency bridges between probabilistic LLM outputs and deterministic AST constraints. Currently in drafting."
  },
  {
    title: "ANIMUS Research Volume III: Distributed Governance Networks",
    venue: "AnimusLab Research Paper",
    year: "Drafting",
    description: "Protocol design and proof logs for peer-to-peer governed agent discovery. Currently in drafting."
  }
];

export default function ResearchPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-4xl space-y-6">
          <Badge>Research &amp; Policy</Badge>
          <Heading
            level={1}
            eyebrow="Publications"
            description="Academic preprints, central bank consultations, and neuro-symbolic architectural papers."
          >
            Research Archive
          </Heading>
          <Text size="lg" className="max-w-2xl text-muted-foreground">
            I write and publish technical briefs alongside my code. For updates and citations, view my{" "}
            <a
              href="https://orcid.org/0009-0008-1597-1834"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2 hover:text-muted-foreground"
            >
              ORCID profile
            </a>.
          </Text>
        </div>

        <div className="mt-12 max-w-4xl space-y-8">
          {researchOutputs.map((item, idx) => (
            <Card key={idx} className="space-y-4 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-semibold text-foreground leading-snug">{item.title}</p>
                    <Badge variant="muted">{item.year}</Badge>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground">
                    {item.venue} {item.id && `· ${item.id}`}
                  </p>
                  <Text size="sm">{item.description}</Text>
                </div>
                <div className="flex gap-2 shrink-0 pt-2 md:pt-0">
                  {item.link && (
                    <Button href={item.link} target="_blank" variant="outline" className="text-xs">
                      Index Link
                    </Button>
                  )}
                  {item.download && (
                    <Button href={item.download} variant="default" className="text-xs">
                      {item.download.endsWith(".pdf") ? "Download PDF" : "View Details"}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}