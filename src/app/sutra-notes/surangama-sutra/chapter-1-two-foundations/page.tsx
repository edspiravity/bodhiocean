import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Śūraṅgama Sutra Chapter 1.2 Notes — The Two Foundations",
  description:
    "Buddha’s teaching on the two foundations — Birth and Death vs. Bodhi and Nirvana.",
};
type NoteLink = {
  title: string;
  href: string;
};

function NoteNavigation({
  previous,
  next,
}: {
  previous?: NoteLink;
  next?: NoteLink;
}) {
  return (
    <nav
      aria-label="Sutra note navigation"
      className="grid grid-cols-2 gap-4 text-sm"
    >
      <div>
        {previous && (
          <Link
            href={previous.href}
            className="group inline-flex flex-col items-start opacity-70 transition-opacity hover:opacity-100"
          >
            <span className="font-medium underline decoration-transparent underline-offset-4 transition-[text-decoration-color] group-hover:decoration-current">
              ← {previous.title}
            </span>
          </Link>
        )}
      </div>

      <div className="text-right">
        {next && (
          <Link
            href={next.href}
            className="group inline-flex flex-col items-end opacity-70 transition-opacity hover:opacity-100"
          >
            <span className="font-medium underline decoration-transparent underline-offset-4 transition-[text-decoration-color] group-hover:decoration-current">
              {next.title} →
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}

function NoteBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <div className="space-y-3 leading-7 text-slate-700">
        {children}
      </div>
    </section>
  );
}

function Reflection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 space-y-4 leading-8 text-slate-700">
      {children}
    </div>
  );
}

