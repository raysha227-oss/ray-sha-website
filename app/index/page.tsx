import type { Metadata } from "next";
import Link from "next/link";
import { MosaicEntry } from "@/components/editorial";
import { SiteHeader } from "@/components/layout/site-header";
import { ActivityRecord } from "@/components/editorial/activity-record";
import { PhotoSlider } from "@/components/editorial/photo-slider";

export const metadata: Metadata = {
  title: "Index",
  description:
    "A wider personal archive of organizing, speaking, art, movement, small builds, and unfinished questions.",
};

export default function IndexPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
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
            photos={[
              {
                src: "/media/hosting-backstage.jpg",
                alt: "Ray backstage beside a spotlight",
                width: 1280,
                height: 1707,
                caption: "Before going onstage.",
                focalPosition: "50% 35%",
              },
              {
                src: "/media/mock-trial-speaking.jpg",
                alt: "A student standing to speak beside teammates at a mock trial table",
                width: 1600,
                height: 1067,
                caption: "Speaking at SEMT mock trial.",
              },
              {
                src: "/media/mock-trial-preparation.jpg",
                alt: "Teammates reviewing papers together at mock trial",
                width: 1067,
                height: 1600,
                caption: "Going over the papers together.",
              },
            ]}
            image={{
              src: "/media/hosting-backstage.jpg",
              alt: "Ray standing backstage beside a spotlight before a hosting event",
              width: 1280,
              height: 1707,
              caption: "Backstage before a hosting event.",
              focalPosition: "50% 35%",
            }}
            recognition="ILMUN 2024 · Commendation · WEMUN 2023 and 2024 · Honorable Mention"
          />

          <MosaicEntry
            label="ASB"
            title="Before everyone arrives"
            summary="I served as ASB Vice President and then President. A lot of the work happens before an event starts: writing the script, setting up the venue, assigning jobs, and checking equipment. I especially enjoy seeing everyone’s separate piece come together."
            tags={["gather", "shape", "revise"]}
            size="standard"
            photos={[
              {
                src: "/media/asb-outdoor-setup.jpg",
                alt: "Students working with buckets and equipment on an outdoor court",
                width: 1800,
                height: 1350,
                caption: "Part of the outdoor event work.",
              },
              {
                src: "/media/asb-backstage-team.jpg",
                alt: "Students gathered together backstage",
                width: 1800,
                height: 1426,
                caption: "With the team backstage.",
              },
              {
                src: "/media/asb-campaign.jpg",
                alt: "Ray presenting his ASB president campaign",
                width: 1800,
                height: 1350,
                caption: "The president campaign.",
                focalPosition: "50% 55%",
              },
              {
                src: "/media/asb-vice-president.jpg",
                alt: "Ray speaking in front of an ASB campaign projection",
                width: 1800,
                height: 1350,
                caption: "An earlier ASB campaign.",
              },
            ]}
            image={{
              src: "/media/asb-campaign.jpg",
              alt: "Ray presenting his ASB president campaign in front of a projected campaign slide",
              width: 1800,
              height: 1350,
              caption: "Presenting my ASB president campaign.",
              focalPosition: "50% 55%",
            }}
          />

          <MosaicEntry
            label="Cycling"
            title="The long way home"
            summary="I like going out for a ride. Sometimes I take photographs along the way. I’m also testing a mobile sensor setup, but most rides are just rides."
            tags={["move", "notice"]}
            size="standard"
            image={{
              src: "/media/biking-night.jpg",
              alt: "Ray in a cycling jacket beside the water at night",
              width: 1800,
              height: 1350,
              caption: "A night ride beside the water.",
              focalPosition: "65% 42%",
            }}
          />

          <MosaicEntry
            label="Energy audit"
            title="Counting what everyone walks past"
            summary="Our club checked twenty classrooms and two buildings, recording lights, air conditioning, idle equipment, and room dimensions. We used the findings to write an energy report with changes the school could actually try."
            tags={["measure", "gather", "test"]}
            size="wide"
            photos={[
              {
                src: "/media/energy-audit-walkthrough.jpg",
                alt: "A dimension marked along a school building exterior",
                width: 828,
                height: 1626,
                caption: "Recording the building dimensions.",
              },
              {
                src: "/media/energy-audit-exterior.jpg",
                alt: "An exterior passage beside a school building",
                width: 828,
                height: 1626,
                caption: "A photograph from the audit walkthrough.",
              },
              {
                src: "/media/energy-audit-corridor.jpg",
                alt: "An indoor school corridor with overhead lights",
                width: 828,
                height: 1626,
                caption: "The corridors were part of the survey too.",
              },
            ]}
            image={{
              src: "/media/energy-audit-walkthrough.jpg",
              alt: "A measured line over the exterior wall of a school building during an energy audit",
              width: 828,
              height: 1626,
              caption: "Recording exterior dimensions during the audit.",
              focalPosition: "50% 55%",
            }}
            recognition="Environmental club · Distinction · Top 30%"
          />

          <MosaicEntry
            label="Water quality"
            title="Taking the kit outside"
            summary="We started with test strips, then moved to equipment for ammonia, phosphorus, and dissolved oxygen. Later, we added drone surveys to see more of the river and look for possible sources of the water-quality problems."
            tags={["measure", "test", "notice"]}
            size="wide"
            image={{
              src: "/media/water-quality-kit.jpg",
              alt: "A water-quality testing kit and meters arranged on grass for fieldwork",
              width: 1350,
              height: 1800,
              caption: "Meters and sampling equipment laid out for fieldwork.",
              focalPosition: "50% 58%",
            }}
          />

          <MosaicEntry
            label="Environmental economics"
            title="Arguing with the discount rate"
            summary="I wrote about discount rates for long-term environmental projects. Comparing Ramsey, Nordhaus, Stern, and Weitzman made me ask how much weight today’s decisions should give to people living far in the future."
            tags={["question", "argue", "compare"]}
            size="standard"
            status="Working paper"
            image={{
              src: "/media/econ-on-the-road.jpg",
              alt: "A laptop open to a working document on a train tray table",
              width: 1800,
              height: 1013,
              caption: "Competition work continued on the train.",
              focalPosition: "70% 55%",
            }}
          />

          <MosaicEntry
            label="Community organizing"
            title="After YYGS"
            summary="At YYGS, our group proposed using gene-edited bacteria to help break down marine microplastics. Afterward, I became the Shanghai chapter president of Students for a Better Future, working on practical environmental advocacy, including plastic-waste reduction campaigns."
            tags={["gather", "shape", "revise"]}
            size="wide"
            image={{
              src: "/media/yygs-shore.jpg",
              alt: "Ray standing by the shoreline beneath a broad blue sky during YYGS",
              width: 1350,
              height: 1800,
              caption: "A shoreline photograph from YYGS 2025.",
              focalPosition: "55% 65%",
            }}
          />

          <MosaicEntry
            label="Cameras"
            title="On the other side of the camera"
            summary="For the school TV station, I photographed campus events and wrote news articles. I also helped start the Portrait student blog. Outside that work, I take photos with drones and experiment with Raspberry Pi cameras."
            tags={["frame", "make", "play"]}
            size="standard"
            image={{
              src: "/media/tv-camera-work.jpg",
              alt: "A student operating a camera beside an auditorium audience",
              width: 1800,
              height: 1350,
              caption: "Filming in the auditorium.",
            }}
          />

          <MosaicEntry
            label="Cooking"
            title="Making dinner"
            summary="I like cooking at home. Sometimes it’s nice to put the work aside and make dinner."
            tags={["make", "notice", "play"]}
            size="standard"
            image={{
              src: "/media/cooking.jpg",
              alt: "Ray preparing ingredients at a kitchen counter",
              width: 1800,
              height: 1350,
              caption: "Preparing dinner at home.",
              focalPosition: "50% 48%",
            }}
          />

          <MosaicEntry
            label="Tennis"
            title="Mostly after dark"
            summary="I play tennis for fun, often in the evening. I like having something to do that keeps me moving and away from a screen."
            tags={["move", "notice", "play"]}
            size="wide"
            image={{
              src: "/media/tennis.jpg",
              alt: "Ray returning a tennis ball on an outdoor court",
              width: 1800,
              height: 1350,
              caption: "An evening practice on the outdoor court.",
              focalPosition: "48% 50%",
            }}
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
              Our water work developed over two years. The energy audit gave us
              another way to investigate something close to home.
            </p>
            <PhotoSlider
              label="Environmental club"
              photos={[
                {
                  src: "/media/water-quality-kit.jpg",
                  alt: "Water testing meters and a case laid out on grass",
                  width: 1350,
                  height: 1800,
                  caption: "The water-testing kit, out in the field.",
                },
                {
                  src: "/media/energy-audit-exterior.jpg",
                  alt: "A passage along the exterior of a school building",
                  width: 828,
                  height: 1626,
                  caption: "Walking the buildings for the energy audit.",
                },
                {
                  src: "/media/energy-audit-corridor.jpg",
                  alt: "Overhead lights along a school corridor",
                  width: 828,
                  height: 1626,
                  caption: "Recording the spaces we use every day.",
                },
              ]}
            />
          </div>
          <ol className="club-timeline">
            <li>
              <p className="section-label">2024–2025 / Water testing</p>
              <h3>Getting better measurements</h3>
              <p>
                I worked with the team on repeated water-quality tests. As we
                moved from strips to professional equipment, we analyzed the
                readings and wrote reports to explain what we were finding.
              </p>
            </li>
            <li>
              <p className="section-label">2025–2026 / Drone inspections</p>
              <h3>Looking beyond the sampling point</h3>
              <p>
                We continued testing water and built a simple imaging drone. It
                helped us inspect a wider area alongside the work we could do
                from the ground.
              </p>
            </li>
            <li>
              <p className="section-label">2025–2026 / Energy audit</p>
              <h3>Bringing the survey back to school</h3>
              <p>
                We used the ENERGY STAR K–12 framework to organize our audit,
                then adapted the findings into reports and practical proposals
                for our own buildings.
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
          <Link href="/#work">Return to academic work</Link>
        </footer>
      </main>
    </div>
  );
}
