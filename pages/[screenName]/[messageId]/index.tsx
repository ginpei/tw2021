import { useRouter } from "next/router";
import { MessageViewPage } from "../../../src/ui/screens/messageView/MessageViewPage";

type ParamNames = "screenName" | "messageId";

const UserHomeRoute: React.FC = () => {
  const { messageId, screenName } = useRouter().query as Record<
    ParamNames,
    string
  >;

  return <MessageViewPage messageId={messageId} screenName={screenName} />;
};

export default UserHomeRoute;
