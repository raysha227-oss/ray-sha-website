import type { Metadata } from "next";
import Link from "next/link";
import { Annotation, EditorialFigure } from "@/components/editorial";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Kirigami environmental robot",
  description:
    "Build notes from a low-cost, flexible environmental sensing platform.",
};

export default function KirigamiPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <header className="project-hero">
          <p className="eyebrow">Making / 2024—now</p>
          <h1>A cut changed the question.</h1>
          <p>
            Kirigami began as a mechanical curiosity. It became a way to carry
            sensors into places that are awkward or unsafe to inspect directly.
          </p>
        </header>

        <section
          className="project-visual-grid"
          aria-label="Kirigami prototype"
        >
          <EditorialFigure
            src="/media/kirigami-cut-structure.jpg"
            alt="Several translucent PET kirigami structures nested together"
            width={1080}
            height={1920}
            priority
            caption="The cut pattern lets a flat PET sheet stretch, curve, and recover."
          />
          <div className="project-reading">
            <p>
              I modeled four main iterations in SolidWorks, laser-cut the
              structures from PET, and integrated odor, TDS, and ORP sensing.
              The shell stayed inexpensive and light enough to remake after a
              failed trial instead of treating every version as precious.
            </p>
            <p>
              Tests in drainage ducts and simulated odorous environments moved
              the work beyond “can it move?” The harder problem was whether the
              motion could remain useful while the sensors collected readable
              environmental information.
            </p>
            <Annotation label="Design question">
              What if field equipment were designed around the places people
              should not have to enter?
            </Annotation>
          </div>
        </section>

        <section className="iteration-band" aria-labelledby="iterations-title">
          <div>
            <p className="section-label">Four iterations</p>
            <h2 id="iterations-title">
              Shape, movement, sensing, then context.
            </h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <p>Find a cut pattern that opens without tearing.</p>
            </li>
            <li>
              <span>02</span>
              <p>Make the body flex around a moving mechanism.</p>
            </li>
            <li>
              <span>03</span>
              <p>Add sensors without making movement impossible.</p>
            </li>
            <li>
              <span>04</span>
              <p>
                Test where water, odor, and tight spaces complicate the design.
              </p>
            </li>
          </ol>
        </section>

        <section className="project-image-break">
          <EditorialFigure
            src="/media/kirigami-prototype.jpg"
            alt="An exposed prototype with a pump, circuit boards, and connected wires on a worktable"
            width={1920}
            height={1080}
            caption="An exposed electronics iteration before the flexible shell was added."
          />
          <div>
            <p className="section-label">Still unresolved</p>
            <h2>A platform is not useful just because it moves.</h2>
            <p>
              The next work is about reliability: protecting components,
              separating sensor interference from real change, and deciding when
              a cheap field reading is enough to guide a closer test.
            </p>
          </div>
        </section>

        <footer className="site-footer">
          <p>Ray Sha</p>
          <p>Next: tracing what remains after a pesticide application.</p>
          <Link href="/work/pesticide-dispersion">Pesticide fieldwork</Link>
        </footer>
      </main>
    </div>
  );
}
