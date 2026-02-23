import type { Metadata } from "next";
import { PageFade } from "@/components/PageFade";
import { NavLink } from "@/components/NavLink";

import "./globals.css";
import { Noto_Sans, Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bodhiocean.com"),

  title: {
    default: "Bodhi Ocean",
    template: "%s | Bodhi Ocean",
  },

  description:
    "A quiet journal of practice — reflections, sutra notes, and contemplations from daily life as a lay practitioner.",

  keywords: [
    "Buddhism",
    "mindfulness",
    "sutra notes",
    "Buddhist reflections",
    "lay practitioner",
  ],

  authors: [{ name: "Bodhi Ocean" }],
  creator: "Bodhi Ocean",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bodhiocean.com",
    siteName: "Bodhi Ocean",
    title: "Bodhi Ocean",
    description:
      "A quiet journal of practice — reflections and sutra encounters.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bodhi Ocean",
    description:
      "A quiet journal of practice — reflections and sutra encounters.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${notoSans.variable} ${cormorant.variable}`}>
      <body>
        <div className="min-h-dvh">
          <header className="mx-auto max-w-3xl px-4 py-8">
            <nav className="flex items-baseline justify-between gap-6">
{/*              <a
                href="/"
                className="text-xl font-medium"
                style={{ fontFamily: "var(--font-title)" }}
              >
                Bodhi Ocean
              </a>*/}
              <a href="/" className="flex items-center">
                <Image src="/logo.png" alt="Bodhi Ocean" width={64} height={64} />
              </a>

              <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 text-sm">
                <NavLink href="/reflections">Reflections</NavLink>
                <NavLink href="/sutra-notes">Sutra Notes</NavLink>
                <NavLink href="/artwork">Artwork</NavLink>
                <NavLink href="/about">About</NavLink>
              </div>

            </nav>
          </header>

          <main className="mx-auto max-w-3xl px-4 pb-20">
            <PageFade>{children}</PageFade>
          </main>

          <footer className="mx-auto max-w-3xl px-4 py-12 text-sm opacity-70">
            <div>© {new Date().getFullYear()} Bodhi Ocean</div>
            <div className="mt-1">
              Personal reflections as a lay practitioner.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
