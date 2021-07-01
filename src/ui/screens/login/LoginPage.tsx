import { Link } from "react-router-dom";
import { rootPath } from "../../../misc/mist";
import { BasicLayout } from "../../layouts/basic/BasicLayout";

export function loginPath(): string {
  return `${rootPath()}login/`;
}

export const LoginPage: React.FC = () => {
  return (
    <BasicLayout title="Login">
      <h1>Login</h1>
      <p>
        <Link to={rootPath()}>Home</Link>
      </p>
    </BasicLayout>
  );
};
