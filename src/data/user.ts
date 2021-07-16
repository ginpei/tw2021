import { z } from "zod";
import { createDataRecord, dataRecordSchema } from "../gp/data/DataRecord";

export type User = z.infer<typeof userSchema>;

export const userSchema = dataRecordSchema.extend({
  bio: z.string(),
  name: z.string(),
  screenName: z.string(),
  url: z.string(),
});

export function createUser(initial: Partial<User> = {}): User {
  return {
    ...createDataRecord(initial),
    bio: initial?.bio ?? "",
    name: initial?.name ?? "",
    screenName: initial?.screenName ?? "",
    url: initial?.url ?? "",
  };
}
