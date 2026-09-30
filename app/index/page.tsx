import type { Metadata } from "next";
import Link from "next/link";
import { MosaicEntry } from "@/components/editorial";
import { SiteHeader } from "@/components/layout/site-header";

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
            The academic page follows three projects in depth; this one is
            looser, bringing together the committees, speeches, rides,
            experiments, paintings, and meals that fill the space around them.
          </p>
        </header>

        <section className="mosaic" aria-label="Personal archive entries">
          <MosaicEntry
            label="Speaking"
            title="A script is only the beginning"
            summary="MUN, debate, hosting, and research presentations have taught me to prepare carefully, listen for the question underneath the question, and keep going when the room takes the conversation somewhere better than the script."
            tags={["argue", "listen", "gather"]}
            size="wide"
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
            title="The spreadsheet behind the event"
            summary="From the audience, ASB looks like assemblies and welcome parties; from inside, it is schedules, budgets, shared files, and the patient work of making sure the next person knows what happens next."
            tags={["gather", "shape", "revise"]}
            size="standard"
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
            summary="I cycle because a route changes when I have to feel every bridge, headwind, and wrong turn; sometimes I bring a sensor or camera, and sometimes the ride is allowed to be only a ride."
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
            summary="Across twenty classrooms and two buildings, our environmental club recorded lighting, HVAC, idle equipment, and physical dimensions, then turned those ordinary details into a practical energy brief."
            tags={["measure", "gather", "test"]}
            size="wide"
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
            summary="Water-quality work is satisfyingly direct: carry the case outside, calibrate what needs calibrating, collect the readings, and discover which tidy classroom assumption the water has ignored."
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
            summary="My working paper compares how Ramsey, Nordhaus, Stern, and Weitzman value the distant future, which sounds abstract until a small change in the discount rate makes an enormous difference to climate policy."
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
            summary="The summer program ended, but the organizing continued through Students for a Better Future; I now lead its Shanghai chapter, where more than one hundred members turn environmental interest into work we can do together."
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
            title="Photography with extra steps"
            summary="I like ordinary photography, but I also keep finding less convenient ways to make an image, including Raspberry Pi cameras, drone work, and small experiments that turn pressing the shutter into a build."
            tags={["frame", "make", "play"]}
            size="standard"
          />

          <MosaicEntry
            label="Cooking"
            title="An experiment I can eat"
            summary="Cooking is where I am happiest changing the procedure halfway through, partly because the feedback is immediate and partly because even a failed result usually smells better than a failed circuit."
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
            summary="I play tennis recreationally, often under the court lights, where the point is less about keeping a record and more about finding the ball early enough to return it well."
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
              <p>02 / Ask</p>
              <h3>
                One class project followed microfiber filtration, while another
                examined third places and the social life around them.
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
              Some interests become years of research, while others remain a
              meeting, a painting, a ride, a speech, or one unusually good
              dinner; both scales belong here because both shape what I notice
              and what I choose to do next.
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
