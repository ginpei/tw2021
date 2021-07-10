import { useContext } from "react";
import { LoginUser } from "./loginUser";
import { LoginUserContext } from "./LoginUserContext";
import { logIn, logOut } from "./loginUserClient";
import { LoginCert } from "./loginCert";

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
