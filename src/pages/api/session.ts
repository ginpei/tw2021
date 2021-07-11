import type { NextApiRequest, NextApiResponse } from "next";
import { AppServerErrorData } from "../../data/appServerError";
import { getSessionId } from "../../data/sessionServer";
import { getUserBySessionId } from "../../data/sessionUserServer";
import { User } from "../../data/user";

type Data = {
  user: User | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | AppServerErrorData>
): Promise<void> {
  const sessionId = getSessionId(req);
  const user = await getUserBySessionId(sessionId);
  res.status(200).json({ user });
}
