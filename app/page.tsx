import { EditorialFigure } from "@/components/editorial";
import { PhotoSlider } from "@/components/editorial/photo-slider";
import { galleries } from "@/content/galleries";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <details className="project-rail">
          <summary className="project-rail-tab">3 projects</summary>
          <nav
            className="project-rail-panel"
            aria-label="Three connected projects"
          >
            <p>One measurement problem, three approaches.</p>
            <ol>
              <li>
                <a href="/work/kirigami">
                  <span>01</span>
                  <strong>Reach safely</strong>
                  <small>Cut PET robot</small>
                </a>
              </li>
              <li>
                <a href="/work/pesticide-dispersion">
                  <span>02</span>
                  <strong>Measure precisely</strong>
                  <small>Pesticide fieldwork</small>
                </a>
              </li>
              <li>
                <a href="/work/sensor-array">
                  <span>03</span>
                  <strong>Measure sooner</strong>
                  <small>Mobile sensor array</small>
                </a>
              </li>
            </ol>
          </nav>
        </details>
        <section className="prototype-opening" aria-labelledby="opening-title">
          <div>
            <p className="eyebrow">Ray Sha / work and everyday things</p>
            <h1 id="opening-title">
              Things I’m making. Things I’m still figuring out.
            </h1>
          </div>
          <p className="prototype-opening-note">
            I build environmental sensors and robots, do field research, and
            help run events. I also like cooking, cycling, and sending my
            friends bad jokes.
          </p>
        </section>

        <div id="work" className="prototype-stream">
          <article className="prototype-lead">
            <EditorialFigure
              src="/media/kirigami-pet-cut.jpg"
              alt="A laser-cut sheet of PET showing a repeating kirigami pattern"
              width={1200}
              height={1600}
              priority
              caption="A repeating cut pattern turns a flat PET sheet into a flexible structure."
            />
            <div className="prototype-lead-copy">
              <p className="kicker">01 / Safety through flexibility</p>
              <h2>Cutting PET to reach difficult places.</h2>
              <p>
                Kirigami cut patterns let a light sheet stretch and bend. I used
                them to build a low-cost robot that could carry sensors into
                drains, riverbanks, and canals where direct inspection can be
                awkward or unsafe.
              </p>
              <a className="project-cta" href="/work/kirigami">
                <span>Project 01</span>
                <strong>See the PET cuts and build notes</strong>
              </a>
            </div>
          </article>

          <article className="prototype-research">
            <div className="prototype-research-copy">
              <p className="kicker">02 / Precise measurement</p>
              <h2>Following what remains after spraying.</h2>
              <p>
                My interest in drones, mechanics, and environmental science led
                me to a research team studying UAV-applied fungicides. I helped
                collect and extract air, crop, soil, and mulch samples to
                compare their distribution and dissipation—and to think more
                carefully about persistence and possible inhalation exposure.
              </p>
              <a
                className="project-cta project-cta-light"
                href="/work/pesticide-dispersion"
              >
                <span>Project 02</span>
                <strong>Follow the field sampling path</strong>
              </a>
            </div>
            <EditorialFigure
              src="/media/field-monitor.jpg"
              alt="Ray standing beside an air-sampling monitor at the edge of a rice field"
              width={1800}
              height={1350}
              caption="Checking the monitor beside the treated plots."
            />
          </article>

          <article className="prototype-pair">
            <PhotoSlider
              label="Building the sensor array"
              photos={galleries.sensors}
            />
            <div>
              <p className="kicker">03 / Timely, accessible sensing</p>
              <h2>From precise samples to repeated measurements.</h2>
              <p>
                Laboratory tests are precise, but they take time and resources.
                I’m now building a low-cost mobile array around a CoreS3, SEN66,
                BME688, and other sensors for near-real-time, geolocated air-
                pollution measurements. The longer-term goal is a tool that can
                support field studies and citizen science.
              </p>
              <a className="project-cta" href="/work/sensor-array">
                <span>Project 03</span>
                <strong>Follow the current sensor build</strong>
              </a>
            </div>
          </article>

          <article className="prototype-pair home-index-preview">
            <PhotoSlider
              label="Speaking, organizing, cycling, and cooking"
              photos={galleries.homeIndex}
              variant="window"
            />
            <div>
              <p className="kicker">Beyond the three projects</p>
              <h2>Events, arguments, cameras, rides, and dinner.</h2>
              <p>
                The index is a wider picture of me: ASB event planning, public
                speaking, Model UN, environmental organizing, photography,
                cycling, cooking, and the smaller things around the work.
              </p>
              <a className="project-cta" href="/index">
                <span>Personal index</span>
                <strong>Browse the wider archive</strong>
              </a>
            </div>
          </article>

          <aside className="home-notes" aria-label="Notes preview">
            <div>
              <p className="section-label">Notes / small thoughts</p>
              <p>
                Bad jokes, technology, ethics, energy, and questions I have not
                finished.
              </p>
            </div>
            <a className="text-link" href="/notes">
              Open notes
            </a>
          </aside>
        </div>

        <section className="prototype-closing" aria-labelledby="closing-title">
          <p className="section-label">A working archive</p>
          <div>
            <h2 id="closing-title">
              Not everything needs to become a project.
            </h2>
            <p>
              Some things deserve a full record. Others are better kept as a
              photograph, a question, a joke that survives the week, or a note
              about an idea worth trying later.
            </p>
            <a className="text-link" href="/about">
              A short introduction
            </a>
          </div>
        </section>

        <footer className="site-footer">
          <p>Ray Sha</p>
          <p>Environmental measurement, making, and unfinished questions.</p>
          <a href="/index">Index</a>
        </footer>
      </main>
    </div>
  );
}
