import { createUser, User } from "./user";

export type LoginUser = NotLoggedInUser | LoggedInUser;

export interface NotLoggedInUser {
  loggedIn: false;
}

export interface LoggedInUser extends User {
  loggedIn: true;
}

export function createLoggedInUser(
  initial: Partial<LoggedInUser> = {}
): LoggedInUser {
  return {
    ...createUser(initial),
    loggedIn: true,
  };
}
