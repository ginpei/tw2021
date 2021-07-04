import { rootPath } from "../../../misc/mist";

export function userHomePath(screenName: string): string {
  return `${rootPath()}${screenName}/`;
}
