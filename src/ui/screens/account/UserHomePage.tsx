import { useRouter } from "next/router";
import styled from "styled-components";
import { useUserRecentMessages } from "../../../data/messageHooks";
import { MessageResolved } from "../../../data/messageResolved";
import { useUserByScreenName } from "../../../data/userDbHooks";
import { rootPath } from "../../../misc/mist";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
// import { TimelineMessage } from "../../stateless/TimelineMessage";
import { LoadingScreen } from "../loading/LoadingScreen";
import { NotFoundScreen } from "../notFound/NotFoundScreen";

type ParamNames = "screenName";

export function userHomePath(screenName: string): string {
  return `${rootPath()}${screenName}/`;
}

export const UserHomePage: React.FC = () => {
  const params = useRouter().query as { screenName: string };
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

// TODO
const TimelineMessage: React.FC<{ message: MessageResolved }> = ({
  message,
}) => {
  return <div className="TimelineMessage">{message.body}</div>;
};

const Box = styled.div`
  border: thin solid lightgrey;
  padding: 1rem;

  &:nth-child(n + 2) {
    border-top-style: none;
  }
`;
