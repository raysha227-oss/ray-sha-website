import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "About",
  description: "A short introduction to Ray Sha and this working archive.",
};

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader active="About" />
      <main id="main-content" tabIndex={-1}>
        <section className="about-page" aria-labelledby="about-title">
          <div className="about-title-block">
            <p className="eyebrow">About / short version</p>
            <h1 id="about-title">Hi, I’m Ray.</h1>
          </div>
          <div className="about-copy">
            <p>
              I build environmental tools: a flexible kirigami robot, a mobile
              sensor array, and a Raspberry Pi camera. I also study what happens
              to pesticide residues after drone spraying.
            </p>
            <p>
              In student government, I plan carefully but try not to treat
              people like parts in a workflow. I ask what they want to do,
              notice when the plan is asking too much, and keep space for ideas
              I did not think of.
            </p>
            <p>
              Away from projects, I cycle, cook, play tennis and erhu, paint,
              take photographs, and make bad jokes. A rabbit, penguin, and seal
              serve as my unofficial luck committee.
            </p>
            <div className="about-links">
              <a className="text-link" href="/work/kirigami">
                A making project
              </a>
              <a className="text-link" href="/work/pesticide-dispersion">
                A field research project
              </a>
              <a className="text-link" href="/notes">
                The unfinished questions
              </a>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <p>Ray Sha</p>
          <p>A personal archive, still in motion.</p>
          <a href="/index">Full index</a>
        </footer>
      </main>
    </div>
  );
}
