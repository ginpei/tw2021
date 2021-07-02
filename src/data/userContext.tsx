import { createContext, useContext } from "react";
import { createUser, User } from "./user";

const UserContext = createContext(createUser());

export const UserProvider: React.FC<{ user: User }> = ({ children, user }) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export function useUser(): User {
  return useContext(UserContext);
}
