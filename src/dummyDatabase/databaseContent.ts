import { z } from "zod";
import { sessionSchema } from "../data/session";

export type DatabaseContent = z.infer<typeof databaseContentSchema>;

export const databaseContentSchema = z.object({
  sessions: z.record(sessionSchema),
});

export function createDatabaseContent(
  initial: Partial<DatabaseContent> = {}
): DatabaseContent {
  return {
    sessions: initial.sessions ?? {},
  };
}
