import Link from "next/link";
import { EditorialFigure } from "@/components/editorial";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="prototype-opening" aria-labelledby="opening-title">
          <div>
            <p className="eyebrow">Work / notes / things still moving</p>
            <h1 id="opening-title">
              Work, questions, pictures, arguments, and a few unfinished things.
            </h1>
          </div>
          <p className="prototype-opening-note">
            I like tools that make an invisible problem easier to notice. I also
            like bad jokes, long rides, fieldwork, and conversations that begin
            with a meme and end somewhere no one expected.
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
              <h2>A cut changed the question.</h2>
              <p>
                The first question was whether a kirigami shell could move. The
                better question became whether it could carry sensors into
                drains, riverbanks, and narrow canals without sending a person
                into the same space.
              </p>
              <Link className="text-link" href="/work/kirigami">
                Open the build notes
              </Link>
            </div>
          </article>

          <article className="prototype-research">
            <div className="prototype-research-copy">
              <p className="kicker">02 / Field research</p>
              <h2>The spray ends before the measurement problem does.</h2>
              <p>
                A UAV application lasts minutes. The residue story continues
                through air, crop, soil, and mulch samples, followed by repeated
                extraction and analysis.
              </p>
              <Link
                className="text-link text-link-light"
                href="/work/pesticide-dispersion"
              >
                Follow the sampling path
              </Link>
            </div>
            <EditorialFigure
              src="/media/field-monitor.jpg"
              alt="Ray standing beside an air-sampling monitor at the edge of a rice field"
              width={1800}
              height={1350}
              caption="Checking the monitor beside the treated plots."
            />
          </article>

          <section
            className="conversation-preview"
            aria-labelledby="conversation-title"
          >
            <div className="conversation-intro">
              <p className="section-label">Notes / with friends</p>
              <h2 id="conversation-title">The useful part is the pivot.</h2>
              <p>
                We trade memes and very committed dad jokes. Then someone asks a
                question that changes the register of the room.
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
              <Link className="text-link" href="/notes">
                Read the conversation notes
              </Link>
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
              <p className="kicker">03 / Counting</p>
              <h2>Waste hides in ordinary rooms.</h2>
              <p>
                An energy audit made the familiar measurable: lighting, HVAC,
                idle equipment, and the dimensions everyone walks past. The
                result was not a dramatic invention, but a practical brief about
                what could change next.
              </p>
              <Link className="text-link" href="/index">
                Browse the wider index
              </Link>
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
            <Link className="text-link" href="/about">
              A short introduction
            </Link>
          </div>
        </section>

        <footer className="site-footer">
          <p>Ray Sha</p>
          <p>Environmental measurement, making, and unfinished questions.</p>
          <Link href="/index">Index</Link>
        </footer>
      </main>
    </div>
  );
}
