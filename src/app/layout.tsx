import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bodhi Ocean",
  description: "A lay practitioner's reflection journal — mindfulness, clarity, and the path of awakening.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-dvh">
          <header className="mx-auto max-w-3xl px-4 py-6">
            <nav className="flex items-center justify-between">
              <a href="/" className="text-lg font-semibold">Bodhi Ocean</a>
              <div className="flex gap-4 text-sm">
                <a href="/reflections">Reflections</a>
                <a href="/sutra-notes">Sutra Notes</a>
                <a href="/artwork">Artwork</a>
                <a href="/about">About</a>
              </div>
            </nav>
          </header>

          <main className="mx-auto max-w-3xl px-4 pb-16">{children}</main>

          <footer className="mx-auto max-w-3xl px-4 py-10 text-sm opacity-70">
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
