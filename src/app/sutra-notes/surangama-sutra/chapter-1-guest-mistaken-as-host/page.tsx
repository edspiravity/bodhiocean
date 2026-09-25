import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Śūraṅgama Sutra Chapter 1.3 Notes — The Guest Mistaken as the Host",
  description:
    "Buddha’s teaching on the guest mistaken as the host — recognizing what you have mistakenly taken to be your fundamental mind",
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

type DialogueLine = {
  speaker: "Buddha" | "Ananda" | "Narration";
  text: string;
  emphasis?: boolean;
};

type ReflectionItem = {
  content: ReactNode;
};

const sectionLinks = [
  {
    id: "mistaking-the-guest",
    number: "01",
    label: "Mistaking the Guest for the Host",
  },
  {
    id: "dependence-and-impermanence",
    number: "02",
    label: "Dependence and Impermanence",
  },
  {
    id: "anandas-plea",
    number: "03",
    label: "Ananda’s Plea",
  },
];

const firstDialogue: DialogueLine[] = [
  {
    speaker: "Narration",
    text: "The Buddha commented that Ananda now wants to know the path of Śamatha so as to end the cycle of birth and death. The Buddha lifts His golden arm and forms a fist.",
  },
  {
    speaker: "Buddha",
    text: "Do you see or not?",
  },
  {
    speaker: "Ananda",
    text: "I see.",
  },
  {
    speaker: "Buddha",
    text: "What do you see?",
  },
  {
    speaker: "Ananda",
    text: "I see the Buddha raising His arm and forming a radiant fist, shining upon my mind and eyes.",
  },
  {
    speaker: "Buddha",
    text: "What are you using to see it?",
  },
  {
    speaker: "Ananda",
    text: "Like everyone else, I use my eyes to see it.",
  },
  {
    speaker: "Buddha",
    text: "Your eyes may be capable of seeing, but what exactly do you use as your ‘mind’ to experience and cognize the moment when my fist shines with radiance?",
  },
  {
    speaker: "Ananda",
    text: "The Buddha now wants to investigate where this ‘mind’ is. I use this mind that investigates and probes. The mind that is able to investigate is my mind.",
  },
  {
    speaker: "Buddha",
    text: "This is not your mind!",
    emphasis: true,
  },
  {
    speaker: "Ananda",
    text: "If this is not my mind, then what is it?",
  },
  {
    speaker: "Buddha",
    text: "This is the delusional mind and not your True Nature. From beginningless time until this life, you have recognized the thief as your own son, losing sight of your True Essence, and thereby suffering endless cycles of birth and death.",
  },
];

const firstReflections: ReflectionItem[] = [
  {
    content: (
      <>
        The Buddha begins with an ordinary act of seeing, but His
        investigation quickly goes deeper. The question is not merely which
        organ Ananda uses to see the fist, but what Ananda regards as the{" "}
        <strong>“mind”</strong> that recognizes, investigates, and understands
        what is seen.
      </>
    ),
  },
  {
    content: (
      <>
        To the Buddha&apos;s question, Ananda&apos;s answer is almost certainly
        the answer we ourselves would give: the faculty that thinks, analyzes,
        remembers, plans, judges, and investigates — this is what we ordinarily
        identify as <strong>“my mind.”</strong> Because this activity
        accompanies nearly everything we do, we rarely question whether it is
        actually our fundamental nature.
        <IdentityStrip />
      </>
    ),
  },
  {
    content: (
      <>
        Hence, when the Buddha declares, <strong>“This is not your mind,”</strong>{" "}
        it strikes at something far deeper than a mistaken idea. He is
        challenging the very faculty through which Ananda has understood
        himself and the world.
      </>
    ),
  },
  {
    content: (
      <>
        An important point to note is that the Buddha is not saying that this
        discriminating faculty does not exist, nor that thinking itself is
        wrong. The mistake lies in taking this conditioned and discriminating
        activity to be our True Nature. This is why He compares it to
        recognizing a thief as one&apos;s own son: the thief is indeed present,
        but he has been given an identity that does not belong to him.
      </>
    ),
  },
  {
    content: (
      <>
        Ananda&apos;s response reveals how deeply rooted this mistaken
        identification is. Love for the Buddha, renunciation, offerings,
        difficult Dharma practices — and even unwholesome actions — can all
        operate through this same faculty. Therefore, the distinction between
        this discriminating mind and the fundamental mind is not merely a
        distinction between wholesome and unwholesome thinking. It concerns
        the very foundation from which we experience, act, and cultivate.
      </>
    ),
  },
  {
    content: (
      <>
        This also explains Ananda&apos;s fear. If the consciousness he has
        always regarded as <strong>“my mind”</strong> is not his fundamental
        nature, he feels as though nothing remains. Beneath this fear lies a
        deeply rooted assumption: if discriminating thought were absent, then
        there would be no mind and perhaps no “self” remaining at all. It is
        precisely this assumption that the Buddha is beginning to dismantle.
      </>
    ),
  },
];

