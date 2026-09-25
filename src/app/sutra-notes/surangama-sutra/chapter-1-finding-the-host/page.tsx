import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Śūraṅgama Sutra Chapter 1.4 Notes — Finding the Host",
  description:
    "Through the nature of seeing, the Buddha guides Ananda to distinguish what changes from what is not carried along by those changes.",
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

type Speaker = "Buddha" | "Ananda" | "Kaundinya" | "Narration";

type DialogueLine = {
  speaker: Speaker;
  text: string;
  emphasis?: boolean;
};

type ReflectionItem = {
  content: ReactNode;
};

const sectionLinks = [
  {
    id: "nature-of-seeing",
    number: "01",
    label: "The Nature of Seeing",
  },
  {
    id: "host-and-guest",
    number: "02",
    label: "Distinguishing the Host from the Guest",
  },
];

const firstDialogue: DialogueLine[] = [
  {
    speaker: "Narration",
    text: "From the svastika design upon His chest, the Tathagata radiated a precious light that pervaded the worlds of the ten directions before returning to rest upon Ananda and the assembly.",
  },
  {
    speaker: "Buddha",
    text: "Today, I shall erect the great banner of the Dharma for you, and likewise cause all sentient beings in the ten directions to attain the wondrous, profound, and hidden Mind — pure and bright by nature — and to acquire the clear, undefiled eye.",
  },
  {
    speaker: "Buddha",
    text: "You previously answered me that you saw my radiant fist. By virtue of what does this fist possess its radiance? How did it become a fist? And with what did you see it?",
  },
  {
    speaker: "Ananda",
    text: "Because the Buddha’s entire body is made of Jambu-river gold, its purity gives rise to this radiance. I observed it with my eyes, and as the fingers of Your hand curved and closed, the form of a fist was made.",
  },
  {
    speaker: "Buddha",
    text: "If I had no hand, my fist could not be formed. If you had no eyes, your seeing could not occur. If you compare the faculty of your eyes to the principle of my fist, are the two meanings identical?",
  },
  {
    speaker: "Ananda",
    text: "Yes, World-Honored One. Just as there is no fist without a hand, there would be no seeing without my eyes.",
  },
  {
    speaker: "Buddha",
    text: "You say they are alike, but that is not correct.",
    emphasis: true,
  },
];

const darknessDialogue: DialogueLine[] = [
  {
    speaker: "Buddha",
    text: "If a person has no hand, their fist is gone forever. But for a person who has no eyes, their seeing is not entirely lost. Ask a blind person what they see, and they will answer that only darkness is before them.",
  },
  {
    speaker: "Ananda",
    text: "The blind see only darkness before their eyes. How can that be called seeing?",
  },
  {
    speaker: "Buddha",
    text: "If a person with sight is placed in a pitch-black room, is the darkness before them different from the darkness seen by the blind?",
  },
  {
    speaker: "Ananda",
    text: "There is no difference, World-Honored One.",
  },
];

const lampDialogue: DialogueLine[] = [
  {
    speaker: "Buddha",
    text: "If the blind person suddenly regains sight and visible forms appear, you call this the eye seeing. But when a person in a dark room receives a lamp and visible forms appear, would you then call this the lamp seeing?",
  },
  {
    speaker: "Buddha",
    text: "If the lamp were seeing, then the lamp itself would possess the capacity to see. Furthermore, if the lamp were doing the seeing, what would that have to do with you?",
  },
  {
    speaker: "Buddha",
    text: "Therefore, while a lamp enables colours to show, it is the eye and not the lamp that sees. Likewise, the eye enables colours to show, but the nature of seeing belongs to mind, not to the eye.",
    emphasis: true,
  },
];

const secondDialogue: DialogueLine[] = [
  {
    speaker: "Buddha",
    text: "When I first attained enlightenment, I spoke of guest-dust afflictions. What understanding enabled you to realize the sagely fruit?",
  },
  {
    speaker: "Kaundinya",
    text: "I realized the fruit of the path because I awakened to the meaning of the two words: guest and dust.",
  },
  {
    speaker: "Kaundinya",
    text: "A traveling guest stops at an inn for lodging or a meal. When finished, he packs his belongings and continues his journey. If he were truly the host, he would have nowhere to go. Thus, what does not stay has the meaning of a guest.",
  },
  {
    speaker: "Kaundinya",
    text: "When sunlight shines through a crevice, tiny particles of dust can be seen moving and fluctuating, while the empty space remains unaffected by their movement. Thus, what moves and vibrates has the meaning of dust.",
  },
  {
    speaker: "Buddha",
    text: "It is exactly so!",
    emphasis: true,
  },
];

