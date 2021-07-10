import { createContext, useEffect, useState } from "react";
import { createLoggedInUser, LoginUser } from "./loginUser";
import { fetchSession } from "./sessionClient";

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

  useEffect(() => {
    const abortController = new AbortController();
    fetchSession(abortController.signal)
      .then((newUser) => {
        if (newUser) {
          setUser(createLoggedInUser(newUser));
        } else {
          setUser({ loggedIn: false });
        }
      })
      .catch(() => setUser({ loggedIn: false }));

    return () => abortController.abort();
  }, []);

  return (
    <LoginUserContext.Provider value={{ setUser, user }}>
      <LoginUserContext.Consumer>
        {({ user: loginUser }) => (loginUser ? children : null)}
      </LoginUserContext.Consumer>
    </LoginUserContext.Provider>
  );
};
