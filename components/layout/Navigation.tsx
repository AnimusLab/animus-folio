import Link from "next/link";
import { navigationItems } from "@/lib/site-data";

export function Navigation() {
  return (
    <nav aria-label="Primary">
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
        {navigationItems.map((item) => (
          <li key={item.label}>
            <Link className="transition-colors hover:text-foreground" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}