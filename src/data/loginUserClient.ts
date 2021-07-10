import { z } from "zod";
import { sleep } from "../misc/util";
import { AppServerError } from "./appServerError";
import { LoginCert } from "./loginCert";
import { createLoggedInUser, LoginUser } from "./loginUser";
import { userSchema } from "./user";

export async function logIn(cert: LoginCert): Promise<LoginUser> {
  const url = "/api/login";
  const method = "POST";
  const body = JSON.stringify(cert);
  const res = await fetch(url, { body, method });
  const rawData = await res.json();

  if (!res.ok) {
    throw new AppServerError(rawData);
  }

  const parsed = z.object({ user: userSchema }).safeParse(rawData);
  if (!parsed.success) {
    throw new AppServerError("Server returns invalid data");
  }

  const loginUser = createLoggedInUser({ ...parsed.data.user });
  return loginUser;
}

export async function logOut(): Promise<void> {
  await sleep(500);
}
