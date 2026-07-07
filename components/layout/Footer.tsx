import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navigationItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">Tanishq Dasari</p>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Research portfolio for governance infrastructure, autonomous AI systems,
              and technical writing at AnimusLab.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
            <div className="space-y-2">
              <p className="font-medium text-foreground">Navigate</p>
              <ul className="space-y-1">
                {navigationItems.slice(1).map((item) => (
                  <li key={item.label}>
                    <Link className="transition-colors hover:text-foreground" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-foreground">Contact</p>
              <p>tan@animuslab.dev</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}