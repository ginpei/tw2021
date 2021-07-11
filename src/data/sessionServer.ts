import { NextApiRequest } from "next";
import { getDatabase } from "../dummyDatabase/DummyDatabase";
import { Session } from "./session";

export function getSession(id: string): Session | null {
  const db = getDatabase();
  return db.data.sessions[id] ?? null;
}

export function setSession(session: Session): void {
  if (!session.id) {
    throw new Error("Session id is missing");
  }
  const db = getDatabase();
  db.save({ sessions: { [session.id]: session } });
}

export function deleteSession(session: Session): void {
  if (!session.id) {
    throw new Error("Session id is missing");
  }
  const db = getDatabase();
  db.save({ sessions: { [session.id]: undefined } });
}

export function getSessionId(req: NextApiRequest): string {
  return req.cookies.session ?? "";
}
