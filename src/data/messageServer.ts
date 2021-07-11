import { getDatabase } from "../dummyDatabase/DummyDatabase";
import { MessageResolved } from "./messageResolved";
import { getUser } from "./userServer";

export async function loadMessage(id: string): Promise<MessageResolved | null> {
  const db = getDatabase();
  const plainMessage = db.data.messages[id] ?? null;
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
  const db = getDatabase();

  const allMessages = Object.values(db.data.messages).map((record) => {
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
  const db = getDatabase();

  const plainMessages = Object.values(db.data.messages)
    .filter((v) => v.userId === userId)
    .sort((v, u) => u.createdAt - v.createdAt)
    .slice(offset, offset + limit);

  const messages = plainMessages.map((record) => {
    const user = getUser(record.userId);
    return { ...record, user };
  });
  return messages;
}
