import { z } from "zod";
import { pureMessageSchema } from "./pureMessage";
import { userSchema } from "./user";

/**
 * `Message` with `User` data.
 * Use this instead of `Message` directly.
 */
export type MessageResolved = z.infer<typeof messageResolvedSchema>;

export const messageResolvedSchema = pureMessageSchema.extend({
  user: userSchema.nullable(),
});
