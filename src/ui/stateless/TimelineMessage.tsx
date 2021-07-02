import { Link } from "react-router-dom";
import styled from "styled-components";
import { Message } from "../../data/message";
import { userHomePath } from "../screens/account/UserHomePage";

export const TimelineMessage: React.FC<{ message: Message }> = ({
  message,
}) => {
  return (
    <Frame>
      <MessageMeta>
        <UserName to="#TODO">{message.userId}</UserName>
        <Link to="#TODO">@{message.userId}</Link>
        <Link to="#TODO">{timeToString(message.createdAt)}</Link>
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

const UserName = styled(Link)`
  color: inherit;
  font-weight: bold;
`;
