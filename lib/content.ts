import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { slug } from "@/utils/slug";

const contentRoot = path.join(process.cwd(), "content");

export interface ContentRecord {
  slug: string;
  title: string;
  description: string;
  date?: string;
  tags: string[];
}

export async function getContentRecords(section: string): Promise<ContentRecord[]> {
  try {
    const sectionPath = path.join(contentRoot, section);
    const files = await fs.readdir(sectionPath, { withFileTypes: true });

    const records = await Promise.all(
      files
        .filter((entry) => entry.isFile() && /\.(md|mdx)$/.test(entry.name))
        .map(async (entry) => {
          const source = await fs.readFile(path.join(sectionPath, entry.name), "utf8");
          const { data, content } = matter(source);
          const basename = entry.name.replace(/\.(md|mdx)$/, "");

          return {
            slug: String(data.slug ?? slug(basename)),
            title: String(data.title ?? basename),
            description: String(
              data.description ?? content.trim().split("\n").slice(0, 2).join(" "),
            ),
            date: typeof data.date === "string" ? data.date : undefined,
            tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
          } satisfies ContentRecord;
        }),
    );

    return records.sort((left, right) => (left.date ?? "").localeCompare(right.date ?? "")).reverse();
  } catch {
    return [];
  }
}