import Link from "next/link";
import { sutraNotes } from "@/lib/sutraNotesData";

export const metadata = {
  title: "Śūraṅgama Sutra Notes",
  description: "Reading notes and contemplations on the Śūraṅgama Sutra.",
};

export default function SurangamaSutraPage() {
  const sutra = sutraNotes.find(
    (item) => item.href === "/sutra-notes/surangama-sutra"
  );

  if (!sutra) return null;

  return (
    <div className="space-y-8">
      <div className="text-sm">
        <Link
          href="/sutra-notes"
          className="inline-flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
        >
          <span aria-hidden>←</span>
          <span className="underline underline-offset-4 decoration-transparent hover:decoration-current transition-[text-decoration-color]">
            Back to Sutra Notes
          </span>
        </Link>
      </div>

      <header className="space-y-3">
        <h1
          className="text-4xl font-medium leading-tight"
          style={{ fontFamily: "var(--font-title)" }}
        >
          {sutra.title}
        </h1>

        <p className="max-w-2xl text-base opacity-75">
          {sutra.description}
        </p>
      </header>

      <section className="grid gap-4">
        {sutra.notes.map((note) => (
          <Link
            key={note.href}
            href={note.href}
            className="rounded-2xl border p-5 hover:opacity-90"
          >
            <div className="text-lg font-medium">{note.title}</div>

            <div className="mt-2 text-sm opacity-75">
              {note.description}
            </div>

            {note.status === "draft" ? (
              <div className="mt-4 inline-flex rounded-full border px-3 py-1 text-xs opacity-60">
                Draft
              </div>
            ) : null}
          </Link>
        ))}
      </section>
    </div>
  );
}