const secondReflections: ReflectionItem[] = [
  {
    content: (
      <>
        The Buddha now asks Ananda to examine this false mind rather than simply
        accepting another statement about it. If this investigating and
        discerning faculty were truly the fundamental mind, it should retain a
        nature of its own even when separated from the sights, sounds, smells,
        tastes, touches, and mental objects that it discriminates.
      </>
    ),
  },
  {
    content: (
      <>
        However, discrimination only arises in dependence upon objects. While
        listening to the Buddha, discrimination appears in relation to sound;
        with other sensory and mental objects, corresponding discrimination
        appears. Because this faculty manifests in dependence upon what it
        encounters, the Buddha questions whether it can truly be the
        fundamental nature Ananda assumes it to be.
        <DependenceDiagram />
      </>
    ),
  },
  {
    content: (
      <>
        Even withdrawing from external sensory objects and entering an inward
        state of quietness does not automatically reveal the True Mind. A
        subtler form of discriminating activity may still remain, with the
        quiet state itself becoming a subtle mental object — another shadow
        within discriminating consciousness. The Buddha therefore prevents
        Ananda from merely exchanging ordinary thought for another conditioned
        state and calling that the True Mind.
        <QuietnessTrap />
      </>
    ),
  },
  {
    content: (
      <>
        This reveals an important characteristic of the{" "}
        <strong>“Guest”</strong>: it is dependent, and because what it depends
        upon arises and ceases, its manifestations also arise and cease. What
        is conditioned by changing objects cannot simply be identified with the
        fundamental nature that the Buddha is pointing toward.
      </>
    ),
  },
  {
    content: (
      <>
        The Buddha then presses Ananda&apos;s assumption to its logical
        conclusion. If the fundamental mind disappeared whenever the objects
        upon which discrimination depends disappeared, then the Dharma-body
        itself would be annihilated. Who, then, would remain to cultivate and
        realize the non-arising of phenomena?
      </>
    ),
  },
  {
    content: (
      <>
        This question also reaches beyond formal Buddhist cultivation. When we
        examine ourselves, much of what we ordinarily call “me” consists of
        thoughts, memories, preferences, perceptions, plans, and reactions that
        continually arise and change according to conditions. The
        Buddha&apos;s investigation therefore invites a deeper question: if all
        these changing activities are what I take to be{" "}
        <strong>“myself,”</strong> what exactly is the foundation from which I
        am living and acting? In this way, the teaching becomes personally
        relatable — not merely as an abstract question of Buddhist doctrine,
        but as an inquiry into what we fundamentally take ourselves to be.
      </>
    ),
  },
  {
    content: (
      <>
        The Buddha also explains why even profound meditative attainment does
        not necessarily resolve the problem. Practitioners may attain the nine
        successive samādhis yet still fail to reach liberation if they continue
        taking the arising-and-ceasing mind as ultimate truth. Just as great
        learning does not substitute for realization, profound concentration
        does not correct a mistaken foundation by itself.
      </>
    ),
  },
];

