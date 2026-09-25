export type SutraNoteItem = {
  title: string;
  description: string;
  href: string;
  status?: "published" | "draft";
};

export type SutraItem = {
  title: string;
  description: string;
  href: string;
  notes: SutraNoteItem[];
};

export const sutraNotes: SutraItem[] = [
  {
    title: "Śūraṅgama Sutra",
    description:
      "Reading notes and contemplations on the Śūraṅgama Sutra",
    href: "/sutra-notes/surangama-sutra",
    notes: [
      {
        title: "Chapter 1.1 — The Seven Locations",
        description:
          "Notes on the Buddha’s repudiation of the seven proposed locations of the mind.",
        href: "/sutra-notes/surangama-sutra/chapter-1-seven-locations",
        status: "published",
      },
      {
        title: "Chapter 1.2 — The Two Foundations",
        description:
          "Notes on the Buddha’s teaching on the two foundations — Birth and Death vs. Bodhi and Nirvana.",
        href: "/sutra-notes/surangama-sutra/chapter-1-two-foundations",
        status: "published",
      },
      {
        title: "Chapter 1.3 — The Guest Mistaken as the Host",
        description:
          "Notes on the Buddha’s teaching on the guest mistaken as the host — Recognize what you have mistakenly taken to be your fundamental mind.",
        href: "/sutra-notes/surangama-sutra/chapter-1-guest-mistaken-as-host",
        status: "published",
      },
      {
        title: "Chapter 1.4 — Finding the Host",
        description:
          "Notes on the Buddha’s teaching on the finding the host — Distinguishing what changes from what is not carried along by those changes.",
        href: "/sutra-notes/surangama-sutra/chapter-1-finding-the-host",
        status: "published",
      },
    ],
  },
];