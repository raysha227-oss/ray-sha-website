# Content and media workflow

## Add verified content

1. Confirm that the title, dates, roles, claims, captions, and publication status are approved for public use.
2. Add the entry to `content/entries.ts` using the schema in `lib/content/schema.ts`.
3. Put images, audio, or video below `public/media/`; put downloadable files below `public/documents/`.
4. Use lowercase kebab-case names. Keep the route slug stable after publication.
5. Give every informative image meaningful alt text, explicit pixel dimensions, and a caption when context is not already in nearby prose.
6. Mark unpublished documents accurately, for example `working-paper`; never imply publication.
7. Run `pnpm content:check`, then `pnpm verify` before review.

## Keep private material out of the build

Draft language, unresolved placeholders, contact details, precise locations, permissions, and source documents awaiting privacy review stay outside `content/` and `public/`. The adjacent Allowed info directory is reference material; it is not copied into the site automatically.

Before adding a downloadable document, inspect comments, revision history, signatures, addresses, hidden metadata, and embedded files. Before adding photographs, confirm permission for identifiable people and remove location/device metadata when appropriate.

## Media conventions

- Files use lowercase kebab-case names.
- Media paths begin with `/media/`; document paths begin with `/documents/`.
- Images are exported near their rendered size and retain enough resolution for high-density screens.
- Do not invent camera settings, dates, credits, or technical details.
- Unresolved placeholders are allowed only in private source notes outside the production collection.
