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

      <ul className="space-y-6">
        {posts.map((p) => (
          <li
            key={p.slug}
            className="rounded-2xl border p-4 transition-colors duration-200 hover:bg-black/2 dark:hover:bg-white/2"
            style={{ borderColor: "rgb(var(--border))" }}
          >
            <Link href={`/reflections/${p.slug}`} className="block">
              <div className="text-sm opacity-70">{p.date}</div>
              <div className="text-base font-medium">{p.title}</div>

              {p.tags?.length ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-2.5 py-1 text-xs"
                      style={{
                        color: "rgb(var(--ocean))",
                        background: "rgb(var(--ocean) / 0.08)",
                        border: "1px solid rgb(var(--ocean) / 0.05)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
