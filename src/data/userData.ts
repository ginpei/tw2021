import { sleep } from "../misc/util";
import { User } from "./user";
import dummyUserDatabase from "../_fixture/userData.dummy";

const database: User[] = dummyUserDatabase;

export async function fetchUser(userId: string): Promise<User | null> {
  await sleep(500);
  const user = database.find((v) => v.id === userId) ?? null;
  return user;
}

export async function fetchUserByScreenName(
  signal: AbortSignal | undefined,
  screenName: string
): Promise<User | null> {
  await sleep(500);
  if (signal?.aborted) {
    return null;
  }
  const user = database.find((v) => v.screenName === screenName) ?? null;
  return user;
}
