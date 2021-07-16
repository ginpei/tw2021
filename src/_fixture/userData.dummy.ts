import { createUser, User } from "../data/user";

const dummyUserDatabase: User[] = [
  createUser({
    bio: "かつてはマラカスを振るなどしておりましたが、近年は日々JavaScriptを書いて暮らしております。あとお寿司を少々 / English: @ginpei_en",
    id: "id-ginpei_jp",
    name: "高梨ギンペイ",
    screenName: "ginpei_jp",
    url: "https://ginpei.dev",
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
    id: "id-noname",
    name: "",
    screenName: "noname",
  }),
];
export default dummyUserDatabase;
