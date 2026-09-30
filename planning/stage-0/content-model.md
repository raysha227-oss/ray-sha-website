# Content model

## Entry types

### Feature

A substantial narrative about one project or line of inquiry. It can combine prose, figures, media, objects, documents, and related notes. Examples: kirigami environmental robot, pesticide field research, environmental discounting.

### Collection

A deliberately arranged body of visual or related work where sequence matters more than a single argument. Examples: Chinese paintings, photographs, Said Out Loud.

### Note

A small observation, question, failure, image, or fragment. A note may be three lines, a photograph with a caption, or a longer unfinished inquiry.

### Object

A specific physical or digital artifact shown in context: a failed fold, sensor array, cue sheet, prep page, camera rig, brush, graph draft, or energy-audit sheet.

### Document

A report, paper, presentation, transcript, or CV with title, date, status, summary, rights, privacy review, and version metadata. A document is never implied to be published unless publication is verified.

### Listing

An understated factual record used mainly in About or the index: activity, role, recognition, date range, or selected work link. Listings must not become the site's organizing structure.

## Required core fields

Every entry has:

- `id`: permanent lowercase identifier, never reused.
- `type`: one of the six entry types.
- `slug`: route-safe public slug.
- `title`: verified or clearly marked working title.
- `dek`: optional concise description; never generic promotional copy.
- `status`: `seed`, `draft`, `fact-check`, `permission-review`, `approved`, `published`, or `retired`.
- `visibility`: `private`, `candidate`, or `public`.
- `sourceRefs`: references to private source records, never public file paths.
- `factState`: `verified`, `partially-verified`, `unverified`, or `conflicted`.
- `date`: exact, month, year, range, approximate, or unknown with an explicit precision field.
- `tags`: zero to three loose connective tags in most contexts.
- `relationships`: typed links to other entries with a short editorial rationale.
- `people`: consent-aware roles or names; private by default.
- `media`: ordered media references with rights and accessibility status.
- `documents`: linked document records.
- `privacyReview`: reviewer, decision, date, and notes.
- `updatedAt`: ISO date for the planning record.

## Media fields

Every publishable media record requires:

- stable `id`, type, file path, and source/provenance;
- creator/owner and reuse permission;
- capture date precision and public location precision;
- identities of visible or audible people and consent state;
- EXIF/location metadata review;
- meaningful alt text, decorative status, caption, and credit;
- width, height, duration when applicable, and an intended crop/focal point;
- publication status and replacement history.

## Document fields

Every downloadable document requires:

- title, authorship, date, status, version, and short description;
- publication status (`working`, `under-review`, `published`, or `internal`);
- permission from collaborators where applicable;
- comments/tracked-changes/signature/contact/metadata review;
- accessible file review and, when useful, an HTML summary;
- checksum or immutable version identifier once approved.

## Relationships

Relationship kinds are intentionally descriptive rather than categorical:

- `became` — one line of work developed into another;
- `informed` — an idea or method affected another entry;
- `rhymes-with` — a visual or conceptual echo;
- `contrasts-with` — a productive difference;
- `uses` — an object or document used by a feature;
- `continued-in` — a question or activity continued elsewhere;
- `people-overlap` — collaborators overlap, published only when safe.

## Publishing state machine

`seed → draft → fact-check → permission-review → approved → published`

An entry may move backward at any point. `retired` preserves the record without keeping it public. Only `approved` entries may enter a release candidate. Only the exact approved release candidate may become `published`.

## Tag vocabulary

Preferred recurring tags: `notice`, `question`, `trace`, `make`, `test`, `shape`, `argue`, `gather`, `move`, `play`.

Occasional tags: `listen`, `frame`, `fold`, `measure`, `revise`, `wander`, `compare`, `fail`.

Tags are stored without `#` and rendered with it. New tags require an editorial reason; synonyms should be consolidated. Tags do not create top-level pages in the initial build.
