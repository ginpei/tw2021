import { createDataRecord, DataRecord } from "../gp/data/DataRecord";

/**
 * Core data of message.
 * Mostly you would use `MessageResolved` instead.
 */
export interface Message extends DataRecord {
  body: string;
  userId: string;
}

export function createMessage(initial: Partial<Message> = {}): Message {
  return {
    ...createDataRecord(initial),
    body: initial.body ?? "",
    userId: initial.userId ?? "",
  };
}
