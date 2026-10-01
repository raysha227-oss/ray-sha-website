import type { Metadata } from "next";
import { PhotoSlider } from "@/components/editorial/photo-slider";
import { galleries } from "@/content/galleries";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Short notes on humor, ethics, sustainable energy, and better technology.",
};

const notes = [
  {
    number: "01",
    label: "Jokes / memes",
    title: "Usually, it starts with a bad joke.",
    copy: "I send friends memes and make dad jokes. Humor is often how I connect with people, and it makes it easier to get a conversation going.",
  },
  {
    number: "02",
    label: "Technology / ethics",
    title: "The trolley problem gets stranger when the trolley has software.",
    copy: "With friends, the useful question is rarely which lever we would pull. It is who chose the options, what the system can know, and whether calling a decision automatic makes anyone less responsible for it.",
  },
  {
    number: "03",
    label: "Sustainable energy",
    title: "How quickly can an energy system change?",
    copy: "At HMUN, I argued for renewable energy while recognizing how difficult the transition can be. I still come back to the questions of reliability, cost, and how countries can work together.",
  },
  {
    number: "04",
    label: "What if?",
    title: "What if better technology were easier to rebuild?",
    copy: "When I build something, I care about how the parts communicate and whether the interface is easy to use. I want the finished system to be straightforward, even when getting it to work wasn’t.",
  },
] as const;

export default function NotesPage() {
  return (
    <div className="site-shell">
      <SiteHeader active="Notes" />
      <main id="main-content" tabIndex={-1}>
        <header className="notes-hero">
          <p className="eyebrow">Notes / fragments worth keeping</p>
          <h1>Things we end up talking about.</h1>
          <p>
            Jokes, technology, ethics, energy. These are a few of the topics I
            keep coming back to with friends and in my own work.
          </p>
        </header>

        <section className="conversation-notes" aria-label="Conversation notes">
          {notes.map((note) => (
            <article key={note.number}>
              <div className="note-meta">
                <span>{note.number}</span>
                <p>{note.label}</p>
              </div>
              <div>
                <h2>{note.title}</h2>
                <p>{note.copy}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="work-collection" aria-label="Photographic notes">
          <article className="work-collection-entry">
            <PhotoSlider
              label="Lab notebook photographs"
              photos={galleries.labnotes}
              variant="window"
            />
            <div>
              <p className="section-label">Small records / lab</p>
              <h2>What I keep from the lab.</h2>
              <p>
                A few photographs from chemistry and environmental science
                experiments: glassware, samples, and the setup around them.
              </p>
            </div>
          </article>
          <article className="work-collection-entry">
            <PhotoSlider
              label="Subway and WAIC photographs"
              photos={galleries.everyday}
            />
            <div>
              <p className="section-label">Between things</p>
              <h2>A few things along the way.</h2>
              <p>
                Subway rides and a visit to WAIC. Some photographs stay here
                simply because I want to remember them.
              </p>
              <a className="text-link" href="/index">
                More rides, hosting, and everyday things
              </a>
            </div>
          </article>
        </section>
        <aside className="medium-note">
          <p className="section-label">Writing / for fun</p>
          <p>
            I sometimes write on Medium, too.{" "}
            <a
              className="text-link"
              href="https://raysha1.medium.com/a-critique-of-law-without-order-1b7f234dfec4"
              target="_blank"
              rel="noreferrer"
            >
              A critique of Law Without Order ↗
            </a>
          </p>
        </aside>

        <section className="question-strip" aria-labelledby="questions-title">
          <p className="section-label">Open tabs</p>
          <div>
            <h2 id="questions-title">Questions I would rather keep open.</h2>
            <ul>
              <li>
                When does convenience hide a cost from the person using it?
              </li>
              <li>Can a sensor be honest about what it cannot measure?</li>
              <li>What would make good environmental data easier to share?</li>
              <li>
                Which ridiculous idea becomes useful after one constraint?
              </li>
            </ul>
          </div>
        </section>

        <footer className="site-footer">
          <p>Ray Sha</p>
          <p>Short notes, unfinished on purpose.</p>
          <a href="/">Return home</a>
        </footer>
      </main>
    </div>
  );
}
