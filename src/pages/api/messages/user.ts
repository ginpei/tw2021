import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { AppServerErrorData } from "../../../data/appServerError";
import { Message } from "../../../data/message";
import { loadRecentUserMessages } from "../../../data/messageServer";

interface Data {
  messages: Message[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | AppServerErrorData>
): Promise<void> {
  const reqParsed = z
    .object({
      limit: z.string().transform(Number),
      offset: z.string().transform(Number),
      userId: z.string(),
    })
    .safeParse(req.query);
  if (!reqParsed.success) {
    res.status(400).json({ message: "Invalid queries" });
    return;
  }
  const query = reqParsed.data;

  const { limit, offset, userId } = query;
  const messages = await loadRecentUserMessages(userId, offset, limit);

  res.status(200).json({ messages });
}
