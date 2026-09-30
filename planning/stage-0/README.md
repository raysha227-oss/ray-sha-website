# Stage 0 — Requirements and content architecture

Status: **ready for Ray's public-scope approval**

Stage 0 defines the archive before implementation. It establishes what the site will contain, how entries relate without becoming resume categories, what evidence is available, and what must stay private until explicitly cleared.

## Decisions now fixed

- The site is a living editorial archive, not a resume or admissions landing page.
- Primary navigation is `RAY SHA / INDEX / WORK / NOTES / ABOUT`.
- The homepage begins with representative work and mixes research, making, art, speaking, and ordinary life.
- The canonical content types are `feature`, `collection`, `note`, `object`, `document`, and `listing`.
- Loose tags connect entries but never become departments or primary navigation.
- Every factual claim carries a verification state and source reference.
- Every media item carries privacy, permission, and accessibility fields before it can be published.
- Missing information stays in private planning records; unresolved brackets never ship publicly.
- The public identity is `Ray Sha`.

## Stage 0 package

- [requirements.md](requirements.md) — product, editorial, accessibility, privacy, performance, and release requirements.
- [sitemap-and-journeys.md](sitemap-and-journeys.md) — routes, navigation, visitor journeys, and homepage sequence.
- [content-model.md](content-model.md) — entry types, required fields, relationships, and publishing states.
- [content-inventory.json](content-inventory.json) — initial archive inventory from the supplied source documents.
- [privacy-and-permissions.md](privacy-and-permissions.md) — public-scope defaults and explicit approval register.
- [naming-conventions.md](naming-conventions.md) — stable conventions for routes, files, media, tags, and document versions.
- [content-intake-template.md](content-intake-template.md) — the form used to turn later uploads into publishable archive entries.
- [gate-checklist.md](gate-checklist.md) — the approval gate between Stage 0 and Stage 1.

## Source boundary

The inventory uses only the supplied website brief, staged build plan, and documents in the `Allowed info` folder. “Allowed info” means usable for planning; it does **not** automatically mean approved for public publication. Confidential counseling material is treated as a private source even when it supports a factual claim.

## Next decision

Before Stage 1 begins, Ray should approve the choices in `gate-checklist.md`, especially public name, location/school references, recognitions, unpublished research, contact method, and third-party media.
