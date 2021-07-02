import { useEffect, useState } from "react";
import { fetchRecentGlobalMessage, fetchRecentMessageOf } from "./messageDb";
import { MessageResolved } from "./messageResolved";
import { resolveMessages } from "./messageResolvedDb";

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
