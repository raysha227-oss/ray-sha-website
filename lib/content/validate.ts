import { archiveEntrySchema, type ArchiveEntry } from "./schema.ts";

export function validateEntries(entries: readonly unknown[]): ArchiveEntry[] {
  const parsed = entries.map((entry) => archiveEntrySchema.parse(entry));
  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const entry of parsed) {
    if (ids.has(entry.id)) {
      throw new Error(`Duplicate content id: ${entry.id}`);
    }
    if (slugs.has(entry.slug)) {
      throw new Error(`Duplicate content slug: ${entry.slug}`);
    }
    ids.add(entry.id);
    slugs.add(entry.slug);
  }

  for (const entry of parsed) {
    for (const relationship of entry.relationships) {
      if (!ids.has(relationship.targetId)) {
        throw new Error(
          `Unknown relationship target ${relationship.targetId} in ${entry.id}`,
        );
      }
    }
  }

  return parsed;
}
