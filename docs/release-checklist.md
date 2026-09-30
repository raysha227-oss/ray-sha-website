# Verification and release procedure

## Local development

1. Install Node.js 22 or later and pnpm 11.
2. Run `pnpm install`.
3. Copy `.env.example` to `.env.local` only when an approved value is needed.
4. Run `pnpm dev` and use the local address printed by the command.

## Required verification

Run `pnpm verify`. It checks formatting, lint rules, strict TypeScript, content contracts, focused tests, and the production build. A stage is not complete while any command fails.

Also inspect the homepage and error states at representative phone and desktop widths. Confirm keyboard focus, text enlargement, touch targets, reduced motion, clipping, overflow, and missing assets.

## Release control

Do not publish from Stage 1. Publication is permitted only after the private release candidate has completed accessibility, privacy, content, document, media, and browser review and Ray has explicitly approved launch.

For an approved release:

1. Confirm the exact commit and production environment values.
2. Run `pnpm verify` from a clean checkout.
3. Confirm that robots metadata, the canonical origin, and public contact behavior match the approved release.
4. Publish the verified build without content changes.
5. Check the live homepage, routes, downloads, error page, metadata, and mobile layout.
6. Record the release identifier and any follow-up work separately.
