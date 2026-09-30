import { z } from "zod";

export const entryKinds = [
  "feature",
  "collection",
  "note",
  "object",
  "document",
  "listing",
] as const;

export const tagVocabulary = [
  "notice",
  "question",
  "trace",
  "make",
  "test",
  "shape",
  "argue",
  "gather",
  "move",
  "play",
  "listen",
  "frame",
  "fold",
  "measure",
  "revise",
  "wander",
  "compare",
  "fail",
] as const;

const idSchema = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const publicPath = z
  .string()
  .startsWith("/")
  .refine((path) => !path.includes(".."), "Paths cannot traverse directories");

export const dateSchema = z
  .object({
    value: z.string().min(1),
    precision: z.enum([
      "day",
      "month",
      "year",
      "range",
      "approximate",
      "unknown",
    ]),
  })
  .strict();

const personSchema = z
  .object({
    role: z.string().min(1),
    name: z.string().min(1).optional(),
    consent: z.enum(["confirmed", "pending", "not-required"]),
  })
  .strict();

export const mediaAssetSchema = z
  .object({
    id: idSchema,
    type: z.enum(["image", "audio", "video"]),
    src: publicPath.refine((path) => path.startsWith("/media/"), {
      message: "Media must be stored below /media/",
    }),
    source: z.string().min(1),
    creatorOwner: z.string().min(1),
    reusePermission: z.enum(["confirmed", "pending", "not-required"]),
    captureDate: dateSchema.optional(),
    publicLocation: z.string().min(1).optional(),
    people: z.array(personSchema).default([]),
    exifReviewed: z.boolean(),
    decorative: z.boolean().default(false),
    altText: z.string().min(1).optional(),
    caption: z.string().min(1).optional(),
    credit: z.string().min(1).optional(),
    width: z.number().int().positive().optional(),
    height: z.number().int().positive().optional(),
    durationSeconds: z.number().positive().optional(),
    focalPoint: z.string().min(1).optional(),
    status: z.enum(["private", "candidate", "approved", "retired"]),
    replacementOf: idSchema.optional(),
  })
  .strict()
  .superRefine((asset, context) => {
    if (!asset.decorative && !asset.altText) {
      context.addIssue({
        code: "custom",
        message: "Informative media requires alt text",
        path: ["altText"],
      });
    }
    if (asset.type === "image" && (!asset.width || !asset.height)) {
      context.addIssue({
        code: "custom",
        message: "Images require width and height",
        path: ["width"],
      });
    }
  });

export const documentAssetSchema = z
  .object({
    id: idSchema,
    src: publicPath.refine((path) => path.startsWith("/documents/"), {
      message: "Documents must be stored below /documents/",
    }),
    title: z.string().min(1),
    authors: z.array(z.string().min(1)).min(1),
    date: dateSchema,
    publicationStatus: z.enum([
      "working",
      "under-review",
      "published",
      "internal",
    ]),
    version: z.string().min(1),
    description: z.string().min(1),
    collaboratorPermission: z.enum(["confirmed", "pending", "not-required"]),
    commentsReviewed: z.boolean(),
    trackedChangesReviewed: z.boolean(),
    signaturesReviewed: z.boolean(),
    contactDetailsReviewed: z.boolean(),
    metadataReviewed: z.boolean(),
    accessibilityReviewed: z.boolean(),
    htmlSummary: publicPath.optional(),
    checksum: z
      .string()
      .regex(/^[a-f0-9]{64}$/)
      .optional(),
  })
  .strict();

const relationshipSchema = z
  .object({
    targetId: idSchema,
    kind: z.enum([
      "became",
      "informed",
      "rhymes-with",
      "contrasts-with",
      "uses",
      "continued-in",
      "people-overlap",
    ]),
    rationale: z.string().min(1),
  })
  .strict();

const privacyReviewSchema = z
  .object({
    decision: z.enum(["pending", "approved", "rejected"]),
    reviewer: z.string().min(1).optional(),
    date: z.string().date().optional(),
    notes: z.string().min(1).optional(),
  })
  .strict();

export const archiveEntrySchema = z
  .object({
    id: idSchema,
    type: z.enum(entryKinds),
    slug: idSchema,
    title: z.string().min(1),
    dek: z.string().min(1).optional(),
    status: z.enum([
      "seed",
      "draft",
      "fact-check",
      "permission-review",
      "approved",
      "published",
      "retired",
    ]),
    visibility: z.enum(["private", "candidate", "public"]),
    sourceRefs: z.array(z.string().min(1)).min(1),
    factState: z.enum([
      "verified",
      "partially-verified",
      "unverified",
      "conflicted",
    ]),
    date: dateSchema.optional(),
    tags: z.array(z.enum(tagVocabulary)).max(3),
    relationships: z.array(relationshipSchema).default([]),
    people: z.array(personSchema).default([]),
    media: z.array(mediaAssetSchema).default([]),
    documents: z.array(documentAssetSchema).default([]),
    privacyReview: privacyReviewSchema,
    updatedAt: z.string().date(),
  })
  .strict()
  .superRefine((entry, context) => {
    if (entry.visibility === "public" && entry.status !== "published") {
      context.addIssue({
        code: "custom",
        message: "Public entries must have published status",
        path: ["status"],
      });
    }
    if (
      entry.visibility !== "private" &&
      entry.privacyReview.decision !== "approved"
    ) {
      context.addIssue({
        code: "custom",
        message: "Candidate and public entries require privacy approval",
        path: ["privacyReview", "decision"],
      });
    }
  });

export type ArchiveEntry = z.infer<typeof archiveEntrySchema>;
export type MediaAsset = z.infer<typeof mediaAssetSchema>;
export type DocumentAsset = z.infer<typeof documentAssetSchema>;
