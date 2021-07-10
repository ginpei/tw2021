import { DataRecord } from "../gp/data/DataRecord";

export interface Session extends DataRecord {
  userId: string;
}

export function createSession(initial: Partial<Session> = {}): Session {
  const id = generateId();
  const createdAt = Date.now();
  return {
    createdAt,
    id,
    updatedAt: createdAt,
    userId: initial.userId ?? "",
  };
}

function generateId() {
  return Math.random().toFixed(32).slice(2);
}
