import type { NextApiRequest, NextApiResponse } from "next";
import { AppServerErrorData } from "../../data/appServerError";
import { getSession } from "../../data/sessionServer";
import { User } from "../../data/user";
import { fetchUser } from "../../data/userData";

type Data = {
  user: User | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | AppServerErrorData>
): Promise<void> {
  const sessionId = req.cookies.session;
  const session = getSession(sessionId);
  if (!session) {
    res.status(200).json({ user: null });
    return;
  }

  const user = await fetchUser(session.userId);
  if (!user) {
    res.status(401).json({ message: "Incorrect login info" });
    return;
  }
  res.status(200).json({ user });
}
