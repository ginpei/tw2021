import type { NextApiRequest, NextApiResponse } from "next";
import { Message } from "../../../data/message";
import { loadRecentGlobalMessage } from "../../../data/messageServer";

interface Data {
  messages: Message[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const messages = await loadRecentGlobalMessage(0, 30);
  res.status(200).json({ messages });
}
