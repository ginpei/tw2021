import { useRouter } from "next/router";
import { useMessage } from "../../../data/messageHooks";
import { MessageResolved } from "../../../data/messageResolved";
import { useUserByScreenName } from "../../../data/userDbHooks";
import { rootPath } from "../../../misc/mist";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
// import { TimelineMessage } from "../../stateless/TimelineMessage";
import { LoadingScreen } from "../loading/LoadingScreen";
import { NotFoundScreen } from "../notFound/NotFoundScreen";

type ParamNames = "screenName" | "messageId";

export function messageViewPath(screenName: string, messageId: string): string {
  return `${rootPath()}${screenName}/${messageId}/`;
}

export const MessageViewPage: React.FC = () => {
  const params = useRouter().query as Record<ParamNames, string>;
  const [user] = useUserByScreenName(params.screenName);
  const [message] = useMessage(user?.id, params.messageId);

  if (user === null || message === null) {
    return <NotFoundScreen />;
  }

  if (user === undefined) {
    return <LoadingScreen />;
  }

  return (
    <BasicLayout title={`Home of ${user.name}`}>
      {message ? <TimelineMessage message={message} /> : <div>...</div>}
    </BasicLayout>
  );
};

// TODO
const TimelineMessage: React.FC<{ message: MessageResolved }> = ({
  message,
}) => {
  return <div className="TimelineMessage">{message.body}</div>;
};