function FoundationPoint({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <span
        className={`mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full ${
          dark ? "bg-slate-300" : "bg-slate-500"
        }`}
        aria-hidden="true"
      />

      <p
        className={`leading-8 ${
          dark ? "text-slate-200" : "text-slate-700"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

export default function SurangamaTwoFoundationsPage() {
  return (
    <div className="space-y-4">
      {/* Back link */}
      <div className="text-sm space-y-4">
        <Link
          href="/sutra-notes/surangama-sutra"
          className="inline-flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
        >
          <span aria-hidden>←</span>

          <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] hover:decoration-current">
            Back to Śūraṅgama Sutra Notes
          </span>
        </Link>
        <NoteNavigation
          previous={{
            title: "Chapter 1.1 — The Seven Locations of the Mind",
            href: "/sutra-notes/surangama-sutra/chapter-1-seven-locations",
          }}
          next={{
            title: "Chapter 1.3 — The Guest Mistaken as the Host",
            href: "/sutra-notes/surangama-sutra/chapter-1-guest-mistaken-as-host",
          }}
        />
      </div>

      <main className="min-h-screen rounded-2xl bg-[rgb(var(--sutra-paper))] px-5 py-12 text-slate-900 md:px-8">
        <article className="mx-auto max-w-5xl">
          {/* Header */}
          <header className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-slate-500">
              Śūraṅgama Sutra · Chapter 1.2 Notes
            </p>

            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              The Two Foundations
            </h1>

            <p className="mt-4 text-lg text-slate-600 md:text-xl">
              Why Learning Alone Does Not Free the Mind
            </p>
          </header>

          {/* Introduction */}
          <section className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                Introduction
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-700">
                <p>
                  Learning can describe the path, but it cannot
                  replace the transformation of the foundation
                  from which one sees, thinks, and cultivates.
                </p>

                <p>
                  Ananda is highly learned and has heard many of
                  the Buddha&apos;s teachings. Yet his encounter
                  with Matangi reveals that learning by itself
                  has not brought him to liberation.
                </p>

                <p>
                  The Buddha now brings the investigation deeper:
                  if cultivation begins from a mistaken
                  foundation, even great effort cannot lead to
                  the intended fruit.
                </p>
              </div>
            </div>
          </section>

          {/* Bridge from Seven Locations */}
          <section className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                From the Seven Locations to the Two Foundations
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-700">
                <p>
                  In the Seven Locations, the Buddha dismantles
                  Ananda&apos;s attempts to locate the mind
                  somewhere within or outside the body. But the
                  Buddha&apos;s purpose is deeper than simply
                  showing that each proposed location is
                  incorrect.
                </p>

                <p>
                  The Seven Locations expose that Ananda has been
                  searching for the mind while unknowingly taking
                  the conditioned, discriminating mind itself as
                  the instrument of that search.
                </p>

                <p>
                  The teaching now reveals why this matters. The
                  question moves from{" "}
                  <strong>
                    &ldquo;Where is the mind?&rdquo;
                  </strong>{" "}
                  to the more fundamental question:{" "}
                  <strong>
                    &ldquo;Which mind have we been taking to be
                    our true mind?&rdquo;
                  </strong>
                </p>

                <p>
                  The Two Foundations answer this by
                  distinguishing the conditioned mind that leads
                  to birth and death from the original bright
                  nature that is the basis of Bodhi and Nirvana.
                </p>
              </div>
            </div>
          </section>

          {/* Ananda's confession */}
          <section className="mb-12">
            <NoteBlock title="Ananda’s Confession">
              <p>
                Ananda, with his utmost respect, admitted to the
                Buddha that although he had been ordained as a
                monk and was highly learned, he had not attained
                Arhathood.
              </p>

              <p>
                He still relied upon the Buddha&apos;s affection
                and coddling. As a result, he was unable to
                overcome Matangi&apos;s spell and almost fell
                trapped.
              </p>

              <p>
                All this was because he did not yet know where
                the ultimate path of truth leads.
              </p>
            </NoteBlock>

            <Reflection>
              <p>
                There are two great learning points here.
              </p>

              <p>
                <strong>
                  Firstly, learning alone is not enough.
                </strong>{" "}
                Knowledge can describe the path and explain its
                principles, but knowing about liberation is not
                the same as directly realizing it.
              </p>

              <p>
                <strong>
                  Secondly, another person&apos;s realization
                  cannot substitute for one&apos;s own
                  cultivation.
                </strong>{" "}
                The Buddha can reveal the path, but he cannot do
                the seeing, relinquishing, or awakening for
                another unawakened sentient being.
              </p>
            </Reflection>
          </section>

          {/* Shamatha */}
          <section className="mb-12">
            <NoteBlock title="Ananda Requests the Path of Shamatha">
              <p>
                Ananda earnestly requests the Buddha to show
                everyone the path of Shamatha, or meditative
                stillness, so that sentient beings devoid of
                faith and good roots can destroy their strongly
                attached deviant views.
              </p>

              <p>
                The assembly waits with eager thirst,
                reverently yearning to hear the Buddha&apos;s
                teaching.
              </p>
            </NoteBlock>

            <Reflection>
              <p>
                Ananda&apos;s request is no longer only about his
                own failure. He now asks for a path that can help
                other sentient beings whose understanding is
                obscured by deeply rooted mistaken views.
              </p>

              <p>
                This also marks a shift away from accumulating
                further knowledge alone. What is needed is a
                transformation in how the mind sees and
                cultivates.
              </p>
            </Reflection>
          </section>

          {/* Illumination */}
          <section className="mb-12">
            <NoteBlock title="The Buddha Illuminates the Assembly">
              <p>
                The Buddha responds to Ananda&apos;s request.
                Instead of speaking immediately, the Buddha
                performs a cosmic manifestation that shatters
                the ordinary perception of physical distance and
                separateness.
              </p>

              <p>
                Through His spiritual light, the worlds in the
                ten directions become mutually visible within a
                vast and unobstructed realm.
              </p>
            </NoteBlock>

            <Reflection>
              <p>
                The Buddha does not begin merely by adding
                another concept for Ananda to understand.
                Instead, the teaching is preceded by a direct
                manifestation that loosens the assembly&apos;s
                ordinary assumptions about distance,
                separation, and limitation.
              </p>

              <p>
                This prepares Ananda for an investigation that is
                no longer simply about locating a mind somewhere
                inside or outside the body.
              </p>
            </Reflection>
          </section>

          {/* Cultivation going astray */}
          <section className="mb-12">
            <NoteBlock title="Why Cultivation Can Go Astray">
              <p>
                The Buddha explains that all sentient beings,
                from beginningless time, have fallen into all
                kinds of upside-down delusions.
              </p>

              <p>
                These naturally breed karmic seeds containing
                delusion, karma, and suffering, linked
                inextricably together.
              </p>

              <p>
                This is why many spiritual practitioners fail to
                achieve Unsurpassed Bodhi. Some deviate into
                becoming Hearers or Solitary Realizers, while
                others may end up as non-Buddhists, heavenly
                beings, demon kings, or members of the retinue
                of demons.
              </p>

              <p>
                The Buddha explains that this happens because
                they do not know the two kinds of fundamental
                roots and instead cultivate blindly.
              </p>
            </NoteBlock>

            <Reflection>
              <p>
                The problem is deeply rooted across
                beginningless lifetimes. We repeatedly mistake
                what is temporary and conditioned for what is
                fundamental.
              </p>

              <p>
                From this mistaken foundation,{" "}
                <strong>
                  delusion, karma, and suffering
                </strong>{" "}
                naturally become linked together and perpetuate
                one another.
              </p>

              <p>
                Many spiritual practitioners may cultivate
                extraordinarily hard, but if the cause is
                mistaken, increasing the effort does not produce
                the intended fruit.
              </p>

              <p>
                The Buddha compares this to boiling sand and
                expecting it to become a delicious meal. Even if
                one waits for countless eons, sand will never
                become rice.
              </p>

              <p>
                The problem is therefore not insufficient effort.
                The starting cause itself is wrong.
              </p>
            </Reflection>
          </section>

          {/* The Two Foundations */}
          <section
            id="two-foundations"
            className="mb-12 scroll-mt-8"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                The Core — The Two Foundations
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-700">
                <p>
                  The Buddha now reveals the two fundamental
                  roots. One is the foundation of continued birth
                  and death. The other is the foundation of Bodhi
                  and Nirvana.
                </p>

                <p>
                  The decisive issue is therefore not simply how
                  much one cultivates, but{" "}
                  <strong>
                    the foundation from which that cultivation
                    begins.
                  </strong>
                </p>
              </div>
            </div>

            {/* Two Foundations */}
            <div className="grid gap-5 md:grid-cols-2">
              {/* Fundamental One */}
              <section className="flex h-full flex-col rounded-2xl bg-slate-700 p-5 text-white shadow-sm md:p-6">
                <div>
                  <p className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-slate-300">
                    Fundamental One
                  </p>

                  <h3 className="text-xl font-semibold text-white md:text-2xl">
                    The Root of Birth and Death
                  </h3>

                  <p className="mt-2 font-medium text-slate-300">
                    The conditioned, grasping mind
                  </p>
                </div>

                <div className="my-5 border-t border-slate-600" />

                <p className="mb-5 leading-8 text-slate-200">
                  Taking a mind that grasps at external stimuli
                  and mistaking these transient thoughts for who
                  we actually are.
                </p>

                <div className="flex-1 space-y-4">
                  <FoundationPoint dark>
                    The grasping mind is the conditioned,
                    reactive intellect — our everyday thoughts,
                    emotions, memories, judgements, and
                    reactions.
                  </FoundationPoint>

                  <FoundationPoint dark>
                    It arises dependent upon conditions, reacting
                    continually to sights, sounds, ideas, and
                    other experiences.
                  </FoundationPoint>

                  <FoundationPoint dark>
                    Because it changes along with conditions, it
                    is itself constantly changing, fading, and
                    reacting.
                  </FoundationPoint>

                  <FoundationPoint dark>
                    Yet we mistake this stream of conditioned
                    mental activity for our true mind or actual
                    self.
                  </FoundationPoint>

                  <FoundationPoint dark>
                    By identifying with what is changing, we
                    remain tethered to the changing conditioned
                    world and continue within birth and death.
                  </FoundationPoint>
                </div>

                <div className="mt-6 border-t border-slate-600 pt-4">
                  <p className="font-semibold text-white">
                    Mistaken foundation → Birth and Death
                  </p>
                </div>
              </section>

              {/* Fundamental Two */}
              <section className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm md:p-6">
                <div>
                  <p className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                    Fundamental Two
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">
                    The Root of Bodhi and Nirvana
                  </h3>

                  <p className="mt-2 font-medium text-slate-600">
                    The original bright nature
                  </p>
                </div>

                <div className="my-5 border-t border-slate-200" />

                <p className="mb-5 leading-8 text-slate-700">
                  Every living being inherently possesses the
                  indestructible true nature — the pure essence
                  of Bodhi and Nirvana.
                </p>

                <div className="flex-1 space-y-4">
                  <FoundationPoint>
                    This original bright nature has never
                    actually been absent or separated from us.
                  </FoundationPoint>

                  <FoundationPoint>
                    It can respond amid conditions without itself
                    being reduced to the conditioned thoughts and
                    appearances that arise.
                  </FoundationPoint>

                  <FoundationPoint>
                    Living beings lose sight of this original
                    brightness precisely amid the activity of
                    those conditions.
                  </FoundationPoint>

                  <FoundationPoint>
                    We therefore use it continuously throughout
                    every day without recognizing it.
                  </FoundationPoint>

                  <FoundationPoint>
                    Because it remains unrecognized, we
                    needlessly continue through the various
                    realms of rebirth.
                  </FoundationPoint>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900">
                    True foundation → Bodhi and Nirvana
                  </p>
                </div>
              </section>
            </div>

            {/* Synthesis */}
            <div className="mt-6 space-y-4 leading-8 text-slate-700">
              <p>
                The distinction is therefore not between having
                a mind and having no mind.
              </p>

              <p>
                It is between mistaking conditioned mental
                activity for our fundamental nature, and
                recognizing the original brightness that has
                never actually been absent.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                Conclusion
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-700">
                <p>
                  The Buddha&apos;s teaching on the Two
                  Foundations shifts the emphasis away from
                  effort alone.
                </p>

                <p>
                  A practitioner may study extensively,
                  cultivate diligently, and persevere for a very
                  long time. Yet if the conditioned, grasping
                  mind is still being taken as the fundamental
                  mind, cultivation begins from the very root
                  that perpetuates birth and death.
                </p>

                <p>
                  This reveals why the Seven Locations were
                  necessary. The Buddha first dismantled
                  Ananda&apos;s attempts to locate and grasp the
                  mind. He now reveals the deeper problem:
                  Ananda has been taking the conditioned mind as
                  the foundation of his understanding and
                  cultivation.
                </p>

                <p>
                  The investigation has therefore progressed from
                  asking{" "}
                  <strong>
                    &ldquo;Where is the mind?&rdquo;
                  </strong>{" "}
                  to asking{" "}
                  <strong>
                    &ldquo;Which mind have we been taking to be
                    our true mind?&rdquo;
                  </strong>
                </p>

                <p>
                  With the Two Foundations distinguished, the
                  Buddha can now lead Ananda further toward
                  recognizing the true nature that has always
                  been present but overlooked.
                </p>
              </div>
            </div>
          </section>

          {/* Back to top */}
          <div className="flex justify-center">
            <a
              href="#two-foundations"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 hover:text-slate-900"
              aria-label="Back to the beginning of the Two Foundations section"
            >
              <span aria-hidden="true">↑</span>
              Back to Two Foundations
            </a>
          </div>
        </article>
      </main>

      {/* Bottom back link */}
      <div className="text-sm space-y-4">
        <NoteNavigation
          previous={{
            title: "Chapter 1.1 — The Seven Locations of the Mind",
            href: "/sutra-notes/surangama-sutra/chapter-1-seven-locations",
          }}
          next={{
            title: "Chapter 1.3 — The Guest Mistaken as the Host",
            href: "/sutra-notes/surangama-sutra/chapter-1-guest-mistaken-as-host",
          }}
        />

        <div>
          <Link
            href="/sutra-notes/surangama-sutra"
            className="inline-flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            <span aria-hidden>←</span>
            <span className="underline underline-offset-4 decoration-transparent hover:decoration-current transition-[text-decoration-color]">
              Back to Śūraṅgama Sutra Notes
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}