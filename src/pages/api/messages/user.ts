import type { NextApiRequest, NextApiResponse } from "next";
import { MessageResolved } from "../../../data/messageResolved";
import { loadRecentUserMessages } from "../../../data/messageServer";

interface Data {
  messages: MessageResolved[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const { userId } = req.query as { userId: string };
  const messages = await loadRecentUserMessages(userId, 0, 30);
  res.status(200).json({ messages });
}
