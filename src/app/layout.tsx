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
  title: "Bodhi Ocean",
  description: "A lay practitioner's reflection journal — mindfulness, clarity, and the path of awakening.",
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
