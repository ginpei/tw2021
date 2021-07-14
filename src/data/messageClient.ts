import { z } from "zod";
import { AppServerError } from "./appServerError";
import {
  createPureMessage,
  Message,
  messageSchema,
  PureMessage,
} from "./message";

export async function fetchMessage(
  signal: AbortSignal,
  id: string
): Promise<Message | null> {
  const url = `/api/messages/${encodeURIComponent(id)}`;
  const res = await fetch(url, { signal });
  const rawData = await res.json();

  if (!res.ok) {
    throw new AppServerError(rawData);
  }

  const parsed = z.object({ message: messageSchema }).safeParse(rawData);
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
      messages: z.array(messageSchema),
    })
    .safeParse(rawData);
  if (!parsed.success) {
    throw new AppServerError("Server returns invalid data");
  }

  return parsed.data.messages;
}

export async function fetchRecentGlobalMessage(
  signal: AbortSignal
): Promise<Message[]> {
  const path = "/api/messages/global";
  const res = await fetch(path, { signal });
  const rawData = await res.json();

  const parsed = z
    .object({
      messages: z.array(messageSchema),
    })
    .safeParse(rawData);
  if (!parsed.success) {
    throw new AppServerError("Server returns invalid data");
  }

  return parsed.data.messages;
}

export async function saveMessage(
  signal: AbortSignal | undefined,
  message: PureMessage
): Promise<void> {
  const pureMessage = createPureMessage(message);

  const url = "/api/messages/";
  const method = "POST";
  const body = JSON.stringify({ message: pureMessage });

  const res = await fetch(url.toString(), { body, method, signal });
  if (!res.ok) {
    throw await AppServerError.createFromResponse(res);
  }
}
