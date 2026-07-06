import { MetadataRoute } from "next";
import { getAllReflections } from "@/lib/reflections";
import { sutraNotes } from "@/lib/sutraNotesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bodhiocean.com";

  const now = new Date();

  const reflections = getAllReflections().map((post) => ({
    url: `${baseUrl}/reflections/${post.slug}`,
    lastModified: now,
  }));

  const sutraLandingPages = sutraNotes.map((sutra) => ({
    url: `${baseUrl}${sutra.href}`,
    lastModified: now,
  }));

  const sutraNotePages = sutraNotes.flatMap((sutra) =>
    sutra.notes.map((note) => ({
      url: `${baseUrl}${note.href}`,
      lastModified: now,
    }))
  );

  return [
    { url: baseUrl, lastModified: now },
    { url: `${baseUrl}/reflections`, lastModified: now },
    { url: `${baseUrl}/sutra-notes`, lastModified: now },
    { url: `${baseUrl}/about`, lastModified: now },
    { url: `${baseUrl}/artwork`, lastModified: now },

    ...reflections,

    // Sutra-level pages, e.g. /sutra-notes/surangama-sutra
    ...sutraLandingPages,

    // Individual TSX note pages, e.g. /sutra-notes/surangama-sutra/chapter-1-seven-locations
    ...sutraNotePages,
  ];
}