const thirdReflections: ReflectionItem[] = [
  {
    content: (
      <>
        Ananda now recognizes that he had mistaken reliance upon the Buddha for
        a substitute for his own cultivation. The Buddha&apos;s compassion,
        teachings, and spiritual power can guide and support him, but another
        being&apos;s realization cannot simply become his own without
        transformation taking place within his own mind.
      </>
    ),
  },
  {
    content: (
      <>
        His statement that his body has left the household life while his mind
        has not entered the Way reveals another important distinction: outward
        forms of cultivation do not necessarily mean that one&apos;s inner
        foundation has changed. One may study, practice, and even live a
        religious life while still operating from the same arising-and-ceasing
        discriminating mind.
      </>
    ),
  },
  {
    content: (
      <>
        Ananda&apos;s comparison of learning without practice to{" "}
        <strong>“speaking of food without becoming full”</strong> also deserves
        careful attention. This does not diminish the importance of learning.
        Rather, it reveals its proper role. Learning can describe and point
        toward the path, but conceptual understanding cannot substitute for
        actual cultivation and realization.
      </>
    ),
  },
  {
    content: (
      <>
        When Ananda says that he has <strong>“lost his fundamental mind,”</strong>{" "}
        this should not mean that the fundamental nature itself has disappeared.
        Rather, through beginningless mistaken identification, he has lost sight
        of it — recognizing the guest as the host or the thief as his own son.
      </>
    ),
  },
  {
    content: (
      <>
        The image of the prodigal son further deepens this meaning. The problem
        is not necessarily that something fundamentally valuable is absent, but
        that one has wandered away from recognizing what was never
        fundamentally absent. Ananda&apos;s spiritual “poverty” arises from not
        knowing the peaceful and ever-abiding nature of mind.
      </>
    ),
  },
  {
    content: (
      <>
        Most importantly, Ananda&apos;s attitude has now changed. He began this
        investigation confidently declaring that the faculty which investigates
        and discriminates must be his mind. After the Buddha&apos;s
        examination, he no longer assumes that he knows. Recognizing the
        inadequacy of his previous understanding, he sincerely asks the Buddha
        to reveal the wondrous, bright mind.
        <AnandaProgression />
      </>
    ),
  },
];

function SutraBlock({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm md:p-7">
      {title && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          {title}
        </p>
      )}

      <div className="space-y-4 leading-8 text-slate-700">{children}</div>
    </div>
  );
}

function ReflectionList({ items }: { items: ReflectionItem[] }) {
  return (
    <div className="mt-7 space-y-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-[auto_1fr] gap-4 leading-8 text-slate-700"
        >
          <div className="mt-[0.7rem] h-1.5 w-1.5 rounded-full bg-[rgb(var(--ocean))]" />
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-6">
      <div className="mb-2 flex items-center gap-3">
        <span className="text-lg text-[rgb(var(--ocean))]">
          {number}
        </span>

        <div className="h-px w-8 bg-slate-300" />
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">{description}</p>
      )}
    </header>
  );
}

function SectionNavigation() {
  return (
    <nav
      aria-label="Chapter 1.3 sections"
      className="grid gap-3 md:grid-cols-3"
    >
      {sectionLinks.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group rounded-2xl border border-slate-200 bg-white/70 px-4 py-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
        >
          <span className="block text-xs font-semibold tracking-[0.18em] text-slate-400">
            {section.number}
          </span>

          <span className="mt-2 block font-medium leading-6 text-slate-700 transition group-hover:text-slate-950">
            {section.label}
          </span>
        </a>
      ))}
    </nav>
  );
}

function BackToPartTop() {
  return (
    <div className="mt-4 flex justify-center">
      <a
        href="#chapter-1-3-top"
        aria-label="Back to the beginning of Chapter 1.3"
        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 hover:text-slate-900"
      >
        <span aria-hidden="true">↑</span>
        Back to Guest Mistaken as Host
      </a>
    </div>
  );
}

