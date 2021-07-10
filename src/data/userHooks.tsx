import { useEffect, useState } from "react";
import { User } from "./user";
import { fetchUserByScreenName } from "./userData";

/**
 * Returns `undefined` until completely fetched.
 * Returns `null` if no user found for the given screen name.
 * Returns `User` if found.
 */
export function useUserByScreenName(
  screenName: string
): [User | null | undefined] {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const abortController = new AbortController();
    fetchUserByScreenName(abortController.signal, screenName).then(
      (newUser) => {
        setUser(newUser);
      }
    );
    return () => abortController.abort();
  }, [screenName]);

  return [user];
}
