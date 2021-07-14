import { useEffect, useState } from "react";
import { noop } from "../misc/misc";
import { Message } from "./message";
import {
  fetchMessage,
  fetchRecentGlobalMessage,
  fetchRecentUserMessages,
} from "./messageClient";

export function useMessage(
  userId: string | undefined,
  messageId: string | undefined
): [Message | null | undefined, Error | null] {
  const [message, setMessage] = useState<Message | null | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setMessage(undefined);

    if (!userId || !messageId) {
      return noop;
    }

    const abortController = new AbortController();
    fetchMessage(abortController.signal, messageId)
      .then((newMessage) => setMessage(newMessage))
      .catch((v) => setError(v));
    return () => abortController.abort();
  }, [userId, messageId]);

  return [message, error];
}

export function useUserRecentMessages(
  userId: string | undefined,
  limit: number
): [Message[] | undefined, Error | null] {
  const [offset] = useState(0);
  const [messages, setMessages] = useState<Message[] | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setMessages(undefined);

    if (!userId) {
      return noop;
    }

    const abortController = new AbortController();
    fetchRecentUserMessages(abortController.signal, userId, offset, limit)
      .then((newMessages) => {
        setMessages(newMessages);
      })
      .catch((v) => setError(v));
    return () => abortController.abort();
  }, [limit, offset, userId]);

  return [messages, error];
}

export function useGlobalTimeline(): [Message[] | undefined, Error | null] {
  const [messages, setMessages] = useState<Message[] | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setMessages(undefined);

    const abortController = new AbortController();
    fetchRecentGlobalMessage(abortController.signal)
      .then((newMessages) => setMessages(newMessages))
      .catch((v) => setError(v));
    return () => abortController.abort();
  }, []);

  return [messages, error];
}
