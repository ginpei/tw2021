import { Link } from "react-router-dom";
import styled from "styled-components";
import { loginPath } from "../login/LoginPage";

export const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <h1>
        <TomatoText>HOME</TomatoText>
      </h1>
      <p>
        <Link to={loginPath()}>Login</Link>
      </p>
    </div>
  );
};

const TomatoText = styled.span`
  color: tomato;
`;
