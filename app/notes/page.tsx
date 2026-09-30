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
    title: "A serious room does not have to be a solemn one.",
    copy: "Humor is how I usually enter a conversation: an exaggerated face, a dad joke, or whatever meme has taken over that week. It makes it easier to meet someone before asking what they actually think.",
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
    title: "Fast, fair, reliable: choose all three, then argue about how.",
    copy: "Renewable energy conversations become interesting when the easy agreement ends. We ask who pays for the transition, how reliability changes the answer, and how much people in the future should count in decisions made now.",
  },
  {
    number: "04",
    label: "What if?",
    title: "What if better technology were easier to rebuild?",
    copy: "My favorite hypotheticals turn quickly into design constraints: less expensive, repairable outside a lab, clear about uncertainty, and useful to someone who did not invent it. A wild idea becomes better when another person finds its weak point.",
  },
] as const;

export default function NotesPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <header className="notes-hero">
          <p className="eyebrow">Notes / fragments worth keeping</p>
          <h1>Some conversations refuse to stay small.</h1>
          <p>
            A break starts with jokes and memes. Five minutes later, we are
            redesigning a machine, disagreeing about an ethical edge case, or
            asking whether an energy solution is still sustainable when its
            hidden costs enter the picture.
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
