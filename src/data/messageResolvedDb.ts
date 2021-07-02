import { Message } from "./message";
import { MessageResolved } from "./messageResolved";
import { User } from "./user";
import { fetchUser } from "./userDb";

export async function resolveMessages(
  messages: Message[]
): Promise<MessageResolved[]> {
  const map = new Map<string, Promise<User | null>>();

  const pResolveAll = messages.map(async (message) => {
    const { userId } = message;
    if (!map.has(userId)) {
      const p = fetchUser(userId);
      map.set(userId, p);
    }

    const p = map.get(userId);
    if (!p) {
      throw new Error("?");
    }

    const user = await p;
    const resolved: MessageResolved = { ...message, user };
    return resolved;
  });

  const resolvedMessages = await Promise.all(pResolveAll);
  return resolvedMessages;
}
