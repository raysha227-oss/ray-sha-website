import type { Metadata } from "next";
import { MosaicEntry } from "@/components/editorial";
import { SiteHeader } from "@/components/layout/site-header";
import { ActivityRecord } from "@/components/editorial/activity-record";
import { PhotoSlider } from "@/components/editorial/photo-slider";
import { galleries } from "@/content/galleries";

// Avoid Vercel's static segment output path mismatch for the /index route.
export const dynamic = "force-dynamic";

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
            label="Model UN"
            title="Speaking before the sentence felt finished"
            summary="MUN made me listen for where the room was moving, then decide when I had something useful to add. I still rehearsed too much, but I got better at speaking before every sentence felt perfect."
            tags={["argue", "listen", "revise"]}
            size="wide"
            recognition="ILMUN 2024 · Commendation · WEMUN 2023 and 2024 · Honorable Mention"
          />

          <MosaicEntry
            label="Debate"
            title="Testing the other side"
            summary="Debate taught me to take an argument apart, rebuild it, and then ask what I had missed. The useful part was often the question that made my first position less comfortable."
            tags={["argue", "question", "listen"]}
            size="standard"
          />

          <MosaicEntry
            label="Hosting"
            title="Reading the room"
            summary="At an opening ceremony, I introduced an extra teacher without a prepared slide. At a charity event, I slowed my cues while the team finished the props. Hosting is planned, but it never follows the script exactly."
            tags={["listen", "gather", "revise"]}
            size="standard"
          />

          <MosaicEntry
            label="Mock trial"
            title="Making the evidence matter"
            summary="Mock trial gave me a different kind of speaking practice. I had to know the record, respond to the person in front of me, and explain why one detail changed the argument."
            tags={["argue", "listen", "question"]}
            size="wide"
          />

          <MosaicEntry
            label="Cycling"
            title="The long way home"
            summary="I like going out for a ride. Sometimes I take photographs along the way. I’m also testing a mobile sensor setup, but most rides are just rides."
            tags={["move", "notice"]}
            size="standard"
          />

          <MosaicEntry
            label="Water testing on trips"
            title="Sometimes the kit comes with me"
            summary="When I travel, I sometimes pack a small water-testing kit. If a canal or river catches my attention, I stop, take a dissolved-oxygen reading, and photograph the site. I do it out of curiosity, without turning every stop into a formal project."
            tags={["measure", "notice", "move"]}
            size="wide"
          />

          <MosaicEntry
            label="Environmental economics"
            title="Arguing with the discount rate"
            summary="My paper began with a question I could not stop arguing with: how much should a decision today count the lives of people far in the future? Ramsey, Nordhaus, Stern, and Weitzman gave me four different ways to get stuck."
            tags={["question", "argue", "compare"]}
            size="standard"
            status="Working paper"
          />

          <MosaicEntry
            label="Team business case"
            title="Designing microplastic-free fish"
            summary="Our team built a business idea around fish raised without microplastic contamination. My role was product design: deciding what we were offering, why someone would choose it, and how to explain the idea without making the environmental problem sound simple."
            tags={["make", "question", "revise"]}
            size="wide"
            recognition="Honor in Team Business Case"
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
            summary="I built a small camera around a Raspberry Pi because I wanted to understand the whole thing. The inexpensive parts made it possible to take apart, repair, and rebuild without being afraid of breaking it."
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
            summary="A rabbit, penguin, and seal move between my desk and suitcase. I call them my mascots. They do not solve difficult days, but having them nearby helps."
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
            <h2 id="club-title">One club, several ways to look.</h2>
            <p>
              E# moved between water testing, drone surveys, classroom
              discussions, and a school energy audit.
            </p>
            <PhotoSlider
              label="E# club"
              photos={galleries.eclub}
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
            <p className="section-label">Traditional art / making / music</p>
            <h2 id="notes-title">Three slower ways of paying attention.</h2>
          </div>
          <div className="small-notes">
            <article>
              <p>01 / Paint</p>
              <h3>
                I learned Chinese landscapes and flower-and-bird painting before
                I knew words like “design process.” I still like how a few
                brushstrokes can hold a whole scene together.
              </h3>
            </article>
            <article>
              <p>02 / Make</p>
              <h3>
                I started by folding paper planes and trying to make them fly
                farther. Kirigami came later, when I began asking whether the
                folds could become part of a machine.
              </h3>
            </article>
            <article>
              <p>03 / Listen</p>
              <h3>
                The erhu sounds unforgiving when my pressure is slightly wrong.
                It makes me slow down and listen to one note instead of rushing
                toward the next one.
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
            <h2 id="about-title">This is what my weeks actually look like.</h2>
            <p>
              I move between field equipment, event plans, arguments, bike
              rides, dinner, and unfinished ideas. They overlap more than a neat
              activities list suggests, so this index keeps them together.
            </p>
          </div>
        </section>

        <footer className="site-footer index-footer">
          <p>Ray Sha</p>
          <p>
            The kirigami robot, pesticide fieldwork, and sensor array connect on
            the Work page.
          </p>
          <a href="/work">See the three connected projects</a>
        </footer>
      </main>
    </div>
  );
}
