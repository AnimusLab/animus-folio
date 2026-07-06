import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { resumeEducation, resumeExperience, resumeSkills } from "@/lib/site-data";

export default function ResumePage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-4xl space-y-6">
          <Badge>Resume</Badge>
          <Heading
            level={1}
            description="A resume-first layout that can later be paired with a PDF export or print view."
          >
            Resume
          </Heading>
          <Text size="lg" className="max-w-2xl">
            The structure below keeps experience, education, and skills in
            separate data groups so the page can evolve into a formal CV or a
            downloadable document without reworking the layout.
          </Text>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <Card className="space-y-4">
              <Heading level={2}>Experience</Heading>
              <div className="space-y-4">
                {resumeExperience.map((item) => (
                  <div
                    key={item.role}
                    className="space-y-2 border-t border-border pt-4 first:border-t-0 first:pt-0"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <p className="text-sm font-medium text-foreground">{item.role}</p>
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.organization}</p>
                    <Text size="sm">{item.summary}</Text>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="space-y-4">
              <Heading level={2}>Education</Heading>
              <div className="space-y-4">
                {resumeEducation.map((item) => (
                  <div
                    key={item.degree}
                    className="space-y-2 border-t border-border pt-4 first:border-t-0 first:pt-0"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <p className="text-sm font-medium text-foreground">{item.degree}</p>
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                    <Text size="sm">{item.summary}</Text>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="space-y-5">
            <Heading level={2}>Skills</Heading>
            <div className="space-y-4">
              {resumeSkills.map((group) => (
                <div key={group.title} className="space-y-2">
                  <p className="text-sm font-medium text-foreground">{group.title}</p>
                  <Text size="sm">{group.items.join(" · ")}</Text>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}