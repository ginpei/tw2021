import { useEffect, useState } from "react";
import { Message } from "./message";
import { fetchRecentMessageOf } from "./messageDb";

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
