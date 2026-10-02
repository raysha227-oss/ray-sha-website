import type { Metadata } from "next";
import { MosaicEntry } from "@/components/editorial";
import { SiteHeader } from "@/components/layout/site-header";
import { ActivityRecord } from "@/components/editorial/activity-record";
import { PhotoSlider } from "@/components/editorial/photo-slider";
import { galleries } from "@/content/galleries";

export const metadata: Metadata = {
  title: "Index",
  description:
    "A wider personal archive of organizing, speaking, art, movement, small builds, and unfinished questions.",
};

export default function IndexPage() {
  return (
    <div className="site-shell">
      <SiteHeader active="Index" />
      <main id="main-content" tabIndex={-1}>
        <header className="index-hero">
          <p className="eyebrow">Index / everything around the projects</p>
          <h1>The rest of what I do.</h1>
          <p>
            Event planning, club fieldwork, cameras, conversations, and a few
            things I do just because I enjoy them.
          </p>
        </header>

        <section className="mosaic" aria-label="Personal archive entries">
          <MosaicEntry
            label="Speaking"
            title="Still a little nervous"
            summary="At one opening ceremony, I had to introduce an additional teacher with no slide prepared. At a charity event, I held back my cues while the team finished preparing props. I’m more comfortable onstage now, but I still get nervous."
            tags={["argue", "listen", "gather"]}
            size="wide"
            recognition="ILMUN 2024 · Commendation · WEMUN 2023 and 2024 · Honorable Mention"
          />

          <MosaicEntry
            label="ASB"
            title="Before everyone arrives"
            summary="As Vice President and then President, I learned to ask what people wanted to take on, adjust the plan when someone was overloaded, and leave room for a better idea than mine. The event still had to work; the team did too."
            tags={["gather", "shape", "revise"]}
            size="standard"
          />

          <MosaicEntry
            label="Cycling"
            title="The long way home"
            summary="I like going out for a ride. Sometimes I take photographs along the way. I’m also testing a mobile sensor setup, but most rides are just rides."
            tags={["move", "notice"]}
            size="standard"
          />

          <MosaicEntry
            label="Energy audit"
            title="Counting what everyone walks past"
            summary="Our club checked twenty classrooms and two buildings, recording lights, air conditioning, idle equipment, and room dimensions. We used the findings to write an energy report with changes the school could actually try."
            tags={["measure", "gather", "test"]}
            size="wide"
            recognition="Environmental club · Distinction · Top 30%"
          />

          <MosaicEntry
            label="Water quality"
            title="Taking the kit outside"
            summary="We started with test strips, then moved to equipment for ammonia, phosphorus, and dissolved oxygen. Later, we added drone surveys to see more of the river and look for possible sources of the water-quality problems."
            tags={["measure", "test", "notice"]}
            size="wide"
          />

          <MosaicEntry
            label="Environmental economics"
            title="Arguing with the discount rate"
            summary="I wrote about discount rates for long-term environmental projects. Comparing Ramsey, Nordhaus, Stern, and Weitzman made me ask how much weight today’s decisions should give to people living far in the future."
            tags={["question", "argue", "compare"]}
            size="standard"
            status="Working paper"
          />

          <MosaicEntry
            label="Community organizing"
            title="After YYGS"
            summary="At YYGS, our group proposed using gene-edited bacteria to help break down marine microplastics. Afterward, I became the Shanghai chapter president of Students for a Better Future, working on practical environmental advocacy, including plastic-waste reduction campaigns."
            tags={["gather", "shape", "revise"]}
            size="wide"
          />

          <MosaicEntry
            label="Cameras"
            title="A camera I could afford to rebuild"
            summary="I photographed school events, helped start the Portrait student blog, and built a camera around a Raspberry Pi. I liked that the cheap parts made the system understandable, repairable, and mine."
            tags={["frame", "make", "play"]}
            size="standard"
          />

          <MosaicEntry
            label="Cooking"
            title="Making dinner"
            summary="I like cooking at home. Sometimes it’s nice to put the work aside and make dinner."
            tags={["make", "notice", "play"]}
            size="standard"
          />

          <MosaicEntry
            label="Tennis"
            title="Mostly after dark"
            summary="I play tennis for fun, often in the evening. I like having something to do that keeps me moving and away from a screen."
            tags={["move", "notice", "play"]}
            size="wide"
          />

          <MosaicEntry
            label="Lucky desk crew"
            title="Rabbit, penguin, seal"
            summary="Three stuffed animals travel between my desk and suitcase. I call them mascots; bringing them along makes difficult days feel a little more manageable. Photographs later."
            tags={["notice", "play", "gather"]}
            size="standard"
          />
        </section>

        <ActivityRecord />

        <section
          id="club-activities"
          className="club-record"
          aria-labelledby="club-title"
        >
          <div>
            <p className="section-label">E# club / 2024–2026</p>
            <h2 id="club-title">From test strips to a wider view.</h2>
            <p>
              Two years of water testing, drone surveys, and a school energy
              audit.
            </p>
            <PhotoSlider
              label="Environmental club"
              photos={galleries.water}
              variant="window"
            />
          </div>
          <ol className="club-timeline">
            <li>
              <p className="section-label">2024–2025 / Water testing</p>
              <h3>Getting better measurements</h3>
              <p>
                We moved from test strips to better equipment, compared repeated
                readings, and wrote reports on what we found.
              </p>
            </li>
            <li>
              <p className="section-label">2025–2026 / Drone inspections</p>
              <h3>Looking beyond the sampling point</h3>
              <p>
                We built a simple imaging drone to add visual context beyond
                each ground sampling point.
              </p>
            </li>
            <li>
              <p className="section-label">2025–2026 / Energy audit</p>
              <h3>Bringing the survey back to school</h3>
              <p>
                We audited twenty classrooms and two buildings, then proposed
                changes the school could actually try.
              </p>
            </li>
          </ol>
        </section>

        <section
          id="notes"
          className="index-notes"
          aria-labelledby="notes-title"
        >
          <div className="index-notes-heading">
            <p className="section-label">Notes</p>
            <h2 id="notes-title">Three things I keep coming back to.</h2>
          </div>
          <div className="small-notes">
            <article>
              <p>01 / Paint</p>
              <h3>
                Chinese landscapes and flower-and-bird painting have stayed with
                me longer than most of my projects.
              </h3>
            </article>
            <article>
              <p>02 / Make</p>
              <h3>
                I started with paper planes and folding. Eventually, I wanted to
                see whether a kirigami structure could move on its own.
              </h3>
            </article>
            <article>
              <p>03 / Listen</p>
              <h3>
                Playing the erhu keeps my attention on tiny changes in pressure,
                pitch, and the quality of a single sustained note.
              </h3>
            </article>
          </div>
        </section>

        <section
          id="about"
          className="index-about"
          aria-labelledby="about-title"
        >
          <p className="section-label">About this index</p>
          <div>
            <h2 id="about-title">The projects are not the whole story.</h2>
            <p>
              I wanted to keep some of the ordinary parts here too: the team
              before an event, a camera in the auditorium, dinner at home.
              They’re part of how I spend my time.
            </p>
          </div>
        </section>

        <footer className="site-footer index-footer">
          <p>Ray Sha</p>
          <p>The three connected academic projects have their own page.</p>
          <a href="/work">Return to academic work</a>
        </footer>
      </main>
    </div>
  );
}
