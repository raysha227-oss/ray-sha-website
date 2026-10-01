import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { PhotoSlider } from "@/components/editorial/photo-slider";
import { galleries } from "@/content/galleries";
export const metadata: Metadata = {
  title: "Sensor array",
  description:
    "An ongoing electronics build, from field sampling to mobile environmental sensing.",
};
export default function SensorArrayPage() {
  return (
    <div className="site-shell">
      <SiteHeader active="Work" />
      <main id="main-content" tabIndex={-1}>
        <header className="index-hero">
          <p className="eyebrow">Electronics / ongoing build</p>
          <h1>Taking the measurements with me.</h1>
          <p>
            From the sampler I worked with in the field to a sensor array I’m
            building now.
          </p>
        </header>
        <section className="work-collection">
          <article className="work-collection-entry">
            <PhotoSlider
              label="The sampler that started the question"
              photos={galleries.sampler}
              variant="window"
            />
            <div>
              <p className="kicker">01 / A starting point</p>
              <h2>The sampler came first.</h2>
              <p>
                During pesticide field research, I worked with a sampler
                alongside the plots. That equipment became a starting point for
                a new question: how could I improve the setup and collect
                environmental readings while moving?
              </p>
              <p>
                The research follows residues in air, crops, soil, and mulch.
                This build follows a different part of that story: making the
                electronics work together.
              </p>
              <a className="text-link" href="/work/pesticide-dispersion">
                Back to the field research
              </a>
            </div>
          </article>
          <article className="work-collection-entry">
            <PhotoSlider
              label="Current CoreS3 sensor array"
              photos={galleries.sensors}
            />
            <div>
              <p className="kicker">02 / On the workbench</p>
              <h2>CoreS3, SEN66, BME688—and a lot of wiring.</h2>
              <p>
                I’m putting together an array around these components, with
                other parts supporting the setup. The photographs show the
                electronics on a car roof and the readings on the screen. It’s
                still a build in progress.
              </p>
              <p>
                I’m working toward combining environmental readings with GPS and
                imaging, so I can collect spatial data while biking, walking, or
                travelling in a car.
              </p>
            </div>
          </article>
          <article className="project-reading">
            <p className="kicker">03 / What comes next</p>
            <h2>Making sense of a moving measurement.</h2>
            <p>
              I’m exploring QGIS, AI-assisted processing, and ways other people
              could help collect data. One longer-term question is whether
              machine learning could help relate these readings to pesticide
              levels. That remains something to investigate; the array has not
              yet demonstrated pesticide-specific detection.
            </p>
            <p>
              For now, the next step is to keep testing the setup and understand
              what the readings can tell me.
            </p>
          </article>
        </section>
        <footer className="site-footer">
          <p>Ray Sha</p>
          <p>A build in progress.</p>
          <a href="/work">All work</a>
        </footer>
      </main>
    </div>
  );
}
