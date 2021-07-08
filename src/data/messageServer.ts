import dummyMessageDatabase from "../_fixture/messageData.dummy";
import dummyUserDatabase from "../_fixture/userData.dummy";
import { MessageResolved } from "./messageResolved";

export async function loadRecentGlobalMessage(
  offset: number,
  limit: number
): Promise<MessageResolved[]> {
  const allMessages = dummyMessageDatabase.map((record) => {
    const user = dummyUserDatabase.find((v) => v.id === record.userId) ?? null;
    return { ...record, user };
  });
  const messages = allMessages
    .sort((v, u) => u.createdAt - v.createdAt)
    .slice(offset, offset + limit - 1);
  return messages;
}

export async function loadRecentUserMessages(
  userId: string,
  offset: number,
  limit: number
): Promise<MessageResolved[]> {
  const plainMessages = dummyMessageDatabase
    .filter((v) => v.userId === userId)
    .sort((v, u) => u.createdAt - v.createdAt)
    .slice(offset, offset + limit - 1);

  const messages = plainMessages.map((record) => {
    const user = dummyUserDatabase.find((v) => v.id === record.userId) ?? null;
    return { ...record, user };
  });
  return messages;
}
