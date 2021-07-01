import { Link } from "react-router-dom";
import styled from "styled-components";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
import { loginPath } from "../login/LoginPage";

export const HomePage: React.FC = () => {
  return (
    <BasicLayout title="Home">
      <h1>
        <TomatoText>HOME</TomatoText>
      </h1>
      <p>
        <Link to={loginPath()}>Login</Link>
      </p>
    </BasicLayout>
  );
};

const TomatoText = styled.span`
  color: tomato;
`;
