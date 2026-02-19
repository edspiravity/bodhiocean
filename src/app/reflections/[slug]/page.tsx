import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format, parseISO } from "date-fns";
import { getAllReflections, getReflectionPathBySlug } from "@/lib/reflections";
import { SutraQuote } from "@/components/SutraQuote";

export function generateStaticParams() {
  return getAllReflections().map((p) => ({ slug: p.slug }));
}

export default async function ReflectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const fullPath = getReflectionPathBySlug(slug);
  if (!fs.existsSync(fullPath)) notFound();

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const title = String(data.title ?? slug);
  const dateRaw = String(data.date ?? "");
  const dateNice = dateRaw ? format(parseISO(dateRaw), "d MMM yyyy") : "";

  return (
    <div className="space-y-6">
      <div className="text-sm">
        <Link className="opacity-80 hover:opacity-100" href="/reflections">
          ← Back to Reflections
        </Link>
      </div>

      <header className="space-y-2">
        {dateNice ? <div className="text-sm opacity-70">{dateNice}</div> : null}
        <h1 className="text-3xl font-semibold">{title}</h1>
      </header>

      <article className="prose prose-neutral max-w-none">
        <MDXRemote source={content} components={{ SutraQuote }} />
      </article>
    </div>
  );
}
