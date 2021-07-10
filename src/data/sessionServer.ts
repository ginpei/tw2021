import { getDatabase } from "../dummyDatabase/DummyDatabase";
import { Session } from "./session";

export function getSession(id: string): Session | undefined {
  const db = getDatabase();
  return db.data.sessions[id];
}

export function setSession(session: Session): void {
  if (!session.id) {
    throw new Error("Session id is missing");
  }
  const db = getDatabase();
  db.data.sessions[session.id] = session;
  db.save();
}
