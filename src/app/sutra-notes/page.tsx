import Link from "next/link";
import { getAllSutraNotes } from "@/lib/sutraNotes";

export default function SutraNotesIndex() {
  const posts = getAllSutraNotes();

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Sutra Notes</h1>
        <p className="opacity-80">
          Reading notes, quotations, and contemplations.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="rounded-2xl border p-5 opacity-80">
          No sutra notes yet.
        </div>
      ) : (
        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.slug} className="rounded-2xl border p-5">
              <div className="text-sm opacity-70">{p.date}</div>
              <Link className="text-lg font-semibold" href={`/sutra-notes/${p.slug}`}>
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
      )}
    </div>
  );
}
