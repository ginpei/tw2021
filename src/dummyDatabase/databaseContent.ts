import { z } from "zod";
import { sessionSchema } from "../data/session";
import { userSchema } from "../data/user";

export type DatabaseContent = z.infer<typeof databaseContentSchema>;

export const databaseContentSchema = z.object({
  sessions: z.record(z.union([sessionSchema, z.undefined()])),
  users: z.record(userSchema),
});

export function createDatabaseContent(
  initial: Partial<DatabaseContent> = {}
): DatabaseContent {
  return {
    sessions: initial.sessions ?? {},
    users: initial.users ?? {},
  };
}
