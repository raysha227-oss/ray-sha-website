import type { Metadata } from "next";
import Link from "next/link";
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
      <SiteHeader />
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
          <Link href="/">Return home</Link>
        </footer>
      </main>
    </div>
  );
}
