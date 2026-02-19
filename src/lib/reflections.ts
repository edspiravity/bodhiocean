import fs from "fs";
import path from "path";
import matter from "gray-matter";

const reflectionsDir = path.join(process.cwd(), "src", "content", "reflections");

export type ReflectionMeta = {
  title: string;
  date: string; // ISO string
  tags?: string[];
  slug: string;
};

export function getAllReflections(): ReflectionMeta[] {
  const files = fs.readdirSync(reflectionsDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const fullPath = path.join(reflectionsDir, filename);
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

  // newest first
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getReflectionPathBySlug(slug: string) {
  return path.join(reflectionsDir, `${slug}.mdx`);
}
