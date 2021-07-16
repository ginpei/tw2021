import { z } from "zod";
import { createDataRecord, dataRecordSchema } from "../gp/data/DataRecord";

export type User = z.infer<typeof userSchema>;

export const userSchema = dataRecordSchema.extend({
  bio: z.string(),
  followeeIds: z.array(z.string()),
  followerIds: z.array(z.string()),
  name: z.string(),
  screenName: z.string(),
  url: z.string(),
});

export function createUser(initial: Partial<User> = {}): User {
  return {
    ...createDataRecord(initial),
    bio: initial?.bio ?? "",
    followeeIds: initial?.followeeIds ?? [],
    followerIds: initial?.followerIds ?? [],
    name: initial?.name ?? "",
    screenName: initial?.screenName ?? "",
    url: initial?.url ?? "",
  };
}

export function isUserFollowee(user: User, targetId: string): boolean {
  return user.followeeIds.includes(targetId);
}

export function isUserFollower(user: User, targetId: string): boolean {
  return user.followerIds.includes(targetId);
}
