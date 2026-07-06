import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Navigation } from "@/components/layout/Navigation";

export function Header() {
  return (
    <header className="border-b border-border bg-background/90 backdrop-blur-sm">
      <Container className="py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <Link href="/" className="text-sm font-semibold tracking-tight text-foreground">
              Tanishq Dasari
            </Link>
            <p className="text-sm text-muted-foreground">
              Founder & Research Engineer at AnimusLab.
            </p>
          </div>
          <Navigation />
        </div>
      </Container>
    </header>
  );
}