const movementDialogue: DialogueLine[] = [
  {
    speaker: "Narration",
    text: "The Tathagata repeatedly opened and closed His hand before the assembly.",
  },
  {
    speaker: "Buddha",
    text: "Is it my hand that opens and closes, or is it your seeing that opens and closes?",
  },
  {
    speaker: "Ananda",
    text: "The World-Honored One’s hand opens and closes. My nature of seeing does not open or close.",
  },
  {
    speaker: "Buddha",
    text: "Which is moving, and which is still?",
  },
  {
    speaker: "Ananda",
    text: "The Buddha’s hand does not stay still. As for my nature of seeing, it does not even possess a state of stillness, so how could it be said to move?",
  },
  {
    speaker: "Buddha",
    text: "It is exactly so!",
    emphasis: true,
  },
];

const headMovementDialogue: DialogueLine[] = [
  {
    speaker: "Narration",
    text: "The Buddha then shone a precious light first to Ananda’s right and then to his left. Ananda turned his head in each direction.",
  },
  {
    speaker: "Buddha",
    text: "When you turned your head left and right, was it your head that moved, or was it your seeing that moved?",
  },
  {
    speaker: "Ananda",
    text: "My head moved. As for my nature of seeing, it does not even have a point of stopping, so how could it shake or move?",
  },
  {
    speaker: "Buddha",
    text: "It is exactly so!",
    emphasis: true,
  },
];

const firstReflections: ReflectionItem[] = [
  {
    content: (
      <>
        The Buddha does not simply start by defining the Host for Ananda.
        Instead, He begins by guiding him to distinguish the{" "}
        <strong>nature of seeing</strong> from the seeing of visible forms,
        which is what we ordinarily refer to simply as “seeing.”
      </>
    ),
  },
  {
    content: (
      <>
        The Buddha first asks whether the relationship between hand and fist
        is equivalent to the relationship between eye and seeing. Ananda
        assumes that they are: without a hand there can be no fist, and
        without the eye there can be no seeing. The Buddha&apos;s following
        demonstration is specifically intended to overturn this assumed
        equivalence.
        <HandEyeComparison />
      </>
    ),
  },
  {
    content: (
      <>
        Within the Buddha&apos;s analogy, a blind person reports only darkness
        before him. A sighted person placed in a completely dark room also
        reports only darkness before him. By bringing both to this common
        baseline, the Buddha challenges the assumption:{" "}
        <strong>
          does the absence of visible forms mean that the nature of seeing
          itself has been annihilated?
        </strong>
        <DarknessComparison />
      </>
    ),
  },
  {
    content: (
      <>
        The Buddha then takes the reasoning one step further. If the blind
        person regains sight and visible forms appear, we ordinarily say that
        the eye now sees. But if a lamp is lit for the sighted person in the
        dark room and visible forms likewise appear, we would not say that the
        lamp itself sees.
      </>
    ),
  },
  {
    content: (
      <>
        The lamp provides the condition by which forms become visible, but the
        lamp does not possess the nature of seeing. In a similar way, the eye
        provides the faculty through which visible forms manifest, but it is
        not itself the nature of seeing. The Buddha now guides Ananda to
        recognize that the nature of seeing cannot simply be identified with
        the physical eye.
        <LampEyeSeeing />
      </>
    ),
  },
  {
    content: (
      <>
        At this stage, the Buddha has not yet given Ananda another object that
        he can simply identify and call the True Mind. Rather, He begins by
        separating the nature of seeing from what Ananda has habitually assumed
        to be its source — the eyes.
      </>
    ),
  },
  {
    content: (
      <>
        This also reveals something important about deeply rooted assumptions.
        We do not necessarily accept something false because we deliberately
        choose falsehood. An assumption can be repeated so continuously that
        eventually it no longer appears to us as an assumption at all.
        “The eye sees” seems self-evident precisely because we rarely examine
        what we actually mean by seeing.
      </>
    ),
  },
  {
    content: (
      <>
        The Buddha&apos;s method therefore does not ask us to doubt everything
        indiscriminately. Instead, it shows that familiarity and long-held
        assumption are not themselves proof of truth. What appears obvious may
        still contain an unexamined identification.
      </>
    ),
  },
  {
    content: (
      <>
        This continues the method begun in Chapter 1.3. There, Ananda assumed,
        “The faculty that investigates is my mind.” Here, he assumes,
        “The eye is what sees.” In both cases, the Buddha takes what appears
        completely obvious and asks Ananda to examine it more deeply.
      </>
    ),
  },
];

