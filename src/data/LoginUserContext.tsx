import { createContext, useEffect, useState } from "react";
import { LoginUser } from "./loginUser";

export interface LoginUserContextValue {
  setUser: (user: LoginUser) => void;
  user: LoginUser | undefined;
}

const initialLoginUserContextValue: LoginUserContextValue = {
  setUser: () => {
    /* noop */
  },
  user: undefined,
};

export const LoginUserContext = createContext<LoginUserContextValue>(
  initialLoginUserContextValue
);

export const LoginUserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<LoginUserContextValue["user"]>(undefined);

  // TODO implement
  useEffect(() => {
    setTimeout(() => {
      const newUser: LoginUser = { loggedIn: false };
      setUser(newUser);
    }, 300);
  }, []);

  return (
    <LoginUserContext.Provider value={{ setUser, user }}>
      <LoginUserContext.Consumer>
        {({ user: loginUser }) => (loginUser ? children : null)}
      </LoginUserContext.Consumer>
    </LoginUserContext.Provider>
  );
};
