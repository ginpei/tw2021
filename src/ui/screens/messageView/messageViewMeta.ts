import { rootPath } from "../../../misc/mist";

export function messageViewPath(screenName: string, messageId: string): string {
  return `${rootPath()}${screenName}/${messageId}/`;
}
