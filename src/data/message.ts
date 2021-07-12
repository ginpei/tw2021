import { z } from "zod";
import { pureMessageSchema } from "./pureMessage";
import { userSchema } from "./user";

/**
 * `Message` with `User` data.
 * Use this instead of `Message` directly.
 */
export type Message = z.infer<typeof messageSchema>;

export const messageSchema = pureMessageSchema.extend({
  user: userSchema.nullable(),
});
