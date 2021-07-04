import { Link } from "react-router-dom";
import styled from "styled-components";
import { MessageResolved } from "../../data/messageResolved";
import { ModerateLink } from "../form/Links";
import { userHomePath } from "../screens/account/UserHomePage";
import { messageViewPath } from "../screens/messageView/MessageViewPage";

export const TimelineMessage: React.FC<{ message: MessageResolved }> = ({
  message,
}) => {
  const screenName = message.user?.screenName ?? message.userId;
  return (
    <Frame>
      <MessageMeta>
        <ModerateLink to={userHomePath(screenName)}>
          <UserName>{message.user?.name ?? "???"}</UserName>{" "}
          <ScreenName>@{screenName}</ScreenName>
        </ModerateLink>
        <ModerateLink to={messageViewPath(screenName, message.id)}>
          <MessageTimeLink>{timeToString(message.createdAt)}</MessageTimeLink>
        </ModerateLink>
      </MessageMeta>
      <div>{message.body}</div>
    </Frame>
  );
};

function timeToString(time: number) {
  const date = new Date(time);

  const now = Date.now();
  const h24 = 24 * 60 * 60 * 1000;
  if (now - time > h24) {
    return date.toLocaleDateString();
  }

  return date.toLocaleTimeString();
}

const Frame = styled.div`
  border: thin solid lightgrey;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;

  &:nth-child(n + 2) {
    border-top-style: none;
  }
`;

const MessageMeta = styled.div`
  display: flex;
  gap: 1em;
`;

const UserName = styled.span`
  color: inherit;
  font-weight: bold;
`;

const ScreenName = styled.span`
  color: inherit;
  text-decoration: none;
`;

const MessageTimeLink = styled.time`
  font-size: var(--font-small);
`;
