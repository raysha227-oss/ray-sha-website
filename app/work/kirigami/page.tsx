import type { Metadata } from "next";
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
      <SiteHeader active="Work" />
      <main id="main-content" tabIndex={-1}>
        <header className="project-hero">
          <p className="eyebrow">Making / 2024—now</p>
          <h1>A cut made room to move.</h1>
          <p>
            A low-cost robot for carrying sensors into drains, riverbanks, and
            canals that are awkward or unsafe to inspect directly.
          </p>
        </header>

        <section
          className="project-visual-grid"
          aria-label="Kirigami prototype"
        >
          <EditorialFigure
            src="/media/kirigami-pet-cut.jpg"
            alt="A laser-cut PET sheet showing a repeating kirigami pattern"
            width={1200}
            height={1600}
            priority
            caption="The cut pattern lets a flat PET sheet stretch, curve, and recover."
          />
          <div className="project-reading">
            <p>
              I modeled four main versions in SolidWorks and laser-cut each body
              from PET. The cuts let a flat sheet stretch around the mechanism;
              the low cost let me recut it whenever a trial exposed a problem.
            </p>
            <p>
              I added odor, TDS, and ORP sensing, then tested movement and
              readings in drainage ducts and simulated odorous environments. The
              point was never movement alone. It was reaching somewhere a person
              should not need to enter.
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
            <h2 id="iterations-title">Cut, move, sense, repeat.</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <p>Cut a pattern that opens without tearing.</p>
            </li>
            <li>
              <span>02</span>
              <p>Fit the body around a moving mechanism.</p>
            </li>
            <li>
              <span>03</span>
              <p>Add sensors without stopping the movement.</p>
            </li>
            <li>
              <span>04</span>
              <p>Test where water, odor, and tight spaces change the design.</p>
            </li>
          </ol>
        </section>

        <section className="project-image-break">
          <EditorialFigure
            src="/media/go-robot-finished.jpg"
            alt="The completed robot showing its flexible PET body, drive, and sensors"
            width={1800}
            height={1200}
            caption="The completed device, from the cut PET body to the sensing head."
          />
          <div>
            <p className="section-label">What carries forward</p>
            <h2>Cheap enough to rebuild.</h2>
            <p>
              This project taught me to build around cost, access, and repair.
              That same frugal approach now shapes my mobile sensor array. A
              later robot version will explore accessible on-device AI inference
              while keeping the hardware practical to reproduce.
            </p>
          </div>
        </section>

        <section
          className="research-record"
          aria-labelledby="fieldwork-next-title"
        >
          <div>
            <p className="section-label">What came next / October 2025</p>
            <h2 id="fieldwork-next-title">The field changed the question.</h2>
            <p>
              A teacher at school connected me with a research team at ECUST.
              They invited me to join experiments tracing how pesticides
              distribute and dissipate after drone application.
            </p>
            <p>
              During the October fieldwork, I worked on sampling, data
              correction, and methodology. It moved me from building a device
              for hard-to-reach places to asking how measurements should be
              collected and compared outdoors.
            </p>
          </div>
          <a className="project-cta" href="/work/pesticide-dispersion">
            <span>Next project / 02</span>
            <strong>Follow the pesticide fieldwork →</strong>
          </a>
        </section>

        <footer className="site-footer">
          <p>Ray Sha</p>
          <p>Built, tested, revised.</p>
          <a href="/work">All work</a>
        </footer>
      </main>
    </div>
  );
}
