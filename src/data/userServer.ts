import { getDatabase } from "../dummyDatabase/DummyDatabase";
import { User } from "./user";

export function getUser(id: string): User | null {
  const db = getDatabase();
  return db.data.users[id] ?? null;
}

export function getUserByScreenName(screenName: string): User | null {
  const db = getDatabase();
  return (
    Object.values(db.data.users).find((v) => v.screenName === screenName) ??
    null
  );
}

export function setUser(session: User): void {
  if (!session.id) {
    throw new Error("User id is missing");
  }
  const db = getDatabase();
  db.save({ users: { [session.id]: session } });
}
