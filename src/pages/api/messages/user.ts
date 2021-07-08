import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { AppServerRecord } from "../../../data/appServerError";
import { MessageResolved } from "../../../data/messageResolved";
import { loadRecentUserMessages } from "../../../data/messageServer";

interface Data {
  messages: MessageResolved[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | AppServerRecord>
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
