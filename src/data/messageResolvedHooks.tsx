import { useEffect, useState } from "react";
import {
  fetchMessage,
  fetchRecentGlobalMessage,
  fetchRecentUserMessages,
} from "./messageClient";
import { MessageResolved } from "./messageResolved";
import { resolveMessages } from "./messageResolvedData";

export function useMessage(
  userId: string | undefined,
  messageId: string | undefined
): [MessageResolved | null | undefined] {
  const [message, setMessage] = useState<MessageResolved | null | undefined>(
    undefined
  );

  useEffect(() => {
    setMessage(undefined);

    if (!userId || !messageId) {
      return;
    }

    fetchMessage(messageId)
      .then((rawMessage) => {
        return rawMessage ? resolveMessages([rawMessage]) : null;
      })
      .then((newMessages) => {
        setMessage(newMessages?.[0] ?? null);
      });
  }, [userId, messageId]);

  return [message];
}

export function useUserRecentMessages(
  userId: string | undefined
): [MessageResolved[] | undefined, Error | null] {
  const [messages, setMessages] = useState<MessageResolved[] | undefined>(
    undefined
  );
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setMessages(undefined);

    if (!userId) {
      return;
    }

    fetchRecentUserMessages(userId)
      .then((rawMessages) => {
        return resolveMessages(rawMessages);
      })
      .then((newMessages) => {
        setMessages(newMessages);
      })
      .catch((v) => setError(v));
  }, [userId]);

  return [messages, error];
}

export function useGlobalTimeline(): [MessageResolved[] | undefined] {
  const [messages, setMessages] = useState<MessageResolved[] | undefined>(
    undefined
  );

  useEffect(() => {
    setMessages(undefined);

    fetchRecentGlobalMessage().then((newMessages) => {
      setMessages(newMessages);
    });
  }, []);

  return [messages];
}
