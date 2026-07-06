import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { writingEntries } from "@/lib/site-data";
import { formatDate } from "@/utils/formatDate";

export function generateStaticParams() {
  return writingEntries.map((post) => ({ slug: post.slug }));
}

export default async function WritingEntryPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const entry = writingEntries.find((post) => post.slug === slug);

  if (!entry) {
    notFound();
  }

  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-3xl space-y-6">
          <Button href="/writing" variant="ghost" className="px-0">
            Back to writing
          </Button>
          <div className="space-y-4">
            <Badge>Writing</Badge>
            <Heading level={1}>{entry.title}</Heading>
            <Text size="lg">{entry.summary}</Text>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span>{formatDate(entry.date)}</span>
              <span>•</span>
              <span>{entry.readingTime}</span>
            </div>
          </div>

          <article className="space-y-8 border-t border-border pt-8">
            {entry.content.map((paragraph) => (
              <Text key={paragraph}>{paragraph}</Text>
            ))}

            <div className="space-y-4 rounded-3xl border border-border bg-surface-muted p-6">
              <Heading level={2}>Key takeaways</Heading>
              <ul className="space-y-2 text-sm text-foreground">
                {entry.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}