function Dialogue({ lines }: { lines: DialogueLine[] }) {
  return (
    <div className="space-y-5">
      {lines.map((line, index) => {
        if (line.speaker === "Narration") {
          return (
            <p
              key={index}
              className="italic leading-8 text-slate-600"
            >
              {line.text}
            </p>
          );
        }

        if (line.emphasis) {
          return (
            <div
              key={index}
              className="grid gap-1 md:grid-cols-[90px_1fr] md:gap-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 md:pt-1.5">
                {line.speaker}
              </p>

              <p className="leading-8 font-semibold text-slate-900">{line.text}</p>
            </div>
          );
        }

        // if (line.emphasis) {
        //   return (
        //     <div
        //       key={index}
        //       className="my-7 rounded-2xl border border-[rgb(var(--ocean))]/20 bg-[rgb(var(--ocean))]/[0.06] px-5 py-6 text-center md:px-8"
        //     >
        //       <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--ocean))]">
        //         {line.speaker}
        //       </p>

        //       <p className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
        //         “{line.text}”
        //       </p>
        //     </div>
        //   );
        // }

        return (
          <div
            key={index}
            className="grid gap-1 md:grid-cols-[90px_1fr] md:gap-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:pt-1.5">
              {line.speaker}
            </p>

            <p className="leading-8 text-slate-700">{line.text}</p>
          </div>
        );
      })}
    </div>
  );
}

function IdentityStrip() {
  const items = [
    "Thinking",
    "Remembering",
    "Planning",
    "Judging",
    "Investigating",
  ];

  return (
    <div className="my-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 md:p-6">
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="my-4 text-center text-slate-300">↓</div>

      <p className="text-center text-xl text-slate-800">
        What we ordinarily identify as “my mind”
      </p>

      <p className="mt-3 text-center text-sm text-slate-500">
        The Buddha asks whether constant familiarity proves that this is our
        fundamental nature.
      </p>
    </div>
  );
}

function DependenceDiagram() {
  const rows = [
    {
      object: "Sound appears",
      discrimination: "Discrimination of sound",
    },
    {
      object: "Visible form appears",
      discrimination: "Visual discrimination",
    },
    {
      object: "Mental object appears",
      discrimination: "Discrimination of thought",
    },
  ];

  return (
    <div className="my-4 grid gap-3 md:grid-cols-3">
      {rows.map((row) => (
        <div
          key={row.object}
          className="rounded-2xl border border-slate-200 bg-white/70 p-5 text-center"
        >
          <p className="text-sm font-medium text-slate-600">{row.object}</p>

          <div className="my-3 text-slate-300">↓</div>

          <p className="text-lg text-slate-800">
            {row.discrimination}
          </p>
        </div>
      ))}

      <div className="md:col-span-3 mt-2 rounded-2xl bg-slate-900 px-5 py-6 text-center text-white">
        <p className="text-xl md:text-2xl">
          If discrimination manifests in dependence upon what it encounters,<br />
          can it be the fundamental mind?
        </p>
      </div>
    </div>
  );
}

function QuietnessTrap() {
  return (
    <div className="my-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        A subtler identification
      </p>


      <div className="mt-5 grid items-center gap-3 text-center md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600">
          External activity quietens
        </div>

        <span className="text-slate-400 md:hidden">↓</span>
        <span className="hidden text-slate-400 md:block">→</span>

        <div className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600">
          Inward stillness appears
        </div>

        <span className="text-slate-400 md:hidden">↓</span>
        <span className="hidden text-slate-400 md:block">→</span>

        <div className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600">
          “This must be the True Mind”
        </div>
      </div>

      <p className="mt-5 leading-7 text-slate-600">
        The Buddha prevents Ananda from simply exchanging ordinary thought for
        another conditioned mental state. Even inward quietness may remain a
        subtle object within discriminating consciousness.
      </p>
    </div>
  );
}

function AnandaProgression() {
  return (
    <div className="my-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 md:p-6">

      <div className="grid items-center gap-3 text-center md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
        <div className="relative min-h-40 rounded-2xl border border-slate-200 bg-white/70 p-5">
          <p className="mt-3 text-xl font-semibold text-slate-800">
            Confidence
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">“The investigating faculty is my mind.”</p>
        </div>

        <span className="text-slate-400 md:hidden">↓</span>
        <span className="hidden text-slate-400 md:block">→</span>

        <div className="relative h-40 rounded-2xl border border-slate-200 bg-white/70 p-5">
          <p className="mt-3 text-xl font-semibold text-slate-800">
            Disruption
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">“If this is not my mind, what remains?”</p>
        </div>

        <span className="text-slate-400 md:hidden">↓</span>
        <span className="hidden text-slate-400 md:block">→</span>

        <div className="relative h-40 rounded-2xl border border-slate-200 bg-white/70 p-5">
          <p className="mt-3 text-xl font-semibold text-slate-800">
            Recognition
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">“My previous understanding is insufficient.”</p>
        </div>

        <span className="text-slate-400 md:hidden">↓</span>
        <span className="hidden text-slate-400 md:block">→</span>

        <div className="relative h-40 rounded-2xl border border-slate-200 bg-white/70 p-5">
          <p className="mt-3 text-xl font-semibold text-slate-800">
            Openness
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">“Please reveal the wondrous, bright mind.”</p>
        </div>
      </div>
    </div>
  );
}