const secondReflections: ReflectionItem[] = [
  {
    content: (
      <>
        The Buddha recalls His earlier teaching to Kaundinya and the other first
        disciples concerning <strong>“guest-dust afflictions,”</strong> and
        asks what understanding had enabled them to realize the sagely fruit.
        Kaundinya responds by explaining the meanings of “guest” and “dust.”
      </>
    ),
  },
  {
    content: (
      <>
        Kaundinya gives two related analogies. A traveling guest arrives at an
        inn, stays temporarily, and eventually leaves, whereas the host remains.
        Thus, what comes and goes has the characteristic of a “guest.” Likewise,
        dust illuminated by sunlight continually moves and fluctuates, while
        the empty space in which it appears is not carried along by that
        movement. Thus, what moves and changes has the characteristic of
        “dust.”
        <GuestDustComparison />
      </>
    ),
  },
  {
    content: (
      <>
        These analogies do not mean that the Host should simply be imagined as
        another fixed or motionless object. Rather, they teach us to begin
        distinguishing what comes, goes, moves, and changes from that which is
        not itself carried along by those changing conditions.
        <SpaceInsight />
      </>
    ),
  },
  {
    content: (
      <>
        Kaundinya also makes an important point about realization. His
        understanding of “guest” and “dust” was not merely an intellectual
        ability to explain the analogies; it was an awakening through which he
        realized the fruit of the path. Conceptual understanding remains
        important because it points us in the right direction, but we should
        not mistake the ability to explain a teaching for having fully realized
        what it points toward.
      </>
    ),
  },
  {
    content: (
      <>
        The Buddha then brings this teaching directly into Ananda&apos;s
        immediate experience. He repeatedly opens and closes His hand and asks
        whether it is the hand that opens and closes or whether Ananda&apos;s
        nature of seeing also opens and closes. Ananda recognizes that the
        Buddha&apos;s hand changes, while his seeing does not expand or contract
        together with it.
      </>
    ),
  },
  {
    content: (
      <>
        The Buddha next shines light to Ananda&apos;s left and right, causing
        Ananda to turn his head. Again, Ananda recognizes that it is his head
        that moves, not his nature of seeing.
        <MovementComparison />
      </>
    ),
  },
  {
    content: (
      <>
        In both demonstrations, the Buddha is not merely contrasting something
        that moves with another thing that remains stationary. Ananda says that
        the nature of seeing does not even possess a state of stillness, so how
        could it be said to move? Movement and stillness describe the changing
        phenomena being experienced, but the nature of seeing is not itself
        carried along by those conditions.
      </>
    ),
  },
  {
    content: (
      <>
        The significance of the guest-and-host analogy now becomes clearer. The
        Buddha asks why we continually take what moves, changes, arises, and
        ceases — our thoughts, body, and experienced phenomena — to be our
        fundamental nature. When what continually comes and goes is mistaken
        for what we fundamentally are, we lose sight of our True Nature and
        become bound to the arising and ceasing through which cyclic existence
        and suffering continue.
      </>
    ),
  },
  {
    content: (
      <>
        Here, there is an important distinction to preserve:{" "}
        <strong>
          the Guest is not wrong simply because it appears, and the Dust is not
          wrong simply because it moves.
        </strong>{" "}
        The mistake lies in grasping what comes and goes as the Host — taking
        conditioned and changing phenomena to be our fundamental nature.
        <GuestHostTakeaway />
      </>
    ),
  },
  {
    content: (
      <>
        This also brings Chapter 1.3 and Chapter 1.4 together. Chapter 1.3 showed that the
        discriminating mind should not simply be identified as our fundamental
        mind because it manifests in dependence upon changing conditions. Chapter 1.4  
        now deepens the investigation through seeing: the objects change, the
        hand opens and closes, the head turns left and right, yet the nature of
        seeing is not shown to arise, cease, expand, contract, or move together
        with them. The Buddha is gradually teaching Ananda how to distinguish
        the Guest from the Host through direct examination of his own
        experience.
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
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          {description}
        </p>
      )}
    </header>
  );
}

