import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { AppServerRecord } from "../../data/appServerError";
import { loginCertSchema } from "../../data/loginCert";
import { User, userSchema } from "../../data/user";
import { fetchUserByScreenName } from "../../data/userData";

type Data = {
  user: User;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | AppServerRecord>
): Promise<void> {
  const body = JSON.parse(req.body);
  const reqParsed = loginCertSchema.safeParse(body);
  if (!reqParsed.success) {
    res.status(400).json({ message: "Invalid queries" });
    return;
  }
  const query = reqParsed.data;

  const user = await fetchUserByScreenName(query.screenName);
  if (!user) {
    res.status(401).json({ message: "Incorrect login info" });
    return;
  }

  res.status(200).json({ user });
}
