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

export async function fetchRecentUserMessages(
  userId: string
): Promise<Message[]> {
  const url = new URL(window.location.href);
  url.pathname = "/api/messages/user";
  url.searchParams.set("userId", userId);
  url.searchParams.set("offset", "0");
  url.searchParams.set("limit", "30");
  const res = await fetch(url.toString());
  const data = await res.json();
  const messages = data.messages as MessageResolved[];
  return messages;
}

export async function fetchRecentGlobalMessage(): Promise<MessageResolved[]> {
  const path = "/api/messages/global";
  const res = await fetch(path);
  const data = await res.json();
  const messages = data.messages as MessageResolved[];
  return messages;
}
