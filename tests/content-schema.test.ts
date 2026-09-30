import assert from "node:assert/strict";
import test from "node:test";
import { archiveEntrySchema } from "../lib/content/schema.ts";
import { validateEntries } from "../lib/content/validate.ts";

const validEntry = {
  id: "fold-test",
  type: "note",
  slug: "fold-test",
  title: "Fold test",
  dek: "A small verified note used to exercise the content contract.",
  status: "approved",
  visibility: "candidate",
  sourceRefs: ["private-source-001"],
  factState: "verified",
  tags: ["make", "test"],
  relationships: [],
  people: [],
  media: [],
  documents: [],
  privacyReview: {
    decision: "approved",
    reviewer: "Ray",
    date: "2026-09-25",
  },
  updatedAt: "2026-09-25",
} as const;

test("accepts a valid candidate entry", () => {
  assert.equal(archiveEntrySchema.parse(validEntry).slug, "fold-test");
});

test("rejects an unapproved tag", () => {
  assert.throws(() =>
    archiveEntrySchema.parse({ ...validEntry, tags: ["achievement"] }),
  );
});

test("rejects public content that is not published", () => {
  assert.throws(() =>
    archiveEntrySchema.parse({ ...validEntry, visibility: "public" }),
  );
});

test("rejects duplicate ids and slugs", () => {
  assert.throws(() => validateEntries([validEntry, validEntry]), /Duplicate/);
});

test("rejects a relationship to a missing entry", () => {
  assert.throws(
    () =>
      validateEntries([
        {
          ...validEntry,
          relationships: [
            {
              targetId: "missing-entry",
              kind: "rhymes-with",
              rationale: "A visual echo that will be reviewed editorially.",
            },
          ],
        },
      ]),
    /Unknown relationship target/,
  );
});
