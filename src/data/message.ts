import { z } from "zod";
import { createDataRecord, dataRecordSchema } from "../gp/data/DataRecord";

/**
 * Core data of message.
 * Mostly you would use `MessageResolved` instead.
 */
export type Message = z.infer<typeof messageSchema>;

export type MessageHandler = (message: Message) => void;

export const messageSchema = dataRecordSchema.extend({
  body: z.string(),
  userId: z.string(),
});

export function createMessage(initial: Partial<Message> = {}): Message {
  return {
    ...createDataRecord(initial),
    body: initial.body ?? "",
    userId: initial.userId ?? "",
  };
}
