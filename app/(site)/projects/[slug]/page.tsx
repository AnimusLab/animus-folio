import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FlagshipSystemTemplate } from "@/components/systems/flagship-system-template";
import { flagshipSystems, getFlagshipSystemBySlug } from "@/lib/projects-data";

export function generateStaticParams() {
  return flagshipSystems.map((system) => ({ slug: system.slug }));
}

export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>): Promise<Metadata> {
  const { slug } = await params;
  const system = getFlagshipSystemBySlug(slug);

  if (!system) {
    return {};
  }

  return {
    title: `${system.name} — Case Study`,
    description: system.summary,
  };
}

export default async function ProjectPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const system = getFlagshipSystemBySlug(slug);

  if (!system) {
    notFound();
  }

  return <FlagshipSystemTemplate system={system} />;
}