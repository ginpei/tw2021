import styled from "styled-components";
import { useLoginUser } from "../../../data/loginUserHooks";
import { useUserRecentMessages } from "../../../data/messageHooks";
import { isUserFollowee, User } from "../../../data/user";
import { useUserByScreenName } from "../../../data/userHooks";
import { FlexBlocks } from "../../form/FlexBlocks";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
import { ErrorMessage } from "../../stateless/ErrorMessage";
import { TimelineMessage } from "../../stateless/TimelineMessage";
import { LoadingScreen } from "../loading/LoadingScreen";
import { NotFoundScreen } from "../notFound/NotFoundScreen";
import { EditProfileButton } from "./EditProfileButton";
import { FollowButton } from "./FollowButton";
import { UnfollowButton } from "./UnfollowButton";

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
  const loginUser = useLoginUser();

  return (
    <FlexBlocks className="UserProfile">
      <h1>
        {user.name || "-"} @{user.screenName}
      </h1>
      {loginUser.loggedIn && (
        <ActionBlockFrame>
          <ActionButton loginUser={loginUser} user={user} />
        </ActionBlockFrame>
      )}
      {user.bio && <UserBio>{user.bio}</UserBio>}
      {user.url && (
        <div>
          <a href={user.url}>{user.url}</a>
        </div>
      )}
    </FlexBlocks>
  );
};

/**
 * Returns the best button for the relation between a login user and a user of this page.
 */
const ActionButton: React.VFC<{ loginUser: User; user: User }> = ({
  loginUser,
  user,
}) => {
  if (loginUser.id === user.id) {
    return <EditProfileButton />;
  }

  if (isUserFollowee(loginUser, user.id)) {
    return <UnfollowButton />;
  }

  return <FollowButton />;
};

const ActionBlockFrame = styled.div`
  text-align: right;
`;

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
