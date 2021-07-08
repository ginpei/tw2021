import { z } from "zod";
import { createDataRecord, dataRecordSchema } from "../gp/data/DataRecord";

export type User = z.infer<typeof userSchema>;

export const userSchema = dataRecordSchema.extend({
  name: z.string(),
  screenName: z.string(),
});

export function createUser(initial: Partial<User> = {}): User {
  return {
    ...createDataRecord(initial),
    name: initial?.name ?? "",
    screenName: initial?.screenName ?? "",
  };
}
