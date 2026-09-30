import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "About",
  description: "A short introduction to Ray Sha and this working archive.",
};

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="about-page" aria-labelledby="about-title">
          <div className="about-title-block">
            <p className="eyebrow">About / short version</p>
            <h1 id="about-title">I follow questions until they need a tool.</h1>
          </div>
          <div className="about-copy">
            <p>
              I’m Ray Sha. Much of my work sits between environmental science
              and engineering: measuring water, air, energy use, or chemical
              movement, then building a more practical way to ask the next
              question.
            </p>
            <p>
              Outside the lab, I organize events, speak and debate, cycle, play
              tennis, cook, make photographs, and paint. I am usually the friend
              carrying a joke too far—and then turning the same conversation
              toward technology, ethics, or an implausible “what if?”
            </p>
            <p>
              This site is a working archive, not a complete autobiography. It
              keeps substantial projects beside small observations because both
              show what I notice and what I decide to do next.
            </p>
            <div className="about-links">
              <Link className="text-link" href="/work/kirigami">
                A making project
              </Link>
              <Link className="text-link" href="/work/pesticide-dispersion">
                A field research project
              </Link>
              <Link className="text-link" href="/notes">
                The unfinished questions
              </Link>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <p>Ray Sha</p>
          <p>A personal archive, still in motion.</p>
          <Link href="/index">Full index</Link>
        </footer>
      </main>
    </div>
  );
}
