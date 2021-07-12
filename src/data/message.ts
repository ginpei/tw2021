import { z } from "zod";
import { createDataRecord, dataRecordSchema } from "../gp/data/DataRecord";
import { userSchema } from "./user";

/**
 * Core data of message.
 * Mostly you would use `MessageResolved` instead.
 */
export type PureMessage = z.infer<typeof pureMessageSchema>;

export type PureMessageHandler = (message: PureMessage) => void;

/**
 * `PureMessage` with `User` data.
 * Use this instead of `PureMessage` directly.
 */
export type Message = z.infer<typeof messageSchema>;

export const pureMessageSchema = dataRecordSchema.extend({
  body: z.string(),
  userId: z.string(),
});

export const messageSchema = pureMessageSchema.extend({
  user: userSchema.nullable(),
});

export function createMessage(initial: Partial<PureMessage> = {}): PureMessage {
  return {
    ...createDataRecord(initial),
    body: initial.body ?? "",
    userId: initial.userId ?? "",
  };
}
