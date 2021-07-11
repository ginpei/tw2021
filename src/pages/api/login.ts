import type { NextApiRequest, NextApiResponse } from "next";
import { AppServerErrorData } from "../../data/appServerError";
import { loginCertSchema } from "../../data/loginCert";
import { createSession } from "../../data/session";
import { setSession } from "../../data/sessionServer";
import { User } from "../../data/user";
import { getUserByScreenName } from "../../data/userServer";

type Data = {
  user: User;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | AppServerErrorData>
): Promise<void> {
  const body = JSON.parse(req.body);
  const reqParsed = loginCertSchema.safeParse(body);
  if (!reqParsed.success) {
    res.status(400).json({ message: "Invalid queries" });
    return;
  }
  const query = reqParsed.data;

  const user = getUserByScreenName(query.screenName);
  if (!user) {
    res.status(401).json({ message: "Incorrect login info" });
    return;
  }

  const session = createSession({ userId: user.id });
  setSession(session);

  res.setHeader("Set-Cookie", `session=${session.id}`);
  res.status(200).json({ user });
}
