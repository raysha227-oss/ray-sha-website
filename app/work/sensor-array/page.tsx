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
          <h1>Taking air-pollution measurements with me.</h1>
          <p>
            A low-cost mobile array for repeated, geolocated measurements across
            agricultural and urban environments.
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
              <h2>Precision revealed a timing problem.</h2>
              <p>
                During pesticide field research, I worked with a sampler
                alongside the plots. Compound-specific laboratory tests provide
                precise measurements, but collecting, extracting, and analyzing
                each sample takes time and resources.
              </p>
              <p>
                That limitation suggested a different engineering question: what
                could a low-cost mobile system measure immediately and
                repeatedly, without pretending to replace laboratory analysis?
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
              <p className="kicker">02 / Current project</p>
              <h2>CoreS3, SEN66, BME688—and a lot of wiring.</h2>
              <p>
                I’m combining particulate and VOC sensing with microclimate,
                light, and GPS data. The photographs show the electronics on a
                car roof and the readings on the screen. It is still a build in
                progress.
              </p>
              <p>
                The immediate focus is broad air-pollution monitoring while
                biking, walking, or travelling in a car. Agriculture is one use
                case, but the array is designed for wider environmental
                measurement.
              </p>
            </div>
          </article>
          <article className="project-reading">
            <p className="kicker">03 / Why make it mobile</p>
            <h2>Timelier data, collected by more people.</h2>
            <p>
              I’m exploring QGIS and AI-assisted processing to categorize broad
              pollution patterns across space. A low-cost system could make
              repeated measurements more practical for field studies and citizen
              science.
            </p>
            <p>
              Relating these signals to pesticide levels remains a longer-term
              research question; the array has not demonstrated
              pesticide-specific detection. For now, I am testing what its
              air-quality readings can reliably show.
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
