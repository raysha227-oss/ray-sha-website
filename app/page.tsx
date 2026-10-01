import { EditorialFigure } from "@/components/editorial";
import { PhotoSlider } from "@/components/editorial/photo-slider";
import { galleries } from "@/content/galleries";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
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
              src="/media/kirigami-cut-structure.jpg"
              alt="Several translucent PET kirigami structures nested together"
              width={1080}
              height={1920}
              priority
              caption="PET after cutting and folding tests. A flat sheet becomes a structure that can bend through tighter spaces."
            />
            <div className="prototype-lead-copy">
              <p className="kicker">01 / Making</p>
              <h2>It started with folding paper.</h2>
              <p>
                I liked making paper planes, then started experimenting with
                kirigami. That led to a moving shell, a camera, and eventually
                environmental sensors. Each version gave me something else to
                work out.
              </p>
              <a className="text-link" href="/work/kirigami">
                Open the build notes
              </a>
            </div>
          </article>

          <article className="prototype-research">
            <div className="prototype-research-copy">
              <p className="kicker">02 / Field research</p>
              <h2>What happens after spraying?</h2>
              <p>
                I joined a research team studying where drone-applied pesticides
                go. We sampled air, crops, soil, and mulch, then followed how
                the residues changed over time.
              </p>
              <a
                className="text-link text-link-light"
                href="/work/pesticide-dispersion"
              >
                Follow the sampling path
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
              <p className="kicker">03 / Electronics in progress</p>
              <h2>From the sampler to my own array.</h2>
              <p>
                Working with the field sampler gave me a starting point. Now I’m
                building a smaller electronics setup around a CoreS3, SEN66,
                BME688, and other components. I want to see what I can learn by
                taking measurements on the move.
              </p>
              <a className="text-link" href="/work/sensor-array">
                Follow the current build
              </a>
            </div>
          </article>

          <section
            className="conversation-preview"
            aria-labelledby="conversation-title"
          >
            <div className="conversation-intro">
              <p className="section-label">Notes / with friends</p>
              <h2 id="conversation-title">We were just talking.</h2>
              <p>
                A lot of our conversations start with memes and dad jokes.
                Sometimes we end up arguing about energy or technology.
              </p>
            </div>
            <div className="conversation-stack">
              <article>
                <span>Ethics</span>
                <h3>
                  Does a trolley problem become different when software has to
                  choose?
                </h3>
              </article>
              <article>
                <span>Energy</span>
                <h3>
                  How fast should a renewable transition move if reliability is
                  part of fairness?
                </h3>
              </article>
              <article>
                <span>What if?</span>
                <h3>
                  What if better technology meant easier to repair, repeat, and
                  share?
                </h3>
              </article>
              <a className="text-link" href="/notes">
                Read the conversation notes
              </a>
            </div>
          </section>

          <article className="prototype-pair">
            <EditorialFigure
              src="/media/energy-audit-walkthrough.jpg"
              alt="A measured line over the exterior wall of a school building during an energy audit"
              width={828}
              height={1626}
              caption="Recording exterior dimensions during an audit across twenty classrooms and two buildings."
            />
            <div>
              <p className="kicker">04 / Counting</p>
              <h2>A closer look at our buildings.</h2>
              <p>
                Our environmental club checked lights, air conditioning, and
                idle equipment across twenty classrooms and two buildings. We
                wrote up the findings and proposed changes for the school.
              </p>
              <a className="text-link" href="/index">
                Browse the wider index
              </a>
            </div>
          </article>
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
