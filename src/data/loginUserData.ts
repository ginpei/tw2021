import { sleep } from "../misc/util";
import { createLoggedInUser, LoginUser } from "./loginUser";
import { fetchUserByScreenName } from "./userDb";

export interface LoginCert {
  screenName: string;
}

export async function logIn(cert: LoginCert): Promise<LoginUser> {
  await sleep(1000);
  const user = await fetchUserByScreenName(cert.screenName);
  if (!user) {
    throw new Error("Failed to log in");
  }
  const loggedInUser = createLoggedInUser({ ...user });
  return loggedInUser;
}

export async function logOut(): Promise<void> {
  await sleep(500);
}
