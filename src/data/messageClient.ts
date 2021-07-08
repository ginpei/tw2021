import { sleep } from "../misc/util";
import dummyMessageDatabase from "../_fixture/messageData.dummy";
import { Message } from "./message";
import { MessageResolved } from "./messageResolved";

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

export async function fetchRecentGlobalMessage(): Promise<MessageResolved[]> {
  const path = "/api/messages/list";
  const res = await fetch(path);
  const data = await res.json();
  const messages = data.messages as MessageResolved[];
  return messages;
}
