import dummyMessageDatabase from "../_fixture/messageData.dummy";
import { MessageResolved } from "./messageResolved";
import { getUser } from "./userServer";

export async function loadMessage(id: string): Promise<MessageResolved | null> {
  const plainMessage = dummyMessageDatabase.find((v) => v.id === id);
  if (!plainMessage) {
    return null;
  }

  const user = getUser(plainMessage.userId);

  const message = { ...plainMessage, user };
  return message;
}

export async function loadRecentGlobalMessage(
  offset: number,
  limit: number
): Promise<MessageResolved[]> {
  const allMessages = dummyMessageDatabase.map((record) => {
    const user = getUser(record.userId);
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
    .slice(offset, offset + limit);

  const messages = plainMessages.map((record) => {
    const user = getUser(record.userId);
    return { ...record, user };
  });
  return messages;
}
