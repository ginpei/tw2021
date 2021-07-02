import { useEffect, useState } from "react";
import { Message } from "./message";
import { fetchRecentGlobalMessage, fetchRecentMessageOf } from "./messageDb";
import { MessageResolved } from "./messageResolved";
import { resolveMessages } from "./messageResolvedDb";

export function useUserRecentMessages(
  userId: string | undefined
): [Message[] | undefined] {
  const [messages, setMessages] = useState<Message[] | undefined>(undefined);

  useEffect(() => {
    setMessages(undefined);

    if (!userId) {
      return;
    }

    fetchRecentMessageOf(userId).then((newMessages) => {
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

    fetchRecentGlobalMessage()
      .then((rawMessages) => {
        return resolveMessages(rawMessages);
      })
      .then((newMessages) => {
        setMessages(newMessages);
      });
  }, []);

  return [messages];
}
