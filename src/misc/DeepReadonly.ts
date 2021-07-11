import { Primitive } from "zod";

export type DeepReadonly<T> = T extends Primitive ? T : DeepReadonlyObject<T>;

type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};
