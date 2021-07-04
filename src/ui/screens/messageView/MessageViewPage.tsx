import { useMessage } from "../../../data/messageHooks";
import { useUserByScreenName } from "../../../data/userDbHooks";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
import { TimelineMessage } from "../../stateless/TimelineMessage";
import { LoadingScreen } from "../loading/LoadingScreen";
import { NotFoundScreen } from "../notFound/NotFoundScreen";

export const MessageViewPage: React.FC<{
  messageId: string;
  screenName: string;
}> = ({ messageId, screenName }) => {
  const [user] = useUserByScreenName(screenName);
  const [message] = useMessage(user?.id, messageId);

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
