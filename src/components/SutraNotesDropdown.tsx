import Link from "next/link";
import { sutraNotes } from "@/lib/sutraNotesData";

export function SutraNotesDropdown() {
  return (
    <div className="relative group">
      <Link
        href="/sutra-notes"
        className="inline-flex items-center gap-1 opacity-75 hover:opacity-100 transition-opacity"
      >
        <span>Sutra Notes</span>
        <span className="text-xs opacity-60">▾</span>
      </Link>

      <div className="invisible absolute right-0 z-20 mt-0 min-w-64 rounded-2xl bg-white p-2 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
        <Link
          href="/sutra-notes"
          className="block rounded-xl px-3 py-2 opacity-70 hover:bg-neutral-100 hover:opacity-100"
        >
          All Sutra Notes
        </Link>

        {sutraNotes.map((sutra) => (
          <Link
            key={sutra.href}
            href={sutra.href}
            className="block rounded-xl px-3 py-2 opacity-70 hover:bg-neutral-100 hover:opacity-100"
          >
            {sutra.title}
          </Link>
        ))}
      </div>
    </div>
  );
}