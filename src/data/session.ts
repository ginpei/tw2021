import { z } from "zod";
import { DataRecord, dataRecordSchema } from "../gp/data/DataRecord";
import { generateId } from "../misc/util";

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
