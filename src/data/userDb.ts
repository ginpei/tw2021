import { sleep } from "../misc/util";
import { User } from "./user";
import dummyUserDatabase from "./userDb.dummy";

const database: User[] = dummyUserDatabase;

export async function fetchUser(userId: string): Promise<User | null> {
  await sleep(500);
  const user = database.find((v) => v.id === userId) ?? null;
  return user;
}

export async function fetchUserByScreenName(
  screenName: string
): Promise<User | null> {
  await sleep(500);
  const user = database.find((v) => v.screenName === screenName) ?? null;
  return user;
}
