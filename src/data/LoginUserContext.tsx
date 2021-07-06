import { createContext, useContext, useEffect, useState } from "react";
import { LoginUser } from "./loginUser";
import { logIn, LoginCert, logOut } from "./loginUserData";

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

const LoginUserContext = createContext<LoginUserContextValue>(
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

/**
 * Returns `LoginUser`.
 * If not loaded status yet, thrown an error.
 * @example
 * const user = useLoginUser();
 * if (user.loggedIn) {
 *   alert(`Welcome ${user.name}!`);
 * } else {
 *   alert('Log in please.');
 * }
 */
export function useLoginUser(): LoginUser {
  const { user } = useContext(LoginUserContext);
  if (user === undefined) {
    throw new Error("Wrong usage of useLoginUserContext()");
  }
  return user;
}

export function useLoginMethod(): {
  logIn: (cert: LoginCert) => Promise<void>;
  logOut: () => Promise<void>;
} {
  const { setUser } = useContext(LoginUserContext);
  return { logIn: logInMethod, logOut: logOutMethod };

  async function logInMethod(cert: LoginCert) {
    const newUser = await logIn(cert);
    setUser(newUser);
  }

  async function logOutMethod() {
    await logOut();
    setUser({ loggedIn: false });
  }
}
