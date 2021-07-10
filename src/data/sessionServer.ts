import { Session } from "./sessionStorage";

const sessions = new Map<string, Session>();

export function getSession(id: string): Session | undefined {
  return sessions.get(id);
}

export function setSession(session: Session): void {
  if (!session.id) {
    throw new Error("Session id is missing");
  }
  sessions.set(session.id, session);
}