function SectionNavigation() {
  return (
    <nav
      aria-label="Chapter 1.4 sections"
      className="grid gap-3 md:grid-cols-2"
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
        href="#chapter-1-4-top"
        aria-label="Back to the beginning of Chapter 1.4"
        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 hover:text-slate-900"
      >
        <span aria-hidden="true">↑</span>
        Back to Finding the Host
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

        return (
          <div
            key={index}
            className="grid gap-1 md:grid-cols-[90px_1fr] md:gap-5"
          >
            <p
              className={`text-xs font-semibold uppercase tracking-[0.18em] md:pt-1.5 ${
                line.emphasis
                  ? "text-slate-900"
                  : "text-slate-400"
              }`}
            >
              {line.speaker}
            </p>

            <p
              className={`leading-8 ${
                line.emphasis
                  ? "font-semibold text-slate-900"
                  : "text-slate-700"
              }`}
            >
              {line.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function FlowArrow() {
  return (
    <>
      <span
        aria-hidden
        className="text-center text-slate-400 md:hidden"
      >
        ↓
      </span>

      <span
        aria-hidden
        className="hidden text-slate-400 md:block"
      >
        →
      </span>
    </>
  );
}

function HandEyeComparison() {
  return (
    <div className="my-4 grid gap-3 md:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Hand and fist
        </p>

        <div className="mt-4 text-lg text-slate-800">
          Hand
        </div>

        <div className="my-2 text-slate-300">
          ↓
        </div>

        <div className="text-lg font-semibold text-slate-800">
          Fist
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          No hand → no fist.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Eye and seeing
        </p>

        <div className="mt-4 text-lg text-slate-800">
          Physical eye
        </div>

        <div className="my-2 text-slate-300">
          ↓
        </div>

        <div className="text-lg font-semibold text-slate-800">
          Nature of seeing?
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          Does no functioning eye necessarily mean no nature of seeing?
        </p>
      </div>
    </div>
  );
}

function DarknessComparison() {
  return (
    <div className="my-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 md:p-6">
      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className="text-sm font-semibold text-slate-800">
            Blind person
          </p>

          <p className="mt-3 text-sm text-slate-600">
            Visible forms absent
          </p>

          <div className="my-3 text-slate-300">
            ↓
          </div>

          <p className="text-lg text-slate-800">
            Darkness
          </p>
        </div>

        <div className="text-center text-sm font-medium text-slate-400">
          same baseline
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className="text-sm font-semibold text-slate-800">
            Sighted person in complete darkness
          </p>

          <p className="mt-3 text-sm text-slate-600">
            Visible forms absent
          </p>

          <div className="my-3 text-slate-300">
            ↓
          </div>

          <p className="text-lg text-slate-800">
            Darkness
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-slate-900 px-5 py-5 text-center text-white">
        <p className="text-lg md:text-xl">
          Does the absence of visible forms mean that <br />
          the nature of seeing itself has disappeared?
        </p>
      </div>
    </div>
  );
}

function LampEyeSeeing() {
  const stages = [
    {
      title: "Lamp",
      text: "Provides illumination",
    },
    {
      title: "Visible forms",
      text: "Become available",
    },
    {
      title: "Eye faculty",
      text: "Provides the visual faculty",
    },
    {
      title: "Nature of seeing",
      text: "Is not identical with the lamp or physical eye",
    },
  ];

  return (
    <div className="my-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 md:p-6">
      <div className="grid items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
        {stages.map((stage, index) => (
          <div
            key={stage.title}
            className="contents"
          >
            <div className="min-h-35 rounded-xl border border-slate-200 bg-white p-4 text-center">
              <p className="font-semibold text-slate-800">
                {stage.title}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {stage.text}
              </p>
            </div>

            {index < stages.length - 1 && <FlowArrow />}
          </div>
        ))}
      </div>

      <p className="mt-5 text-center text-sm leading-7 text-slate-600">
        The Buddha is progressively separating the nature of seeing from<br />
        the conditions and faculties with which Ananda has habitually identified it.
      </p>
    </div>
  );
}

function GuestDustComparison() {
  return (
    <div className="my-4 grid gap-3 md:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Guest and host
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="font-semibold text-slate-800">
              Guest
            </p>

            <div className="mt-3 space-y-1 text-sm text-slate-600">
              <p>Arrives</p>
              <p>Stays temporarily</p>
              <p>Leaves</p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="font-semibold text-slate-800">
              Host
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Is not carried away by the guest&apos;s coming and going
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Dust and space
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="font-semibold text-slate-800">
              Dust
            </p>

            <div className="mt-3 space-y-1 text-sm text-slate-600">
              <p>Moves</p>
              <p>Fluctuates</p>
              <p>Changes</p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="font-semibold text-slate-800">
              Space
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Is not carried along by the dust&apos;s movement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpaceInsight() {
  return (
    <div className="my-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-center md:p-6">
      <p className="text-xl font-semibold leading-8 text-slate-800 md:text-2xl">
        Space does not have to be created after the dust disappears.
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600">
        The analogy therefore does not suggest that cultivation manufactures the Host by destroying the Guest. <br />
        The dust moves within space, while space is already present and is not created by the coming or going of the dust.
      </p>
    </div>
  );
}

function MovementComparison() {
  return (
    <div className="my-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 md:p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Demonstration 1
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 text-center">
            <span className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
              Hand opens
            </span>

            <span className="text-slate-300">↔</span>

            <span className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
              Hand closes
            </span>
          </div>

          <div className="my-4 text-center text-slate-300">
            ↓
          </div>

          <p className="text-center font-semibold text-slate-800">
            Seeing does not open or close
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Demonstration 2
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 text-center">
            <span className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
              Head turns left
            </span>

            <span className="text-slate-300">↔</span>

            <span className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
              Head turns right
            </span>
          </div>

          <div className="my-4 text-center text-slate-300">
            ↓
          </div>

          <p className="text-center font-semibold text-slate-800">
            Seeing is not shown to turn with it
          </p>
        </div>
      </div>

      <p className="mt-5 text-center text-sm leading-7 text-slate-600">
        What moves can be directly identified. The Buddha now asks whether<br />
        the nature of seeing should be assigned the same movement.
      </p>
    </div>
  );
}

function GuestHostTakeaway() {
  const statements = [
    "The Guest is not wrong because it appears.",
    "The Dust is not wrong because it moves.",
    "The mistake is taking what comes and goes to be the Host.",
  ];

  return (
    <div className="my-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 md:p-6">
      <div className="space-y-3">
        {statements.map((statement, index) => (
          <div
            key={statement}
            className={`rounded-xl px-5 py-4 text-center ${
              index === statements.length - 1
                ? "bg-slate-900 text-white"
                : "border border-slate-200 bg-white text-slate-700"
            }`}
          >
            <p
              className={
                index === statements.length - 1
                  ? "font-semibold"
                  : ""
              }
            >
              {statement}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SurangamaFindingTheHostPage() {
  return (
    <div className="space-y-4">
      {/* Back + chapter navigation */}
      <div className="space-y-4 text-sm">
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
            title: "Chapter 1.3 — The Guest Mistaken as the Host",
            href: "/sutra-notes/surangama-sutra/chapter-1-guest-mistaken-as-host",
          }}
        />
      </div>

      <main className="min-h-screen rounded-2xl bg-[rgb(var(--sutra-paper))] px-5 py-12 text-slate-900 md:px-8">
        <article
          id="chapter-1-4-top"
          className="mx-auto max-w-5xl"
        >
          {/* ================================================= */}
          {/* Header */}
          {/* ================================================= */}

          <header className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-slate-500">
              Śūraṅgama Sutra · Chapter 1.4 Notes
            </p>

            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Finding the Host
            </h1>

            <p className="mt-4 text-lg text-slate-600 md:text-xl">
              Through the nature of seeing, begin learning how to distinguish<br />
              what changes from what is not carried along by those changes
            </p>
          </header>

          {/* ================================================= */}
          {/* Introduction */}
          {/* ================================================= */}

          <section className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                Introduction
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-700">
                <p>
                  Chapter 1.3 ended with Ananda recognizing that the discriminating
                  faculty he had always taken to be his mind could not simply
                  be regarded as his fundamental nature. Yet understanding
                  this conceptually is only the beginning.
                </p>

                <p>
                  The Buddha now brings the investigation into Ananda&apos;s
                  immediate experience through the act of seeing. By
                  distinguishing the physical eye, visible forms, and changing
                  conditions from the nature of seeing itself, He gives Ananda
                  an experiential way to further understand the deeper
                  distinction between the arising-and-ceasing discriminating
                  mind and the fundamental mind.
                </p>

                <p>
                  The nature of seeing is not presented as another object to
                  grasp and immediately call the True Mind; rather, it becomes
                  a doorway through which Ananda begins learning how to
                  distinguish the Guest from the Host.
                </p>
              </div>
            </div>
          </section>

          {/* ================================================= */}
          {/* Section navigation */}
          {/* ================================================= */}

          <div className="mt-2">
            <SectionNavigation />
          </div>

          {/* ================================================= */}
          {/* SECTION 1 */}
          {/* ================================================= */}

          <section
            id="nature-of-seeing"
            className="scroll-mt-10 md:pt-12"
          >
            <SectionHeading
              number="01"
              title="The Nature of Seeing"
              description="The Buddha begins with something immediate and familiar, using the experience of seeing to separate the nature of seeing from the faculties and conditions with which it has long been identified."
            />

            <SutraBlock title="The Buddha returns to the radiant fist">
              <Dialogue lines={firstDialogue} />
            </SutraBlock>

            <div className="mt-6">
              <SutraBlock title="Blindness and darkness">
                <Dialogue lines={darknessDialogue} />
              </SutraBlock>
            </div>

            <div className="mt-6">
              <SutraBlock title="The lamp, the eye, and seeing">
                <Dialogue lines={lampDialogue} />

                <div className="my-7 border-t border-slate-200" />

                <p>
                  Although Ananda and the entire assembly heard these words,
                  they remained silent and had not yet awakened. They pressed
                  their palms together, cleared their minds, and waited for
                  the Buddha to continue His compassionate instruction.
                </p>
              </SutraBlock>
            </div>

            <ReflectionList items={firstReflections} />

            <BackToPartTop />
          </section>

          {/* ================================================= */}
          {/* SECTION 2 */}
          {/* ================================================= */}

          <section
            id="host-and-guest"
            className="scroll-mt-10 pt-16 md:pt-20"
          >
            <SectionHeading
              number="02"
              title="Distinguishing the Host from the Guest"
              description="Having separated the nature of seeing from the physical eye, the Buddha now uses the analogies of Guest and Host, Dust and Space, followed by direct demonstrations of movement and change."
            />

            <SutraBlock title="Guest and dust">
              <Dialogue lines={secondDialogue} />
            </SutraBlock>

            <div className="mt-6">
              <SutraBlock title="What opens and closes?">
                <Dialogue lines={movementDialogue} />
              </SutraBlock>
            </div>

            <div className="mt-6">
              <SutraBlock title="What moves?">
                <Dialogue lines={headMovementDialogue} />

                <div className="my-7 border-t border-slate-200" />

                <p>
                  The Buddha then addresses the entire assembly. Ananda&apos;s
                  head moved, but his seeing did not move together with it.
                  The Buddha&apos;s hand opened and closed, but Ananda&apos;s
                  seeing did not expand or contract together with the hand.
                </p>

                <p>
                  Why, then, do sentient beings continually take what moves,
                  changes, arises, and ceases to be their true self? Through
                  this mistaken identification, every thought arises and
                  ceases, the true nature is lost from recognition, and
                  beings remain caught in cyclic existence.
                </p>
              </SutraBlock>
            </div>

            <ReflectionList items={secondReflections} />

            <BackToPartTop />
          </section>

          {/* ================================================= */}
          {/* Conclusion */}
          {/* ================================================= */}

          <section className="mb-12 mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                Conclusion
              </h2>

              <div className="mt-4 space-y-4 leading-8 text-slate-700">
                <p className="font-semibold">
                  The Buddha has not asked Ananda to manufacture something
                  permanent out of what changes. He has begun teaching him to
                  recognize that what comes and goes should not automatically
                  be taken as what he fundamentally is.
                </p>

                <p>
                  Chapter 1.3 exposed the arising-and-ceasing discriminating mind
                  that Ananda had long mistaken for his fundamental nature.
                  Chapter 1.4 now brings that distinction into direct experience:
                  visible forms appear and disappear, conditions change, the
                  hand opens and closes, and the head turns — yet the nature
                  of seeing is not shown to move and change together with
                  them.
                </p>

                <p>
                  In this way, the Buddha gradually shifts Ananda from merely
                  understanding the distinction between the Guest and the Host
                  toward examining that distinction within his own experience.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* ================================================= */}
      {/* Bottom navigation */}
      {/* ================================================= */}

      <div className="space-y-4 text-sm">
        <NoteNavigation
          previous={{
            title: "Chapter 1.3 — The Guest Mistaken as the Host",
            href: "/sutra-notes/surangama-sutra/chapter-1-guest-mistaken-as-host",
          }}
        />

        <div>
          <Link
            href="/sutra-notes/surangama-sutra"
            className="inline-flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
          >
            <span aria-hidden>←</span>

            <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] hover:decoration-current">
              Back to Śūraṅgama Sutra Notes
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}