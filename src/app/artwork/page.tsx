import Link from "next/link";

export default function ArtworkPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1
          className="text-3xl font-semibold"
          style={{ fontFamily: "var(--font-title)" }}
        >
          Artwork
        </h1>
        <p className="opacity-80">
          Buddhist-inspired pieces will appear here when the time is right.
        </p>
      </header>

      <div className="rounded-2xl border p-5" style={{ borderColor: "rgb(var(--border))" }}>
        <div className="text-sm opacity-70">Coming later</div>
        <div className="mt-2">
          This section is intentionally quiet for now. When it opens, it will include:
        </div>
        <ul className="mt-3 list-disc space-y-1 pl-5 opacity-90">
          <li>Small collections</li>
          <li>High-resolution images</li>
          <li>Simple checkout (no clutter)</li>
        </ul>

        <div className="mt-5 text-sm opacity-80">
          Meanwhile, you may enjoy <Link href="/reflections">Reflections</Link> or{" "}
          <Link href="/sutra-notes">Sutra Notes</Link>.
        </div>
      </div>
    </div>
  );
}
