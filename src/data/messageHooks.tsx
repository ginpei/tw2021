import { useEffect, useState } from "react";
import { Message } from "./message";
import { fetchRecentGlobalMessage, fetchRecentMessageOf } from "./messageDb";

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

export function useGlobalTimeline(): [Message[] | undefined] {
  const [messages, setMessages] = useState<Message[] | undefined>(undefined);

  useEffect(() => {
    setMessages(undefined);

    fetchRecentGlobalMessage().then((newMessages) => {
      setMessages(newMessages);
    });
  }, []);

  return [messages];
}
