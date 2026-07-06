import Link from "next/link";
import { sutraNotes } from "@/lib/sutraNotesData";

export const metadata = {
  title: "Sutra Notes",
  description: "Reading notes and contemplations arranged by sutra.",
};

export default function SutraNotesPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1
          className="text-4xl font-medium leading-tight"
          style={{ fontFamily: "var(--font-title)" }}
        >
          Sutra Notes
        </h1>

        <p className="max-w-2xl text-base opacity-75">
          Notes from reading, reflecting, and practicing with Buddhist sutras.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {sutraNotes.map((sutra) => (
          <Link
            key={sutra.href}
            href={sutra.href}
            className="rounded-2xl border p-5 hover:opacity-90"
          >
            <div className="text-lg font-medium">{sutra.title}</div>

            <div className="mt-2 text-sm opacity-75">
              {sutra.description}
            </div>

            <div className="mt-4 text-xs uppercase tracking-wide opacity-50">
              {sutra.notes.length}{" "}
              {sutra.notes.length === 1 ? "note" : "notes"}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}