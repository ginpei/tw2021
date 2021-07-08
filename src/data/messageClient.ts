import { z } from "zod";
import { sleep } from "../misc/util";
import dummyMessageDatabase from "../_fixture/messageData.dummy";
import { AppServerError } from "./appServerError";
import { Message } from "./message";
import { MessageResolved, messageResolvedSchema } from "./messageResolved";

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
  const rawData = await res.json();

  if (!res.ok) {
    throw new AppServerError(rawData);
  }

  const schema = z.object({
    messages: z.array(messageResolvedSchema),
  });
  const data = schema.parse(rawData);

  return data.messages;
}

export async function fetchRecentGlobalMessage(): Promise<MessageResolved[]> {
  const path = "/api/messages/global";
  const res = await fetch(path);
  const rawData = await res.json();

  const schema = z.object({
    messages: z.array(messageResolvedSchema),
  });
  const data = schema.parse(rawData);

  return data.messages;
}
