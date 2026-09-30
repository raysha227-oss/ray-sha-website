import { entries } from "../content/entries.ts";
import { validateEntries } from "../lib/content/validate.ts";

const validated = validateEntries(entries);

console.log(`Validated ${validated.length} public archive entries.`);
