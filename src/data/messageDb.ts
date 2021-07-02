import { sleep } from "../misc/util";
import { Message } from "./message";
import { dummyMessageDatabase } from "./messageDb.dummy";

const database: Message[] = dummyMessageDatabase;

export async function fetchRecentMessageOf(userId: string): Promise<Message[]> {
  await sleep(500);
  const messages = database
    .filter((v) => v.userId === userId)
    .sort((v, u) => u.createdAt - v.createdAt);
  return messages;
}
