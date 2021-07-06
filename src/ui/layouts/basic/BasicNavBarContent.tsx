import styled from "styled-components";
import { useLoginUser } from "../../../data/LoginUserContext";
import { ModerateLink } from "../../form/Links";
import { loginPath } from "../../screens/login/loginMeta";
import { userHomePath } from "../../screens/userHome/userHomeMeta";

export const BasicNavBarContent: React.FC = () => {
  const user = useLoginUser();

  return (
    <Frame>
      {user.loggedIn ? (
        <>
          <ModerateLink href={userHomePath(user.screenName)}>
            {user.name}
          </ModerateLink>
          <ModerateLink href={loginPath()}>Logout</ModerateLink>
        </>
      ) : (
        <ModerateLink href={loginPath()}>Login</ModerateLink>
      )}
    </Frame>
  );
};

const Frame = styled.div`
  display: flex;
  gap: 1rem;
`;
