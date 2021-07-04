import { useRouter } from "next/router";
import { rootPath } from "../../../src/misc/mist";
import { MessageViewPage } from "../../../src/ui/screens/messageView/MessageViewPage";

type ParamNames = "screenName" | "messageId";

export function messageViewPath(screenName: string, messageId: string): string {
  return `${rootPath()}${screenName}/${messageId}/`;
}

const UserHomeRoute: React.FC = () => {
  const { messageId, screenName } = useRouter().query as Record<
    ParamNames,
    string
  >;

  return <MessageViewPage messageId={messageId} screenName={screenName} />;
};

export default UserHomeRoute;
