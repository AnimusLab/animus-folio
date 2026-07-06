import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { publicationEntries } from "@/lib/site-data";
import { formatDate } from "@/utils/formatDate";

export default function PublicationsPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-4xl space-y-6">
          <Badge>Publications</Badge>
          <Heading
            level={1}
            description="Published and in-progress writing with enough structure to extend into a bibliographic archive."
          >
            Publications and essays
          </Heading>
          <Text size="lg" className="max-w-2xl">
            The archive is intentionally sparse right now, but the data model is
            already ready for citations, venues, links, and future filters.
          </Text>
        </div>

        <div className="mt-12 grid gap-4">
          {publicationEntries.map((publication) => (
            <Card key={publication.title} className="space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">
                  {publication.title}
                </p>
                <Text>{publication.abstract}</Text>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span>{publication.venue}</span>
                <span>•</span>
                <span>{formatDate(publication.date)}</span>
                <span>•</span>
                <span>{publication.type}</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}