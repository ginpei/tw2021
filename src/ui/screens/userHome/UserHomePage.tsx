import styled from "styled-components";
import { useUserRecentMessages } from "../../../data/messageHooks";
import { useUserByScreenName } from "../../../data/userHooks";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
import { ErrorMessage } from "../../stateless/ErrorMessage";
import { TimelineMessage } from "../../stateless/TimelineMessage";
import { LoadingScreen } from "../loading/LoadingScreen";
import { NotFoundScreen } from "../notFound/NotFoundScreen";

export const UserHomePage: React.FC<{ screenName: string }> = ({
  screenName,
}) => {
  const [user] = useUserByScreenName(screenName);
  const [messages, messagesError] = useUserRecentMessages(
    user?.id ?? undefined,
    30
  );

  if (user === null) {
    return <NotFoundScreen />;
  }

  if (user === undefined) {
    return <LoadingScreen />;
  }

  return (
    <BasicLayout title={`Home of ${user.name}`}>
      <h1>{user.name}</h1>
      {messagesError ? (
        <ErrorMessage error={messagesError} />
      ) : (
        <div className="messages">
          {messages ? (
            messages.map((message) => (
              <TimelineMessage key={message.id} message={message} />
            ))
          ) : (
            <div>...</div>
          )}
        </div>
      )}
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
