import { useEffect, useState } from "react";
import {
  fetchMessage,
  fetchRecentGlobalMessage,
  fetchRecentMessageOf,
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
): [MessageResolved[] | undefined] {
  const [messages, setMessages] = useState<MessageResolved[] | undefined>(
    undefined
  );

  useEffect(() => {
    setMessages(undefined);

    if (!userId) {
      return;
    }

    fetchRecentMessageOf(userId)
      .then((rawMessages) => {
        return resolveMessages(rawMessages);
      })
      .then((newMessages) => {
        setMessages(newMessages);
      });
  }, [userId]);

  return [messages];
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
