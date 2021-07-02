import { createUser, User } from "./user";

const dummyUserDatabase: User[] = [
  createUser({
    id: "id-ginpei_jp",
    name: "高梨ギンペイ",
    screenName: "ginpei_jp",
  }),
  createUser({
    id: "id-great_tanaka",
    name: "グレート田中",
    screenName: "great_tanaka",
  }),
  createUser({
    id: "id-oOoOoOoOo",
    name: "ぽわぽわ",
    screenName: "oOoOoOoOo",
  }),
  createUser({
    id: "id-dodododo",
    name: "ドドドドドドドドド",
    screenName: "dodododo",
  }),
];
export default dummyUserDatabase;
