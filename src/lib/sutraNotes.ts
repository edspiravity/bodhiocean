import fs from "fs";
import path from "path";
import matter from "gray-matter";

const sutraDir = path.join(process.cwd(), "src", "content", "sutra-notes");

export type SutraNoteMeta = {
  title: string;
  date: string;
  tags?: string[];
  slug: string;
};

export function getAllSutraNotes(): SutraNoteMeta[] {
  if (!fs.existsSync(sutraDir)) return [];

  const files = fs.readdirSync(sutraDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const fullPath = path.join(sutraDir, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    const slug = filename.replace(/\.mdx$/, "");

    return {
      title: (data.title as string) ?? slug,
      date: (data.date as string) ?? "1970-01-01",
      tags: (data.tags as string[]) ?? [],
      slug,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getSutraNotePathBySlug(slug: string) {
  return path.join(sutraDir, `${slug}.mdx`);
}
