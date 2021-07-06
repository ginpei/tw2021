import { sleep } from "../misc/util";
import { Message } from "./message";
import dummyMessageDatabase from "./messageData.dummy.json";

const database: Message[] = dummyMessageDatabase;

export async function fetchMessage(id: string): Promise<Message | null> {
  await sleep(500);
  const message = database.find((v) => v.id === id) ?? null;
  return message;
}

export async function fetchRecentMessageOf(userId: string): Promise<Message[]> {
  await sleep(500);
  const messages = database
    .filter((v) => v.userId === userId)
    .sort((v, u) => u.createdAt - v.createdAt);
  return messages;
}

export async function fetchRecentGlobalMessage(): Promise<Message[]> {
  await sleep(500);
  const messages = database
    .sort((v, u) => u.createdAt - v.createdAt)
    .slice(0, 30);
  return messages;
}
