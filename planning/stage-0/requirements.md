# Website requirements

## Product intent

The website should let a visitor meet one person across different kinds of attention: noticing, questioning, making, testing, arguing, gathering, moving, and playing. It should feel like a personal archive, field notebook, sketchbook, and small independent magazine arranged with care but still open to revision.

The site must not present Ray as a list of institutional categories, a generic high-achieving student, a startup founder, or an adult narrating adolescence from a distance.

## Audience and primary task

The primary audience is a curious reader who wants to understand how Ray thinks and what he actually does. Within the first viewport, the reader should see representative work rather than a biography or conventional hero. From there, the reader can follow a major feature, browse the full index, read short notes, or find a concise factual introduction.

## Editorial requirements

1. Use first-person writing only when it is grounded in Ray's verified words or approved revision.
2. Prefer objects, moments, measurements, images, people, and unresolved questions over trait claims.
3. Do not invent dialogue, emotions, scientific facts, dates, camera settings, roles, results, or publication status.
4. Keep reflection brief. A piece may end with evidence, a caption, a failed attempt, or an unanswered question.
5. Major projects may unfold narratively; smaller interests should remain small.
6. Do not make every entry use the same template or end with a lesson.
7. Use square-bracket requests only in private planning. A public build must contain no unresolved placeholders.
8. Keep `WORKING PAPER`, `UNDER REVIEW`, and similar statuses explicit and accurate.
9. Treat people as part of the story without publishing their names, likenesses, or quotations without permission.
10. Use tags as marginal connective tissue, not folders, filters, or achievement labels.

## Functional scope

Stage 1 and later implementation must support:

- a mixed editorial homepage;
- a complete index of publishable entries;
- substantial work pages with figures, captions, documents, and related entries;
- a Notes stream that supports text, image, and mixed-media fragments;
- a short About page with understated factual links;
- relationships between entries for the later `connections` interaction;
- accessible image, audio, video, and downloadable-document metadata;
- graceful missing-media handling in private preview only;
- stable, human-readable routes and metadata.

No database, CMS, account system, public comments, analytics, or contact form is required at this stage.

## Accessibility requirements

- Semantic landmarks and heading order.
- Keyboard-operable navigation and interactions.
- Visible focus treatment and minimum 44 by 44 CSS pixel touch targets where practical.
- Body text at least 16px by default and usable at 200% text enlargement.
- Meaningful alternative text or an explicit decorative designation for every image.
- Captions and transcripts for meaningful audio/video; no information conveyed by motion or color alone.
- Reduced-motion behavior for all nonessential animation.
- Sufficient contrast in normal, hover, focus, selected, and disabled states.
- No horizontal overflow or clipped content at supported phone, tablet, and desktop widths.

## Privacy and rights requirements

- Never publish private counseling responses, recommender/counselor identities, class designation, schedules, personal contact details, exact routine locations, private messages, signatures, or hidden document metadata.
- Obtain permission for identifiable third-party photographs, recordings, quotations, and unpublished collaborative work.
- Remove location and device metadata from public media where appropriate.
- Review every downloadable document for comments, revision history, names, email addresses, tracked changes, and embedded metadata.
- Keep source documents outside the public asset directory.
- Publish only the minimum precise location needed for the story.

## Performance requirements

- Prefer static or server-rendered content and progressive enhancement.
- Use client-side JavaScript only for behavior that requires it.
- Reserve image dimensions to avoid layout shift.
- Serve responsive, compressed media and lazy-load content below the initial viewport.
- Keep fonts and motion restrained; the reading experience must remain usable on a mid-range phone and ordinary mobile connection.
- The production build must contain no development-only content, secrets, source documents, or unresolved placeholders.

## Release requirements

Stage 0 authorizes planning only. Later release requires factual review, media permission review, accessibility review, privacy review, a clean production build, a private release candidate, and Ray's explicit approval of that exact candidate before public launch.
