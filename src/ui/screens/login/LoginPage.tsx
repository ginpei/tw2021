import { Link } from "react-router-dom";
import { rootPath } from "../../../misc/mist";

export function loginPath(): string {
  return `${rootPath()}login/`;
}

export const LoginPage: React.FC = () => {
  return (
    <div className="LoginPage">
      <h1>Login</h1>
      <p>
        <Link to={rootPath()}>Home</Link>
      </p>
    </div>
  );
};
