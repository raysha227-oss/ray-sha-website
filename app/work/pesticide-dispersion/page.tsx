import type { Metadata } from "next";
import {
  Annotation,
  DocumentRow,
  EditorialFigure,
} from "@/components/editorial";
import { SiteHeader } from "@/components/layout/site-header";
import { PhotoSlider } from "@/components/editorial/photo-slider";
import { galleries } from "@/content/galleries";

export const metadata: Metadata = {
  title: "Pesticide dispersion fieldwork",
  description:
    "Field notes on tracing pesticide residues across air, crop, soil, and mulch.",
};

const samplePath = [
  ["Air", "What moved beyond the spray path"],
  ["Crop", "What remained on leaf surfaces"],
  ["Soil", "What reached the ground below"],
  ["Mulch", "What collected on an easy-to-miss surface"],
] as const;

export default function PesticidePage() {
  return (
    <div className="site-shell">
      <SiteHeader active="Work" />
      <main id="main-content" tabIndex={-1}>
        <header className="project-hero project-hero-dark">
          <p className="eyebrow">Field research / from October 2025</p>
          <h1>After the spray.</h1>
          <p>
            A UAV application lasts minutes. Following what happens afterward
            means collecting across several surfaces and refusing to treat one
            reading as the whole story.
          </p>
        </header>

        <section className="research-opening">
          <EditorialFigure
            src="/media/rice-fieldwork.jpg"
            alt="A researcher walking between marked experimental plots in a rice field"
            width={1800}
            height={1350}
            priority
            caption="The marked rice plots after a field trial."
          />
          <div className="project-reading">
            <p>
              I joined UAV spray trials, collected TSP, crop, soil, and
              plastic-mulch samples, extracted residues, and compared how
              fungicides distributed and dissipated across those matrices.
            </p>
            <p>
              Laboratory analysis is precise, but it takes time and resources.
              That limitation did not make me want a shortcut. It made me want a
              second layer of repeated, mobile sensing that could show where
              slower analysis was most needed.
            </p>
            <Annotation label="Boundary">
              This work does not claim that a low-cost sensor can replace
              compound-specific laboratory analysis.
            </Annotation>
          </div>
        </section>

        <section className="sample-graph" aria-labelledby="sample-graph-title">
          <div className="sample-graph-heading">
            <p className="section-label">Sampling map</p>
            <h2 id="sample-graph-title">
              One application, four places to look.
            </h2>
            <p>This is the sampling plan, not a graph of results.</p>
          </div>
          <ol>
            {samplePath.map(([name, detail], index) => (
              <li key={name}>
                <span>0{index + 1}</span>
                <h3>{name}</h3>
                <p>{detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="research-gallery"
          aria-label="Field sampling photographs"
        >
          <EditorialFigure
            src="/media/field-monitor.jpg"
            alt="Ray standing beside an air-sampling monitor at the edge of a rice field"
            width={1800}
            height={1350}
            caption="Checking the field monitor beside the treated plots."
          />
          <EditorialFigure
            src="/media/sample-vials.jpg"
            alt="Ray arranging labeled red-capped sample vials beside a rice field"
            width={1800}
            height={1350}
            caption="Organizing labeled vials before the next sampling round."
          />
        </section>

        <section
          id="mobile-sensing"
          className="work-collection-entry"
          aria-labelledby="mobile-title"
        >
          <PhotoSlider
            label="Mobile sensing"
            photos={galleries.sensors}
            variant="window"
          />
          <div>
            <p className="section-label">The next build</p>
            <h2 id="mobile-title">Collecting data while moving.</h2>
            <p>
              I’m developing a sensor array that combines pollution sensors,
              GPS, and imaging. The aim is to collect spatial data in moving
              conditions and explore whether machine learning can help interpret
              it. It’s ongoing work; the laboratory measurements remain the
              reference.
            </p>
          </div>
        </section>

        <section
          id="research-note"
          className="research-record"
          aria-labelledby="record-title"
        >
          <div>
            <p className="section-label">Research record</p>
            <h2 id="record-title">The manuscript stays private for now.</h2>
            <p>
              The public page can explain the method and limits without exposing
              a draft that still needs authorship and permission review.
            </p>
          </div>
          <DocumentRow
            title="Pesticide research manuscript"
            status="Permission review"
            description="Metadata only. No public download is available in this prototype."
          />
        </section>

        <footer className="site-footer">
          <p>Ray Sha</p>
          <p>Field measurements are the beginning of the explanation.</p>
          <a href="/notes">Notes and questions</a>
        </footer>
      </main>
    </div>
  );
}
