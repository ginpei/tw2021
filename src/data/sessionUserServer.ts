import { getSession } from "./sessionServer";
import { User } from "./user";
import { getUser } from "./userServer";

export async function getUserBySessionId(
  sessionId: string
): Promise<User | null> {
  const session = getSession(sessionId);
  if (!session) {
    return null;
  }

  const user = await getUser(session.userId);
  return user;
}
