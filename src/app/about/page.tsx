export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1
          className="text-3xl font-medium"
          style={{ fontFamily: "var(--font-title)" }}
        >
          About
        </h1>
        <p className="opacity-80">
          Bodhi Ocean is a quiet journal of practice — reflections, sutra encounters, and
          notes from daily life as a lay practitioner.
        </p>
      </header>

{/*      <div
        className="rounded-2xl border p-5"
        style={{ borderColor: "rgb(var(--border))" }}
      >*/}
        <article className="prose prose-neutral max-w-none">
          <h2 style={{ fontFamily: "var(--font-title)" }}>What this site is</h2>
          <ul>
            <li>Personal reflections written as practice notes.</li>
            <li>Short sutra notes: brief quotations and contemplations.</li>
            <li>A space for Buddhist-inspired artwork (when it is ready).</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-title)" }}>What this site is not</h2>
          <ul>
            <li>Not formal teaching.</li>
            <li>Not a claim to authority.</li>
            <li>Not a substitute for a qualified teacher or community.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-title)" }}>Contact</h2>
          <p>
            If something here raises a question you can’t quite place, you can reach me at{" "}
            <a href="mailto:hello@bodhiocean.com">hello@bodhiocean.com</a>.
          </p>
        </article>
      {/*</div>*/}
    </div>
  );
}
