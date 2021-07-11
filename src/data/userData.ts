import { z } from "zod";
import { AppServerError } from "./appServerError";
import { User, userSchema } from "./user";

export async function fetchUserByScreenName(
  signal: AbortSignal | undefined,
  screenName: string
): Promise<User | null> {
  const url = `/api/users/search/?screenName=${encodeURIComponent(screenName)}`;
  const res = await fetch(url, { signal });
  if (!res.ok) {
    throw AppServerError.createFromResponse(res);
  }

  const rawData = await res.json();
  const parsed = z.object({ users: z.array(userSchema) }).safeParse(rawData);
  if (!parsed.success) {
    throw new AppServerError("Server returns invalid data");
  }

  const user = parsed.data.users[0] ?? null;
  return user;
}
