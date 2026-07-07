import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { writingEntries } from "@/lib/site-data";
import { formatDate } from "@/utils/formatDate";

export default function WritingPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-4xl space-y-6">
          <Heading
            level={1}
            eyebrow="Journal"
            description="Engineering log entries, compiler design tradeoffs, and systems architecture decisions."
          >
            Engineering Journal
          </Heading>
          <Text size="lg" className="max-w-2xl text-muted-foreground">
            A repository of architectural logs and technical notes explaining the design rationale behind the systems I build.
          </Text>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {writingEntries.map((post) => (
            <Card key={post.slug} className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">
                  {post.title}
                </p>
                <Text>{post.summary}</Text>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <Link
                href={`/writing/${post.slug}`}
                className="text-sm font-medium text-foreground underline underline-offset-4"
              >
                Read article
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}