export default function SurangamaGuestMistakenAsHostPage() {
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
            title: "Chapter 1.2 — The Two Foundations",
            href: "/sutra-notes/surangama-sutra/chapter-1-two-foundations",
          }}
          next={{
            title: "Chapter 1.4 — Finding the Host",
            href: "/sutra-notes/surangama-sutra/chapter-1-finding-the-host",
          }}
        />
      </div>

      <main className="min-h-screen rounded-2xl bg-[rgb(var(--sutra-paper))] px-5 py-12 text-slate-900 md:px-8">
        <article id="chapter-1-3-top" className="mx-auto max-w-5xl">
          {/* Header */}
          <header className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-slate-500">
              Śūraṅgama Sutra · Chapter 1.3 Notes
            </p>

            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              The Guest Mistaken as the Host
            </h1>

            <p className="mt-4 text-lg text-slate-600 md:text-xl">
              Recognize what you have mistakenly taken to be your fundamental mind
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
                  In <strong>The Two Foundations</strong>, it revealed that sentient beings undergo birth and death
                  because they do not recognize the two fundamental roots: one
                  proceeding through the changing mind of arising and ceasing, and
                  the other grounded in the originally pure nature of awakening.
                </p>

                <p>
                  But knowing that there are two foundations still leaves an
                  essential question:{" "}
                  <strong>
                    how do we distinguish them within our own experience?
                  </strong>
                </p>

                <p>
                  The Buddha begins by examining what Ananda presently takes to be
                  his mind. Before guiding him toward the fundamental mind, He first
                  exposes the arising-and-ceasing discriminating faculty that Ananda
                  has long mistaken for it — thus beginning the distinction between
                  the transient Guest and the Host.
                </p>
              </div>
            </div>
          </section>


          {/* ------------------------------------------------ */}
          {/* Section navigation */}
          {/* ------------------------------------------------ */}

          <div className="mt-2">
            <SectionNavigation />
          </div>

          {/* ================================================= */}
          {/* SECTION 1 */}
          {/* ================================================= */}

          <section
            id="mistaking-the-guest"
            className="scroll-mt-10 md:pt-12"
          >
            <SectionHeading
              number="01"
              title="Mistaking the Guest for the Host"
              description="The Buddha begins with an ordinary act of seeing and turns it into an investigation of what Ananda has always assumed to be his mind."
            />

            <SutraBlock title="The Buddha questions Ananda">
              <Dialogue lines={firstDialogue} />

              <div className="my-7 border-t border-slate-200" />

              <div className="space-y-4">
                <p>
                  Ananda, startled, explains that this is the same mind through
                  which he loved the Buddha, renounced household life, made
                  offerings, served Buddhas and teachers, and undertook difficult
                  Dharma practices.
                </p>

                <p>
                  He adds that even if he were to perform an unwholesome act, it
                  would also be through this same mind.
                </p>

                <p>
                  If this capacity for understanding is not his mind, Ananda
                  fears that nothing remains — that he would be no different from
                  earth or wood.
                </p>
              </div>
            </SutraBlock>

            <ReflectionList items={firstReflections} />

            <BackToPartTop />
          </section>

          {/* ================================================= */}
          {/* SECTION 2 */}
          {/* ================================================= */}

          <section
            id="dependence-and-impermanence"
            className="scroll-mt-10 pt-16 md:pt-20"
          >
            <SectionHeading
              number="02"
              title="Nature of the Guest — Dependence and Impermanence"
              description="Rather than merely telling Ananda that his assumption is wrong, the Buddha asks him to examine whether the discriminating mind possesses a nature of its own."
            />

            <SutraBlock title="Examine the mind minutely">
              <p>
                The World-Honored One explains that if Ananda insists that the
                investigating, observing, and discerning capacity is truly his
                mind, then it should possess its own complete nature even when
                separated from sights, sounds, scents, tastes, touches, and mental
                objects.
              </p>

              <p>
                While Ananda listens to the teaching, his discrimination exists
                in relation to sound. Even if external seeing and hearing are
                quieted and one inwardly maintains a state of seclusion, that
                quiet state may still remain a shadow of discrimination associated
                with a mental object.
              </p>

              <p>
                The Buddha therefore asks Ananda to investigate carefully: if the
                discriminating nature remains independently when separated from
                objects, then examine that. But if it disappears when the objects
                disappear, then what Ananda calls his mind is merely a reflected
                shadow of sensory discrimination.
              </p>

              <p>
                Sensory objects themselves are impermanent. If the fundamental
                mind were identical with a discrimination that disappears along
                with its objects, then the Dharma-body itself would be reduced to
                annihilation. Who, then, would remain to cultivate and realize
                the non-arising of phenomena?
              </p>

              <p>
                Hearing this, Ananda and the assembly fall into helpless silence.
              </p>

              <p>
                The Buddha further explains that practitioners may attain the nine
                successive samādhis yet still fail to end the outflows if they
                continue taking the cyclic, arising-and-ceasing mind as ultimate
                truth.
              </p>
            </SutraBlock>

            <ReflectionList items={secondReflections} />

            <BackToPartTop />
          </section>

          {/* ================================================= */}
          {/* SECTION 3 */}
          {/* ================================================= */}

          <section
            id="anandas-plea"
            className="scroll-mt-10 pt-16 md:pt-20"
          >
            <SectionHeading
              number="03"
              title="Ananda’s Plea"
              description="The investigation now moves from intellectual examination to personal recognition."
            />

            <SutraBlock title="Ananda recognizes his mistake">
              <p>
                Hearing this, Ananda wept with sorrow once again. He prostrated
                himself fully to the ground, then knelt upright with palms
                pressed together.
              </p>

              <p>
                Ananda admits that ever since he followed the Buddha and left the
                household life, he had relied upon the Buddha&apos;s transcendent
                power. He assumed that the Tathagata could simply bestow samādhi
                upon him, without realizing that body and mind cannot substitute
                for one another.
              </p>

              <p className="text-slate-800 font-semibold">
                “Though my body has left the household life, my mind has not
                entered the Way.”
              </p>

              <p>
                He compares himself to the prodigal son who abandoned his father
                and ran away.
              </p>

              <p>
                Only now does Ananda realize that hearing much of the teaching
                without practicing it is like speaking of food without ever
                becoming full.
              </p>

              <p>
                He therefore asks the Buddha, out of compassion, to reveal the
                wondrous and bright mind and open the spiritual eye to the Way.
              </p>
            </SutraBlock>

            <ReflectionList items={thirdReflections} />

            <BackToPartTop />
          </section>

          {/* ------------------------------------------------ */}
          {/* Conclusion / bridge */}
          {/* ------------------------------------------------ */}

          <section className="mt-8 mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                From here
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-700">
                <p className="font-semibold">
                  Ananda is now ready to stop telling the Buddha what he assumes his
                  mind to be, and begin discovering what the Buddha is pointing
                  toward.
                </p>

                <p>
                  Having exposed the arising-and-ceasing discriminating mind that
                  Ananda had mistaken for his fundamental nature, the Buddha will
                  next bring the investigation into immediate experience through
                  the nature of seeing.
                </p>
              </div>
            </div>
          </section>

        </article>
      </main>

      {/* Bottom back link */}
      <div className="text-sm space-y-4">
        <NoteNavigation
          previous={{
            title: "Chapter 1.2 — The Two Foundations",
            href: "/sutra-notes/surangama-sutra/chapter-1-two-foundations",
          }}
          next={{
            title: "Chapter 1.4 — Finding the Host",
            href: "/sutra-notes/surangama-sutra/chapter-1-finding-the-host",
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