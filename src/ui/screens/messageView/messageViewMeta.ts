import { rootPath } from "../../../misc/misc";

export function messageViewPath(screenName: string, messageId: string): string {
  return `${rootPath()}${screenName}/${messageId}/`;
}
