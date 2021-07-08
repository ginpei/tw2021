import { z } from "zod";
import { messageSchema } from "./message";
import { userSchema } from "./user";

/**
 * `Message` with `User` data.
 * Use this instead of `Message` directly.
 */
export type MessageResolved = z.infer<typeof messageResolvedSchema>;

export const messageResolvedSchema = messageSchema.extend({
  user: userSchema.nullable(),
});
