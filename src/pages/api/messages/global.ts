import type { NextApiRequest, NextApiResponse } from "next";
import { MessageResolved } from "../../../data/messageResolved";
import dummyMessageDatabase from "../../../_fixture/messageData.dummy.json";
import dummyUserDatabase from "../../../_fixture/userData.dummy";

interface Data {
  messages: MessageResolved[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  const allMessages = dummyMessageDatabase.map((record) => {
    const user = dummyUserDatabase.find((v) => v.id === record.userId) ?? null;
    return { ...record, user };
  });
  const messages = allMessages
    .sort((v, u) => u.createdAt - v.createdAt)
    .slice(0, 30);

  res.status(200).json({ messages });
}
