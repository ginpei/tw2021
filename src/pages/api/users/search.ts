import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { AppServerErrorData } from "../../../data/appServerError";
import { User } from "../../../data/user";
import { getDatabase } from "../../../dummyDatabase/DummyDatabase";

interface Data {
  users: User[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | AppServerErrorData>
): Promise<void> {
  const query = z.object({ screenName: z.string() }).parse(req.query);
  const { screenName } = query;

  const db = getDatabase();
  const users = Object.values(db.data.users).filter(
    (v) => v.screenName === screenName
  );

  res.status(200).json({ users });
}
