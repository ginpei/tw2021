import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { AppServerRecord } from "../../../../data/appServerError";
import { MessageResolved } from "../../../../data/messageResolved";
import { loadMessage } from "../../../../data/messageServer";

interface Data {
  message: MessageResolved;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | AppServerRecord>
): Promise<void> {
  const query = z.object({ messageId: z.string() }).parse(req.query);

  const { messageId } = query;
  const message = await loadMessage(messageId);
  if (!message) {
    res.status(404).send({ message: "Not found" });
    return;
  }

  res.status(200).json({ message });
}
