export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold leading-tight">
          Bodhi Ocean
        </h1>
        <p className="text-lg opacity-80">
          A quiet journal of practice: reflections, sutra encounters, and the path of clarity.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <a className="rounded-2xl border p-5 hover:opacity-90" href="/reflections">
          <div className="text-lg font-semibold">Reflections</div>
          <div className="mt-1 text-sm opacity-75">Life + mind, written as practice notes.</div>
        </a>

        <a className="rounded-2xl border p-5 hover:opacity-90" href="/sutra-notes">
          <div className="text-lg font-semibold">Sutra Notes</div>
          <div className="mt-1 text-sm opacity-75">Reading notes and contemplations.</div>
        </a>

        <a className="rounded-2xl border p-5 hover:opacity-90" href="/artwork">
          <div className="text-lg font-semibold">Artwork</div>
          <div className="mt-1 text-sm opacity-75">Coming later — Buddhist-inspired pieces.</div>
        </a>

        <a className="rounded-2xl border p-5 hover:opacity-90" href="/about">
          <div className="text-lg font-semibold">About</div>
          <div className="mt-1 text-sm opacity-75">Why this exists; how to read it.</div>
        </a>
      </section>
    </div>
  );
}
