export type LoginUser = NotLoggedInUser | LoggedInUser;

export interface NotLoggedInUser {
  loggedIn: false;
}

export interface LoggedInUser {
  loggedIn: true;
  name: string;
}

export function createLoggedInUser(
  initial: Partial<LoggedInUser> = {}
): LoggedInUser {
  return {
    loggedIn: true,
    name: initial?.name ?? "",
  };
}
