# Architecture

This project is the production foundation for Ray Sha's personal archive. It deliberately separates route composition, reusable presentation, interaction, verified content, media handling, and configuration so later stages can expand without rewriting the base.

## Directory map

- `app/` contains routes, global metadata, error states, and route-level composition.
- `components/layout/` contains shared page structure and navigation.
- `components/editorial/` is reserved for reusable figures, entries, captions, annotations, and document views introduced in Stage 2.
- `components/interactions/` isolates optional client-side behaviors, including the planned Connections overlay.
- `content/` contains public-ready content only. Drafts and unverified personal details do not enter the application bundle.
- `lib/content/` defines and validates the archive schema.
- `lib/media/` validates public asset paths and will contain image and document helpers.
- `lib/metadata/` owns site-wide metadata defaults.
- `public/media/` and `public/documents/` are the only public asset roots.
- `tests/` contains focused contract and behavior tests.
- `docs/` records architecture, content handling, and release procedures.

## Architectural rules

1. Routes compose data and components; they do not own reusable content parsing or media logic.
2. Content is data, not JSX. Every public entry passes the Zod schema before a production build.
3. Server-rendered, semantic HTML is the default. Client components are added only for real interaction.
4. Interactive code remains separate from editorial and layout components.
5. No database or CMS is introduced until the archive has a demonstrated need that static typed content cannot meet.
6. Missing personal details stay outside the public content collection. They are never guessed or shipped as placeholders.
7. The site remains non-indexable until the private release candidate is approved.

## Content model

The five entry kinds are `feature`, `collection`, `note`, `object`, and `document`. Tags are deliberately loose connective tissue rather than navigation categories. Each entry has a stable slug, concise summary, up to three approved tags, and optional validated media or document records.

## Build target

Vinext produces a Cloudflare-compatible worker bundle. The current hosting configuration declares no database or object-storage bindings.
