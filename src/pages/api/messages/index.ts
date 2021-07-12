import type { NextApiRequest, NextApiResponse } from "next";
import { z, ZodSchema } from "zod";
import { AppServerErrorData } from "../../../data/appServerError";
import { Message, messageSchema } from "../../../data/message";
import { getSessionId } from "../../../data/sessionServer";
import { getUserBySessionId } from "../../../data/sessionUserServer";
import { User } from "../../../data/user";
import { getDatabase } from "../../../dummyDatabase/DummyDatabase";
import { generateId } from "../../../misc/util";

interface PostData {
  message: Message;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown | AppServerErrorData>
): Promise<void> {
  if (req.method === "POST") {
    await handlePost(req, res);
    return;
  }

  res.status(404).json({ message: "Not found" });
}

async function handlePost(
  req: NextApiRequest,
  res: NextApiResponse<PostData | AppServerErrorData>
): Promise<void> {
  const sessionId = getSessionId(req);
  const user = await getUserBySessionId(sessionId);
  if (!user) {
    res.status(401).json({ message: "Not authorized" });
    return;
  }

  const body = parseBody(
    z.object({
      message: messageSchema,
    }),
    req
  );
  if (!body) {
    res.status(400).json({ message: "Invalid queries" });
    return;
  }

  const message: Message = modifyMessageToStore(body.message, user);
  const db = getDatabase();
  db.save({ messages: { [message.id]: message } });

  res.status(200).json({ message });
}

// TODO extract
function modifyMessageToStore(message: Message, user: User): Message {
  const id = generateId();
  const userId = user.id;
  const updatedAt = Date.now();

  const modified: Message = {
    ...message,
    createdAt: message.createdAt || updatedAt,
    id,
    updatedAt,
    userId,
  };
  return modified;
}

// TODO extract
function parseBody<T>(
  schema: ZodSchema<T>,
  req: NextApiRequest
): T | undefined {
  const json = req.body;
  try {
    const data = JSON.parse(json);
    const result = schema.parse(data);
    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Failed to parse body", { error, json });
    return undefined;
  }
}
