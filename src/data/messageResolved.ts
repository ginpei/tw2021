import { Message } from "./message";
import { User } from "./user";

export interface MessageResolved extends Message {
  user: User | null;
}
