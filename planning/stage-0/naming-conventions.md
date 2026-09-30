# Naming conventions

## Routes and slugs

- Lowercase ASCII kebab case only.
- Prefer stable subject names over dates, awards, or status.
- Examples: `kirigami-environmental-robot`, `pesticide-field-research`, `environmental-discounting`, `chinese-painting`, `raspberry-pi-camera`.
- Never put a grade, school, award, journal status, or version number in a canonical route.
- Redirect old slugs when titles change after publication.

## Entry identifiers

- Format: `<type>-<subject>` with an optional short disambiguator.
- Examples: `feature-kirigami-robot`, `note-bad-fold-01`, `object-sensor-array-02`, `document-discounting-paper`.
- IDs are permanent and must not expose private details.

## Source files

- Private source documents stay outside `public/` and are referenced by an internal source ID.
- Source ID format: `src-<yyyy>-<short-name>-<nn>`.
- Never copy counseling or interview-prep filenames into public metadata.

## Media files

- Format: `<entry-slug>--<kind>-<nn>--<yyyy-or-undated>.<ext>`.
- Examples: `kirigami-environmental-robot--prototype-03--2025.webp` and `chinese-painting--detail-02--undated.jpg`.
- Use sequential numbers for editorial order, not timestamps from a device.
- Derivatives add dimensions or purpose: `--1600w`, `--800w`, `--thumb`, `--poster`.
- Never include a person's full name, school, precise location, phone number, or device ID in a filename.

## Documents and versions

- Private working file: `<slug>--v<major>.<minor>--<yyyy-mm-dd>--draft.<ext>`.
- Approved public file: `<slug>--v<major>.<minor>--<yyyy-mm-dd>.<ext>`.
- Published replacement increments the version; do not overwrite an approved historical file silently.
- Use `working-paper`, `under-review`, or `published` in visible metadata, not as an unsupported filename claim.

## Tags

- Store tags as lowercase singular verbs without `#`.
- Render `#` in the interface.
- Do not create near-duplicates such as `making` beside `make` or `testing` beside `test`.
- Most contexts show zero to three tags; no quota is enforced.

## Dates

- Store an ISO-compatible value plus a precision: `day`, `month`, `year`, `range`, `approximate`, or `unknown`.
- Do not invent a day or month to satisfy a technical schema.
- Public display may be less precise than the stored verified date for privacy.

## Alternative text and captions

- Alt text describes what is needed to understand the image in context, not every visible detail.
- Captions provide editorial context, provenance, or a specific observation and should not duplicate alt text.
- Decorative images are explicitly marked decorative and receive empty alt text.
