import { z } from "zod";
import { DataRecord, dataRecordSchema } from "../gp/data/DataRecord";

export type Session = z.infer<typeof sessionSchema>;

export const sessionSchema = dataRecordSchema.extend({
  userId: z.string(),
});

export function createSession(initial: Partial<Session> = {}): Session {
  const id = generateId();
  const createdAt = Date.now();
  return {
    createdAt,
    id,
    updatedAt: createdAt,
    userId: initial.userId ?? "",
  };
}

function generateId() {
  return Math.random().toFixed(32).slice(2);
}
