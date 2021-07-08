import { z } from "zod";
import { createUser, userSchema } from "./user";

export type LoginUser = NotLoggedInUser | LoggedInUser;

export interface NotLoggedInUser {
  loggedIn: false;
}

export type LoggedInUser = z.infer<typeof loggedInUserSchema>;

export const loggedInUserSchema = userSchema.extend({
  loggedIn: z.literal(true),
});

export function createLoggedInUser(
  initial: Partial<LoggedInUser> = {}
): LoggedInUser {
  return {
    ...createUser(initial),
    loggedIn: true,
  };
}
