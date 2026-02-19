import Link from "next/link";
import { getAllReflections } from "@/lib/reflections";

export default function ReflectionsIndex() {
  const posts = getAllReflections();

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Reflections</h1>
        <p className="opacity-80">
          Personal practice notes and lived contemplations.
        </p>
      </header>

      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-2xl border p-5">
            <div className="text-sm opacity-70">{p.date}</div>
            <Link className="text-lg font-semibold" href={`/reflections/${p.slug}`}>
              {p.title}
            </Link>
            {p.tags?.length ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border px-2 py-0.5 text-xs opacity-80">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
