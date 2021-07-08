import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { MessageResolved } from "../../../data/messageResolved";
import { loadRecentUserMessages } from "../../../data/messageServer";

interface Data {
  messages: MessageResolved[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const reqParsed = z
    .object({
      userId: z.string(),
    })
    .safeParse(req.query);
  if (!reqParsed.success) {
    res.status(400);
    return;
  }
  const query = reqParsed.data;

  const { userId } = query;
  const messages = await loadRecentUserMessages(userId, 0, 30);

  res.status(200).json({ messages });
}
