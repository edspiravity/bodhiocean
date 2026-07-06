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
        title: "Chapter 1 — The Seven Locations",
        description:
          "Notes on the Buddha’s repudiation of the seven proposed locations of the mind.",
        href: "/sutra-notes/surangama-sutra/chapter-1-seven-locations",
        status: "published",
      },
    ],
  },
];