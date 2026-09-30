import { z } from "zod";

const environmentSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
});

export type Environment = z.infer<typeof environmentSchema>;

export function readEnvironment(
  source: Record<string, string | undefined> = process.env,
): Environment {
  return environmentSchema.parse(source);
}
