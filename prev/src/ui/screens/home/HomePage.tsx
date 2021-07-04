import { Link } from "react-router-dom";
import styled from "styled-components";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
import { userHomePath } from "../account/UserHomePage";
import { loginPath } from "../login/LoginPage";
import { GlobalTimeline } from "./GlobalTimeline";

export const HomePage: React.FC = () => {
  return (
    <BasicLayout title="Home">
      <h1>
        <TomatoText>HOME</TomatoText>
      </h1>
      <p>
        <Link to={loginPath()}>Login</Link>
      </p>
      <p>
        <Link to={userHomePath("ginpei_jp")}>@ginpei_jp</Link>
      </p>
      <GlobalTimeline />
    </BasicLayout>
  );
};

const TomatoText = styled.span`
  color: tomato;
`;
