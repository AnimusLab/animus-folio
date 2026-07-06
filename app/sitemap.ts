import type { MetadataRoute } from "next";
import { navigationItems } from "@/lib/site-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tan.animuslab.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = navigationItems
    .filter((item) => item.href.startsWith("/"))
    .map((item) => ({
      url: `${siteUrl}${item.href}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: item.href === "/" ? 1 : 0.7,
    }));

  return routes;
}