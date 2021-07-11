import type { NextApiRequest, NextApiResponse } from "next";
import { AppServerErrorData } from "../../data/appServerError";
import { deleteSession, getSession } from "../../data/sessionServer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void | AppServerErrorData>
): Promise<void> {
  const sessionId = req.cookies.session;
  const session = getSession(sessionId);
  if (!session) {
    res.status(200).send();
    return;
  }

  deleteSession(session);

  res.setHeader("Set-Cookie", `session=`);
  res.status(200).send();
}
