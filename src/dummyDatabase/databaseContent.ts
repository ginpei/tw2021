import { z } from "zod";
import { pureMessageSchema } from "../data/pureMessage";
import { sessionSchema } from "../data/session";
import { userSchema } from "../data/user";

export type DatabaseContent = z.infer<typeof databaseContentSchema>;

export const databaseContentSchema = z.object({
  messages: z.record(pureMessageSchema),
  sessions: z.record(z.union([sessionSchema, z.undefined()])),
  users: z.record(userSchema),
});

export function createDatabaseContent(
  initial: Partial<DatabaseContent> = {}
): DatabaseContent {
  return {
    messages: initial.messages ?? {},
    sessions: initial.sessions ?? {},
    users: initial.users ?? {},
  };
}
