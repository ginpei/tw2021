import { rootPath } from "../../../misc/misc";

export function userHomePath(screenName: string): string {
  return `${rootPath()}${screenName}/`;
}
