import styled from "styled-components";
import { useUserRecentMessages } from "../../../data/messageHooks";
import { User } from "../../../data/user";
import { useUserByScreenName } from "../../../data/userHooks";
import { FlexBlocks } from "../../form/FlexBlocks";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
import { ErrorMessage } from "../../stateless/ErrorMessage";
import { TimelineMessage } from "../../stateless/TimelineMessage";
import { LoadingScreen } from "../loading/LoadingScreen";
import { NotFoundScreen } from "../notFound/NotFoundScreen";

export const UserHomePage: React.FC<{ screenName: string }> = ({
  screenName,
}) => {
  const [user] = useUserByScreenName(screenName);

  if (user === null) {
    return <NotFoundScreen />;
  }

  if (user === undefined) {
    return <LoadingScreen />;
  }

  return (
    <BasicLayout title={`Home of ${user.name}`}>
      <FlexBlocks>
        <UserProfile user={user} />
        <UserTimeline user={user} />
      </FlexBlocks>
    </BasicLayout>
  );
};

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  return (
    <FlexBlocks className="UserProfile">
      <h1>
        {user.name || "-"} @{user.screenName}
      </h1>
      {user.bio && <UserBio>{user.bio}</UserBio>}
      {user.url && (
        <div>
          <a href={user.url}>{user.url}</a>
        </div>
      )}
    </FlexBlocks>
  );
};

const UserBio = styled.div`
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;

const UserTimeline: React.FC<{ user: User }> = ({ user }) => {
  const [messages, messagesError] = useUserRecentMessages(
    user?.id ?? undefined,
    30
  );

  if (messagesError) {
    return <ErrorMessage error={messagesError} />;
  }

  if (!messages) {
    return <div>...</div>;
  }

  return (
    <div className="messages">
      {messages.map((message) => (
        <TimelineMessage key={message.id} message={message} />
      ))}
    </div>
  );
};
