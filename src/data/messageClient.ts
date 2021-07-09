import { z } from "zod";
import { sleep } from "../misc/util";
import dummyMessageDatabase from "../_fixture/messageData.dummy";
import { AppServerError } from "./appServerError";
import { Message } from "./message";
import { MessageResolved, messageResolvedSchema } from "./messageResolved";

const database: Message[] = dummyMessageDatabase;

export async function fetchMessage(
  id: string
): Promise<MessageResolved | null> {
  const url = `/api/messages/${encodeURIComponent(id)}`;
  const res = await fetch(url);
  const rawData = await res.json();

  if (!res.ok) {
    throw new AppServerError(rawData);
  }

  const data = z.object({ message: messageResolvedSchema }).parse(rawData);
  return data.message;
}

export async function fetchRecentUserMessages(
  userId: string,
  offset: number,
  limit: number
): Promise<Message[]> {
  const url = new URL(window.location.href);
  url.pathname = "/api/messages/user";
  url.searchParams.set("userId", userId);
  url.searchParams.set("offset", String(offset));
  url.searchParams.set("limit", String(limit));
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
