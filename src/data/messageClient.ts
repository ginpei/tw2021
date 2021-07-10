import { z } from "zod";
import { sleep } from "../misc/util";
import dummyMessageDatabase from "../_fixture/messageData.dummy";
import { AppServerError } from "./appServerError";
import { Message } from "./message";
import { MessageResolved, messageResolvedSchema } from "./messageResolved";

const database: Message[] = dummyMessageDatabase;

export async function fetchMessage(
  signal: AbortSignal,
  id: string
): Promise<MessageResolved | null> {
  const url = `/api/messages/${encodeURIComponent(id)}`;
  const res = await fetch(url, { signal });
  const rawData = await res.json();

  if (!res.ok) {
    throw new AppServerError(rawData);
  }

  const parsed = z
    .object({ message: messageResolvedSchema })
    .safeParse(rawData);
  if (!parsed.success) {
    throw new AppServerError("Server returns invalid data");
  }

  return parsed.data.message;
}

export async function fetchRecentUserMessages(
  signal: AbortSignal,
  userId: string,
  offset: number,
  limit: number
): Promise<Message[]> {
  const url = new URL(window.location.href);
  url.pathname = "/api/messages/user";
  url.searchParams.set("userId", userId);
  url.searchParams.set("offset", String(offset));
  url.searchParams.set("limit", String(limit));
  const res = await fetch(url.toString(), { signal });
  const rawData = await res.json();

  if (!res.ok) {
    throw new AppServerError(rawData);
  }

  const parsed = z
    .object({
      messages: z.array(messageResolvedSchema),
    })
    .safeParse(rawData);
  if (!parsed.success) {
    throw new AppServerError("Server returns invalid data");
  }

  return parsed.data.messages;
}

export async function fetchRecentGlobalMessage(
  signal: AbortSignal
): Promise<MessageResolved[]> {
  const path = "/api/messages/global";
  const res = await fetch(path, { signal });
  const rawData = await res.json();

  const parsed = z
    .object({
      messages: z.array(messageResolvedSchema),
    })
    .safeParse(rawData);
  if (!parsed.success) {
    throw new AppServerError("Server returns invalid data");
  }

  return parsed.data.messages;
}
