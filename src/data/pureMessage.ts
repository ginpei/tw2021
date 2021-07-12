import { z } from "zod";
import { createDataRecord, dataRecordSchema } from "../gp/data/DataRecord";

/**
 * Core data of message.
 * Mostly you would use `MessageResolved` instead.
 */
export type PureMessage = z.infer<typeof pureMessageSchema>;

export type PureMessageHandler = (message: PureMessage) => void;

export const pureMessageSchema = dataRecordSchema.extend({
  body: z.string(),
  userId: z.string(),
});

export function createMessage(initial: Partial<PureMessage> = {}): PureMessage {
  return {
    ...createDataRecord(initial),
    body: initial.body ?? "",
    userId: initial.userId ?? "",
  };
}
