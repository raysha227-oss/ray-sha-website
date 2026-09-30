# Ray Sha personal archive

This directory contains the Stage 1 production foundation for Ray Sha's personal website. It establishes strict TypeScript, validated content and asset contracts, metadata and error defaults, a project-specific favicon, focused tests, and documented development and release procedures. Stage 2 will build the visual system; later stages will add reviewed content and interactions.

## Commands

- `pnpm dev` starts local development.
- `pnpm format` formats project-owned files.
- `pnpm lint` checks code quality.
- `pnpm typecheck` checks strict TypeScript.
- `pnpm content:check` validates every public content record.
- `pnpm test` runs focused contract tests.
- `pnpm build` creates the production bundle.
- `pnpm verify` runs the complete Stage 1 gate.

## Documentation

- [Architecture](docs/architecture.md)
- [Content and media workflow](docs/content-workflow.md)
- [Verification and release procedure](docs/release-checklist.md)

The planning documents remain one directory above this project. The `Allowed info` directory is reference material and is never copied into the public build automatically.
