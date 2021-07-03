import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useMessage, useUserRecentMessages } from "../../../data/messageHooks";
import { useUserByScreenName } from "../../../data/userDbHooks";
import { rootPath } from "../../../misc/mist";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
import { TimelineMessage } from "../../stateless/TimelineMessage";
import { NotFoundScreen } from "../notFound/NotFoundScreen";

type ParamNames = "screenName" | "messageId";

export function messageViewPath(screenName: string, messageId: string): string {
  return `${rootPath()}${screenName}/${messageId}/`;
}

export const MessageViewPage: React.FC = () => {
  const params = useParams<Record<ParamNames, string>>();
  const [user] = useUserByScreenName(params.screenName);
  const [message] = useMessage(user?.id, params.messageId);

  if (user === null || message === null) {
    return <NotFoundScreen />;
  }

  if (user === undefined) {
    // TODO loading screen
    return <div>Loading...</div>;
  }

  return (
    <BasicLayout title={`Home of ${user.name}`}>
      {message ? <TimelineMessage message={message} /> : <div>...</div>}
    </BasicLayout>
  );
};
