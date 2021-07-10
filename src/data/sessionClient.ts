import { z } from "zod";
import { AppServerError } from "./appServerError";
import { User, userSchema } from "./user";

export async function fetchSession(): Promise<User | null> {
  const url = "/api/session";
  const res = await fetch(url);
  const rawData = await res.json();

  if (!res.ok) {
    throw new AppServerError(rawData);
  }

  const parsed = z
    .object({ user: z.union([userSchema, z.null()]) })
    .safeParse(rawData);
  if (!parsed.success) {
    throw new AppServerError("Server returns invalid data");
  }

  return parsed.data.user;
}
