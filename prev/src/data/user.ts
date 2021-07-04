export interface User {
  id: string;
  name: string;
  screenName: string;
}

export function createUser(initial: Partial<User> = {}): User {
  return {
    id: initial?.id ?? "",
    name: initial?.name ?? "",
    screenName: initial?.screenName ?? "",
  };
}
