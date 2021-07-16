import { z } from "zod";
import { createPureMessage, pureMessageSchema } from "../data/message";
import { createSession, sessionSchema } from "../data/session";
import { createUser, userSchema } from "../data/user";

export type DatabaseContent = z.infer<typeof databaseContentSchema>;

export const databaseContentSchema = z.object({
  messages: z.record(pureMessageSchema),
  sessions: z.record(z.union([sessionSchema, z.undefined()])),
  users: z.record(userSchema),
});

export function createDatabaseContent(
  initial: Partial<DatabaseContent> = {}
): DatabaseContent {
  const messages = Object.fromEntries(
    Object.entries(initial.messages ?? {}).map(([k, v]) => [
      k,
      createPureMessage(v),
    ])
  );

  const sessions = Object.fromEntries(
    Object.entries(initial.sessions ?? {}).map(([k, v]) => [
      k,
      createSession(v),
    ])
  );
  const users = Object.fromEntries(
    Object.entries(initial.users ?? {}).map(([k, v]) => [k, createUser(v)])
  );

  return {
    messages,
    sessions,
    users,
  };
}
