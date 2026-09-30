"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main-content" className="foundation">
      <p className="eyebrow">Something went wrong</p>
      <h1>Try again</h1>
      <p className="foundation-summary">
        The page could not be loaded. No information was lost.
      </p>
      <p>
        <button type="button" onClick={reset}>
          Reload this page
        </button>
      </p>
    </main>
  );
}
