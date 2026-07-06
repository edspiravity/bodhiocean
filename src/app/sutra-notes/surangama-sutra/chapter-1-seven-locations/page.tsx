"use client";

import { useState } from "react";
import Link from "next/link";

type TextContent = string | string[];

type LocationNote = {
  id: number;
  shortTitle: string;
  title: string;
  claim: TextContent;
  why: TextContent;
  repudiation: string[];
  assumption: TextContent;
};

const locations: LocationNote[] = [
  {
    id: 1,
    shortTitle: "Inside Body",
    title: "1st Location — Inside the Body",
    claim:
      "I look at the Buddha’s eyes, which are on the Buddha’s face. They are in front of me, and I see them with my own eyes. Therefore, the mind that knows and is inspired must be inside my body.",
    why:
      "This is probably the most common answer most people would give. From ordinary experience, we feel that seeing, thinking, and emotion happen “within us.” From what we learn through science, the eyes receive visual forms, and the brain processes them. Because of this, it feels natural to assume that the mind is located inside the body.",
    repudiation: [
      "A person sitting inside the lecture hall should first see what is inside the hall: the Buddha, then the assembly, and only after that, the garden outside.",
      "If the mind were truly inside the body, it should first be aware of what is inside the body, such as the internal organs, before seeing things outside. But this is not what actually happens. We see external objects, yet we do not directly see the inside of our own body. Therefore, the mind cannot simply be said to be inside the body.",
    ],
    assumption: [
      "The Buddha is removing the assumption that because seeing, thinking, and feeling seem to happen “within me,” the mind must therefore be located inside the body.",
      "He shows that if this were literally true, the mind should first know the body’s interior before knowing external objects.",
    ]
  },
  {
    id: 2,
    shortTitle: "Outside Body",
    title: "2nd Location — Outside the Body",
    claim:
      "I now understand the Buddha’s teaching and recognize that my mind is outside the body. For instance, a lamp inside a room shines from within the room and illuminates what is outside. In the same way, all beings cannot see what is inside their bodies, but can only see things outside their bodies. Therefore, the mind must be outside the body.",
    why:
      "This claim is likely Ananda’s next deduction after the first claim has been repudiated. If the mind were inside the body, it should know the body’s interior before knowing external objects. Since we do not see inside the body, but only see external objects, the next natural conclusion is that the mind must be outside the body.",
    repudiation: [
      "If one person in the assembly eats and becomes full, does that mean everyone else in the assembly is also full?",
      "If the mind were truly outside the body, then the mind and body would be separate from each other. What the body experiences should not be immediately known by the mind, and what the mind knows should not directly affect the body. But this is not what actually happens. When the eyes see something, the mind immediately knows and discriminates it. Since bodily seeing and mental knowing are not disconnected in this way, the mind cannot simply be said to be outside the body.",
    ],
    assumption:
      "The Buddha is removing the assumption that because we see external objects, the mind must be located outside the body. He also removes the assumption that the mind can be separate from the body while still directly knowing what the body experiences.",
  },
  {
    id: 3,
    shortTitle: "Eye Faculty",
    title: "3rd Location — Within the Physical Faculty",
    claim:[
      "It is like a person wearing glasses. Although the eyes and glasses come together, the glasses do not obstruct sight. In the same way, the mind may be within the eye faculty, while the eye faculty does not obstruct the mind’s ability to see and discriminate.",
      "The mind cannot see what is inside the body because it is within the eyes, but it is still able to see outside without obstruction.",
      "In Ananda’s analogy, the seeing capacity is treated as if it were hidden behind or within the physical eye faculty, just as the eyes are behind lenses.",
    ],
    why: [
      "Here, Ananda is trying to explain why the mind can see outward but not inward. This claim is similar to the first location, except that the proposed location is now more precise. Instead of placing the mind generally inside the body, Ananda places it specifically within the physical eye faculty.",
      "This claim sounds reasonable because Ananda treats the eye faculty as a kind of transparent covering. The mind is hidden within the eye faculty and can see outward through it, just as a person can see outside through glasses. At the same time, because the mind is enclosed within this faculty, it does not see the rest of the body’s interior.",
    ],
    repudiation: [
      "Using Ananda’s own analogy, if the eyes can see mountains and rivers through the glasses, then surely the eyes should also be able to see the glasses.",
      "If the mind were within the eye faculty and could see outward through the eyes, then it should also be able to perceive the eye faculty itself, just as eyes looking through glasses can also see the glasses. But in actual experience, when we look at external objects, the eye faculty itself is not seen as an external object. Therefore, to say that the mind is within the physical faculty does not hold.",
    ],
    assumption:[
      "The Buddha is removing the assumption that the mind can be hidden inside the sense faculty and look outward through it without perceiving the faculty itself.",
      "This is similar to the first location, but more subtle and precise. The first location places the mind inside the body in general; this third location places the mind specifically within the eye faculty.",
      "The Buddha shows that this more refined location still cannot be established."
    ]
  },
  {
    id: 4,
    shortTitle: "Darkness",
    title: "4th Location — Seeing Darkness as Seeing Inside",
    claim:
      "When the eyes are open, seeing light is “seeing outside.” When the eyes are closed, seeing darkness is “seeing inside.”",
    why: [
      "This claim continues from the third location. The proposed location of the mind remains within the physical eye faculty, but Ananda now adds the opening and closing of the eyes as a condition for how seeing works.",
      "This sounds easy to relate to: when the eyes are open, we see light and external objects, so this is called seeing outside. When the eyes are closed, we see darkness, so this seems like seeing inside."
    ],
    repudiation: [
      "Closing the eyes and seeing darkness does not prove that the mind is looking inside the body.",
      "If the darkness is opposite the eyes, then it remains an object of seeing in front of the eyes. It is not the inside of the body. If the darkness is truly inside the body, then sitting in a dark room would mean that the entire dark room is inside your body.",
      "If the darkness is not opposite the eyes, then how can it be called seeing at all? Therefore, the darkness seen when the eyes are closed cannot prove that the mind is seeing inside the body.",
      "Similarly, opening the eyes and seeing light does not fully prove that the mind is simply seeing outside. If seeing outside means the eyes can see what is outside the body, then why can the eyes not see one’s own face?",
      "If one claims that the eyes and mind can leave the body and see the face from outside, then the eyes and mind would no longer be inside the body. This creates contradiction.",
      "If the eyes and mind can leave the body and look back at the face, then they are not part of the body. By the same logic, the Buddha, who can see Ananda’s face, would also have to be part of Ananda’s body.",
      "If one then claims that the eyes have their own knowing apart from the body, there would be more than one knowing principle. There would be one awareness belonging to the body and another awareness belonging to the eyes. That would imply two distinct consciousnesses within one person, which is absurd.",
      "Therefore, Ananda’s claim that seeing darkness means looking inside the body does not hold.",
    ],
    assumption:[
      "The Buddha is removing the false equivalency that “eyes open and seeing light” means seeing outside, while “eyes closed and seeing darkness” means seeing inside.",
      "More deeply, the Buddha is removing the assumption that the opening and closing of the eyes can determine whether the mind is inside or outside. Darkness seen with closed eyes is still only an object of awareness; it does not prove that awareness has turned inward to see the body’s interior."
    ]
  },
  {
    id: 5,
    shortTitle: "Contact",
    title: "5th Location — At Sense-Object Contact",
    claim:
      "All kinds of phenomena arise because the mind arises; all kinds of minds arise because phenomena arise. Therefore, the faculty of thinking itself must be my mind-nature. The mind is present wherever the senses meet objects, and so it is not inside, outside, or in the middle.",
    why:[
      "This claim sounds reasonable because mental activity seems to arise exactly when sense faculty and sense object meet. When the eye sees an object, thoughts, feelings, assessments, and perceptions naturally arise.",
      "It also matches ordinary experience. When the eye sees an object, thoughts, feelings, assessments, and perceptions naturally arise. When the ear hears a sound, the mind immediately responds. Because mental activity seems to arise exactly when sense faculty and sense object meet, it feels natural to conclude that the mind is present at this point of contact."
    ],
    repudiation: [
      "The key issue is Ananda’s idea of “meeting.” If the mind exists at the meeting point between sense faculty and sense object, then does this mind have substance or no substance?",
      "If the mind has no substance, then it has nothing with which to meet or connect. If it has no substance but can still somehow connect, then this would imply an extra realm beyond the usual eighteen realms: a nineteenth realm caused by a connection with a seventh object. This does not make sense.",
      "If the mind does have substance, then when you poke your body with your hand, does the mind that perceives the sensation come from inside or enter from outside?",
      "If it comes from inside, then it should be able to see the inside of the body. If it comes from outside, then it should first see your face. Since neither of these is what actually happens, the mind cannot be treated as a physical substance sitting at the meeting point between senses and objects.",
      "Ananda then objects: seeing originates from the eyes, and the mind is not the eyes. Therefore, saying that the mind should first see the face does not make sense.",
      "The Buddha responds: if the eyes alone could see, then when a person is inside a room, the door should also be able to see. In this analogy, the room is the body, the person inside is the mind, and the door or window is the eyes. The eyes are only openings or faculties; they do not see by themselves.",
      "Furthermore, those who have died may still have intact eyes. If the eyes alone could see, then dead people should still see objects. If they could still see, how could they be called dead? Therefore, seeing cannot belong to the physical eyes alone. The capacity to know seeing belongs to mind.",
      "The Buddha then examines Ananda’s claim even further. If the knowing mind truly has substance, is it one substance or many substances? Is it spread throughout the body or not spread throughout the body?",
      "If it is one single substance spread throughout the whole body, then when one limb is poked, the whole body should feel the poke equally. In that case, one would not be able to identify the exact location of the sensation. But in actual experience, we can identify where the body is touched. Therefore, the mind cannot be one undivided body-wide substance.",
      "If the mind has many separate substances, then there would be many separate knowers. In that case, which one is truly you?",
      "If the mind is spread throughout the body, the same problem returns: one should not be able to isolate the exact location of sensation. If the mind is not spread throughout the body, then when the head and foot are touched at the same time, one should only know one touch and not the other. But this is not what happens.",
      "Therefore, to say that the mind is present wherever the senses meet objects does not hold.",
    ],
    assumption: [ 
      "The Buddha is removing the assumption that the mind can be found as an entity located at the contact point between sense faculty and sense object.",
      "This is more subtle than the earlier locations. Ananda is no longer placing the mind simply inside the body, outside the body, or within the eye faculty. He is now placing it at the moment of sensory contact. But the Buddha shows that even this contact point cannot be established as the true location of mind.",
      "Therefore, the mind cannot be identified as something physically or functionally located at sense-object contact."
    ]
  },
  {
    id: 6,
    shortTitle: "Middle",
    title: "6th Location — Between Faculty and Object",
    claim: [
      "Ananda reflected on earlier discussions of Ultimate Reality between the Buddha, Manjusri Bodhisattva, and the other Dharma Princes. In these discussions, the Buddha had said that the mind is neither inside nor outside.",
      "Since the inside of the body cannot be seen, saying that the mind is inside the body cannot be established. Since the body and mind are mutually aware, saying that the mind is outside the body also does not make sense. Therefore, the mind must be in the middle.",
    ],
    why: [
      "At this point, Ananda is no longer simply guessing a physical place. He is trying to place the mind in a relational position — between faculty and object.",
      "This sounds reasonable for two reasons. First, Ananda is basing his claim on the Buddha’s teaching that the mind is neither inside nor outside. Second, he is making a deduction: if the mind is not inside and not outside, then perhaps it must be in the middle.",
      "However, the Buddha shows that even this “middle” cannot be established."
    ],
    repudiation: [
       "* Buddha's First Repudiation:",
      "If there is such a middle location, then where is it? Is it a spot on the body, or is it a spot outside the body?",
      "If it is on the body, then it must either be on the surface or inside the body. If it is on the surface, then it is only a boundary, not a true middle. If it is inside the body, then it falls into the same problem as the first location: the mind should first know the body’s interior.",
      "If the middle is outside the body, then can it be marked or not? If it cannot be marked, then it is as good as non-existent. If it can be marked, then it cannot be a fixed point. For example, if one looks at the marked point from the east, it appears to the west. If one looks at it from the south, it appears to the north. The same point changes according to one’s position. ",
      "* Ananda’s Defense:",
      "Ananda then defends his claim by saying that this middle is not a physical spot on the body or outside the body. Instead, he refers again to the Buddha’s teaching: the eye and form serve as conditions that give rise to visual consciousness.",
      "The eye possesses the capacity for awareness, while the object lacks awareness. Consciousness arises between the eye faculty and the object. Therefore, Ananda says, this is where the mind resides.",
      "* Buddha's Second Repudiation:",
      "If the mind resides between the faculty and the object, does this mind-substance link with both sides, or does it not link with both sides? If it links with both, matter and awareness become mixed. If it links with neither, it has no identifiable nature.",
      "Therefore, to say that the mind is in the middle between faculty and object does not hold.",
      "*Note: Buddhism commonly analyzes experience through eighteen realms: six sense faculties, six sense objects, and six consciousnesses. If Ananda posits an additional connecting entity, this would imply an impossible nineteenth realm.",
    ],
    assumption: [
      "The Buddha is removing the assumption that “between” is a fixed and locatable position, or that the mind can be found as an entity between sense faculty and sense object.",
      " This is similar to the fifth location, but slightly more refined. In the fifth location, Ananda placed the mind at sense-object contact. Here, he places it in the “middle” between faculty and object."
    ]
  },
  {
    id: 7,
    shortTitle: "Nowhere",
    title: "7th Location — Nowhere / Unattached",
    claim: [
      "The Buddha often said that the aware, knowing, and discriminating nature of the mind is not inside, not outside, and not in the middle; it is completely nowhere. Being unattached to anything whatsoever is called the mind.",
      "Since the Buddha teaches that the mind is that which does not attach to anything, then right now, my awareness is not anchored inside, outside, or in the middle. I am perfectly unattached. Does this state of non-attachment not prove that this is my mind?"
    ],
    why: [
      "Again, Ananda is using the Buddha’s teaching, this time in relation to emptiness and non-attachment. After all the plausible locations have been repudiated, it seems reasonable to conclude that the mind has no physical location at all.",
      "This claim also sounds spiritually convincing. If attachment is a cause of delusion, then a state of being unattached may appear to be the true mind itself. Ananda is no longer placing the mind inside, outside, within the faculty, at contact, or in the middle. Instead, he tries to identify the mind with a state of non-attachment."
    ],
    repudiation: [
      "All phenomena in the world — including open space, water, land, and flying creatures — are collectively called “everything.” Does this “unattached state” exist, or does it not exist?",
      "If it does not exist, then it is like a tortoise’s hair or a rabbit’s horns. Since it does not exist at all, what is there to be unattached?",
      "If this “unattached state” does exist, then it cannot be called non-existent. Anything that lacks characteristics does not exist. If it has characteristics, then it must be identifiable in some way. If it is identifiable, then it cannot be completely nowhere or completely unattached in the way Ananda claims.",
      "Therefore, to say that “being completely unattached is the aware and knowing mind” does not hold.",
    ],
    assumption: [
      "The Buddha is removing the assumption that “nowhere” or “unattached” can be grasped as a special state and then identified as the true mind.",
      "This is the most subtle location because it no longer looks like a location. Ananda has abandoned inside, outside, the eye faculty, sense-object contact, and the middle. But he now grasps at non-attachment itself as the answer.",
      "The Buddha shows that this still does not work. If this unattached state does not exist, then there is nothing to call unattached. If it exists, then it has some kind of characteristic, and therefore cannot be treated as completely nowhere. In this way, even “unattached” becomes another concept if one grasps it as the mind.",
      "The Buddha is not rejecting true non-attachment. He is rejecting Ananda’s conceptual grasping at non-attachment as though it were a findable mind."
    ]
  },
];

function NoteBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold text-slate-900">{title}</h3>
      <div className="space-y-3 text-slate-700 leading-7">{children}</div>
    </section>
  );
}

function RenderText({ content }: { content: TextContent }) {
  if (Array.isArray(content)) {
    return (
      <>
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </>
    );
  }

  return <p>{content}</p>;
}

function LocationContent({ note }: { note: LocationNote }) {
  return (
    <div className="space-y-5">
      <NoteBlock title="Ananda’s Claim">
        <RenderText content={note.claim} />
      </NoteBlock>

      <NoteBlock title="Why This Claim Sounds Reasonable">
        <RenderText content={note.why} />
      </NoteBlock>

      <NoteBlock title="Buddha’s Parable and Repudiation">
        {note.repudiation.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </NoteBlock>

      <NoteBlock title="What Assumption Is Being Removed">
        <RenderText content={note.assumption} />
      </NoteBlock>
    </div>
  );
}

function BackToSevenLocationsButton() {
  return (
    <div className="mt-8 flex justify-center">
      <a
        href="#seven-locations"
        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 hover:text-slate-900"
        aria-label="Back to the beginning of the Seven Locations section"
      >
        <span aria-hidden="true">↑</span>
        Back to Seven Locations
      </a>
    </div>
  );
}

export default function SurangamaSevenLocationsPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [openMobilePanel, setOpenMobilePanel] = useState(1);

  const activeLocation =
    locations.find((location) => location.id === activeTab) ?? locations[0];

  return (
    <div className="space-y-8">
      <div className="text-sm">
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
      <main className="min-h-screen rounded-2xl bg-[rgb(var(--sutra-paper))] px-5 py-12 text-slate-900 md:px-8">
        <article className="mx-auto max-w-5xl">
          <header className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-slate-500">
              Surangama Sutra · Chapter 1 Notes
            </p>

            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              The Seven Locations of the Mind
            </h1>

            <p className="mt-4 text-lg text-slate-600 md:text-xl">
              Why the Mind Cannot Be Found in Any Location
            </p>
          </header>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <div className="space-y-4 leading-8 text-slate-700">
              <p>
                When the Buddha begins to repudiate the locations stated by
                Ananda, the Buddha is not denying awareness itself. He is denying
                Ananda’s mistaken identification of the discriminating,
                conditioned mind as the true mind.
              </p>

              <p>
                The seven locations are not meant to find the correct physical
                location of the mind. They are meant to exhaust the mistaken habit
                of treating the mind as something spatially located.
              </p>
            </div>
          </div>

          <section className="mb-10 grid gap-5">
            <NoteBlock title="Background">
              <p>
                The Buddha and all of His disciples, except Ananda, were invited
                to the king’s palace for a meal offering. Ananda had accepted
                another invitation before the king’s invitation.
              </p>
              <p>
                After attending that meal offering, he entered a city to beg for
                alms and was affected by a spell cast by Matangi, with the help of
                her mother.
              </p>
              <p>
                The Buddha perceived Ananda’s danger, emitted rays of light from
                the crown of His head, and sent Manjusri Bodhisattva to rescue
                Ananda through the Surangama Mantra.
              </p>
            </NoteBlock>

            <NoteBlock title="The First Question">
              <p>
                The Buddha asked Ananda: among all the Buddha’s Dharma, what did
                Ananda see that first inspired his spiritual aspiration?
              </p>
              <p>
                Ananda answered that it was the sight of the Buddha’s thirty-two
                great marks that initiated his spiritual aspiration.
              </p>
            </NoteBlock>

            <NoteBlock title="Buddha’s First Important Message">
              <p>
                All beings, from beginless time, have gone through continuous
                birth and death because they do not know the True Nature that is
                bright and pure.
              </p>
              <p>
                Instead, beings rely on delusional thinking, a thinking process
                based on false premises. Because of this, they continue the
                endless cycle of samsara.
              </p>
            </NoteBlock>

            <NoteBlock title="Buddha’s Main Question">
              <p>
                The Buddha asked Ananda: When Ananda first brought forth the aspiration, how did Ananda see the Buddha’s thirty-two great marks, and who was inspired?
              </p>
              <p>
                Ananda said that he used his mind and eyes. Through his eyes, he
                saw the Buddha’s great marks, and his mind was then inspired.
              </p>
              <p>
                The Buddha then asked where the mind and eyes are. This begins the
                investigation into the seven locations of the mind.
              </p>
            </NoteBlock>
          </section>


          <section id="seven-locations" className="mb-12 scroll-mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">The Seven Locations</h2>
              <div className="space-y-4 leading-8 text-slate-700">
                <p>
                  From the following, we can see how the location progresses from crude to subtle.
                </p>
                <p>
                  It is in this investigation that we can see ourselves in Ananda's thought processes, and assumptions we made without thorough analysis.
                </p>
                <p>
                  We also can learn from the wisdom of Buddha who uses a Socratic-style dialogue, often called a dialectical or question-and-response method.
                  And using a practical "reductio ad absurdum" approach, the Buddha exposes the flaws in relying on ordinary, intellectual reasoning to grasp the true nature of the mind.
                </p>
                <p>
                  On desktop, use the tabs below. On mobile, each location appears as an expandable panel.
                </p>
              </div>
            </div>

            {/* Desktop tabs */}
            <div className="hidden md:block">
              <div
                role="tablist"
                aria-label="Seven locations of the mind"
                className="mb-6 flex gap-2 overflow-x-auto rounded-2xl bg-white/80 p-2 shadow-sm"
              >
                {locations.map((location) => (
                  <button
                    key={location.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === location.id}
                    onClick={() => setActiveTab(location.id)}
                    className={`min-w-fit rounded-xl px-4 py-3 text-sm font-medium transition ${
                      activeTab === location.id
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {location.id}. {location.shortTitle}
                  </button>
                ))}
              </div>

              <div className="rounded-3xl bg-white/70 p-6 shadow-sm">
                <h3 className="mb-6 text-2xl font-semibold">
                  {activeLocation.title}
                </h3>
                <LocationContent note={activeLocation} />
              </div>
            </div>

            <BackToSevenLocationsButton />

            {/* Mobile accordion */}
            <div className="space-y-4 md:hidden">
              {locations.map((location) => {
                const isOpen = openMobilePanel === location.id;

                return (
                  <section
                    key={location.id}
                    className="overflow-hidden rounded-2xl bg-white/80 shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobilePanel(isOpen ? 0 : location.id)
                      }
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold">{location.title}</span>
                      <span className="text-xl">{isOpen ? "−" : "+"}</span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-200 p-5">
                        <LocationContent note={location} />
                        <BackToSevenLocationsButton />
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          </section>

          <section className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Conclusion</h2>
              <div className="space-y-4 leading-8 text-slate-700">
                <p>
                  Through the repudiation of the seven locations, the Buddha shows
                  that the ordinary discriminating mind cannot be found inside the
                  body, outside the body, hidden within the sense faculty, revealed
                  through darkness, arising at sense-object contact, existing in the
                  middle, or existing as a vague state of non-attachment.
                </p>

                <p>
                  Each position collapses because it still treats the mind as
                  something that can be located, grasped, or defined by conditions.
                </p>

                <p>
                  In this way, the Buddha’s question, “Where is the mind located?”
                  gradually reveals a deeper inquiry: why can the mind not be
                  treated as something locatable, graspable, or conditionally
                  defined?
                </p>

                <p>
                  This prepares Ananda to turn away from the conditioned mind he has
                  mistaken as his true mind, and to begin recognizing the true mind —
                  the bright, pure awareness that is not produced by false thinking.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
      <div className="pt-8 text-sm">
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
  );
}