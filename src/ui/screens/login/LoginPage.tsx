import { useState } from "react";
import { Link } from "react-router-dom";
import { createLoggedInUser } from "../../../data/loginUser";
import { useLoginUser, useSetLoginUser } from "../../../data/LoginUserContext";
import { rootPath } from "../../../misc/mist";
import { sleep } from "../../../misc/util";
import { NiceButton } from "../../form/NiceButton";
import { BasicLayout } from "../../layouts/basic/BasicLayout";

export function loginPath(): string {
  return `${rootPath()}login/`;
}

export const LoginPage: React.FC = () => {
  const user = useLoginUser();

  return (
    <BasicLayout title="Login">
      <h1>Login</h1>
      <p>
        <Link to={rootPath()}>Home</Link>
      </p>
      {user.loggedIn ? <LogOutForm /> : <LogInForm />}
    </BasicLayout>
  );
};

const LogInForm: React.FC = () => {
  const setUser = useSetLoginUser();
  const [dirty, setDirty] = useState(false);

  const onClick = async () => {
    setDirty(true);
    await sleep(1000);
    const user = createLoggedInUser({ name: "Jack" });
    setUser(user);
  };

  return (
    <div className="LogInForm">
      <NiceButton disabled={dirty} onClick={onClick}>
        Log in
      </NiceButton>
    </div>
  );
};

const LogOutForm: React.FC = () => {
  const setUser = useSetLoginUser();
  const [dirty, setDirty] = useState(false);

  const onClick = async () => {
    setDirty(true);
    await sleep(500);
    setUser({ loggedIn: false });
  };

  return (
    <div className="LogOutForm">
      <NiceButton disabled={dirty} onClick={onClick}>
        Log out
      </NiceButton>
    </div>
  );
};
