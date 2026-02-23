import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format, parseISO } from "date-fns";
import { getAllReflections, getReflectionPathBySlug, getReflectionBySlug } from "@/lib/reflections";
import { SutraQuote } from "@/components/SutraQuote";

export function generateStaticParams() {
  return getAllReflections().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getReflectionBySlug(params.slug);

  return {
    title: post.meta.title,
    description: post.excerpt ?? post.meta.title,
    openGraph: {
      title: post.meta.title,
      description: post.excerpt ?? post.meta.title,
      type: "article",
      url: `/reflections/${params.slug}`,
    },
  };
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
        <Link className="inline-flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity" href="/reflections">
          <span aria-hidden>←</span>
          <span className="underline underline-offset-4 decoration-transparent hover:decoration-current transition-[text-decoration-color]">
            Back to Reflections
          </span>
        </Link>
      </div>

      <header className="space-y-3">
        {dateNice ? (<div className="text-xs uppercase tracking-wide opacity-60">{dateNice}</div>) : null}
        <h1 className="text-4xl font-medium leading-tight" style={{ fontFamily: "var(--font-title)" }}>{title}</h1>
      </header>

      <article className="prose prose-neutral max-w-none">
        <MDXRemote source={content} components={{ SutraQuote }} />
      </article>
    </div>
  );
}
