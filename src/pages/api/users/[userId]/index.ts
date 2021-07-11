import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { AppServerErrorData } from "../../../../data/appServerError";
import { User } from "../../../../data/user";
import { getDatabase } from "../../../../dummyDatabase/DummyDatabase";

interface Data {
  user: User;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | AppServerErrorData>
): Promise<void> {
  const query = z.object({ userId: z.string() }).parse(req.query);
  const { userId } = query;

  const db = getDatabase();
  const user = db.data.users[userId];
  if (!user) {
    res.status(404).send({ message: "Not found" });
    return;
  }

  res.status(200).json({ user });
}
