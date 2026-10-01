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
            <h1 id="about-title">Hi, I’m Ray.</h1>
          </div>
          <div className="about-copy">
            <p>
              I’m interested in environmental science and engineering. Recently,
              that has meant building a kirigami robot, testing sensors
              outdoors, and helping study pesticide residues after drone
              spraying.
            </p>
            <p>
              I’ve also spent a lot of time in student government: planning
              events, writing scripts, setting up venues, and hosting. Away from
              that, I cycle, play tennis and erhu, cook, take photographs, and
              practice Chinese painting. With friends, I tend to be the one
              making the bad joke.
            </p>
            <p>
              I’m keeping this site as a place for the work and photographs I
              want to remember. Some entries have a lot of detail. Others only
              need a picture and a few words.
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
