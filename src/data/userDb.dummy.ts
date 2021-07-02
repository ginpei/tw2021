import { generateId } from "../misc/util";
import { createUser, User } from "./user";

const dummyUserDatabase: User[] = [
  createUser({
    id: generateId(),
    name: "高梨ギンペイ",
    screenName: "ginpei_jp",
  }),
];
export default dummyUserDatabase;
