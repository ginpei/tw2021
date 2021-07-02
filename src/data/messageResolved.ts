import { Message } from "./message";
import { User } from "./user";

/**
 * `Message` with `User` data.
 * Use this instead of `Message` directly.
 */
export interface MessageResolved extends Message {
  user: User | null;
}
