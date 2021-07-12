import { z } from "zod";
import { pureMessageSchema } from "./pureMessage";
import { userSchema } from "./user";

/**
 * `PureMessage` with `User` data.
 * Use this instead of `PureMessage` directly.
 */
export type Message = z.infer<typeof messageSchema>;

export const messageSchema = pureMessageSchema.extend({
  user: userSchema.nullable(),
});
