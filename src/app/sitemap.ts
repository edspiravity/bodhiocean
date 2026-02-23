import { MetadataRoute } from "next";
import { getAllReflections } from "@/lib/reflections";
import { getAllSutraNotes } from "@/lib/sutraNotes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bodhiocean.com";

  const reflections = getAllReflections().map((post) => ({
    url: `${baseUrl}/reflections/${post.slug}`,
    lastModified: new Date(),
  }));

  const sutraNotes = getAllSutraNotes().map((post) => ({
    url: `${baseUrl}/sutra-notes/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/reflections`, lastModified: new Date() },
    { url: `${baseUrl}/sutra-notes`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/artwork`, lastModified: new Date() },
    ...reflections,
    ...sutraNotes,
  ];
}