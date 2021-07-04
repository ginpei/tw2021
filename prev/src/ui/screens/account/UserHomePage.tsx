import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useUserRecentMessages } from "../../../data/messageHooks";
import { useUserByScreenName } from "../../../data/userDbHooks";
import { rootPath } from "../../../misc/mist";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
import { TimelineMessage } from "../../stateless/TimelineMessage";
import { LoadingScreen } from "../loading/LoadingScreen";
import { NotFoundScreen } from "../notFound/NotFoundScreen";

type ParamNames = "screenName";

export function userHomePath(screenName: string): string {
  return `${rootPath()}${screenName}/`;
}

export const UserHomePage: React.FC = () => {
  const params = useParams<Record<ParamNames, string>>();
  const [user] = useUserByScreenName(params.screenName);
  const [messages] = useUserRecentMessages(user?.id ?? undefined);

  if (user === null) {
    return <NotFoundScreen />;
  }

  if (user === undefined) {
    return <LoadingScreen />;
  }

  return (
    <BasicLayout title={`Home of ${user.name}`}>
      <h1>{user.name}</h1>
      <div className="messages">
        {messages ? (
          messages.map((message) => (
            <TimelineMessage key={message.id} message={message} />
          ))
        ) : (
          <div>...</div>
        )}
      </div>
    </BasicLayout>
  );
};

const Box = styled.div`
  border: thin solid lightgrey;
  padding: 1rem;

  &:nth-child(n + 2) {
    border-top-style: none;
  }
`;
