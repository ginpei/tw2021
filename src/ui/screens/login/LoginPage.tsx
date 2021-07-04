import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { createLoggedInUser } from "../../../data/loginUser";
import { useLoginUser, useSetLoginUser } from "../../../data/LoginUserContext";
import { fetchUserByScreenName } from "../../../data/userDb";
import { rootPath } from "../../../misc/mist";
import { sleep } from "../../../misc/util";
import { LineLabel } from "../../form/LineLabel";
import { NiceButton } from "../../form/NiceButton";
import { NiceInput } from "../../form/NiceInput";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
import { userHomePath } from "../account/UserHomePage";

export function loginPath(): string {
  return `${rootPath()}login/`;
}

export const LoginPage: React.FC = () => {
  const user = useLoginUser();

  return (
    <BasicLayout title="Login">
      <h1>Login</h1>
      <p>
        <Link href={rootPath()}>Home</Link>
      </p>
      {user.loggedIn && (
        <p>
          Logged in as{" "}
          <Link href={userHomePath(user.screenName)}>
            {user.name} @{user.screenName}
          </Link>
        </p>
      )}
      {user.loggedIn ? <LogOutForm /> : <LogInForm />}
    </BasicLayout>
  );
};

const LogInForm: React.FC = () => {
  const setUser = useSetLoginUser();
  const [screenName, setScreenName] = useState("");
  const [dirty, setDirty] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onScreenNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setScreenName(value);
  };

  const onClick = async () => {
    setErrorMessage("");
    setDirty(true);
    await sleep(1000);
    const user = await fetchUserByScreenName(screenName);
    if (!user) {
      setErrorMessage("Failed to log in");
      setDirty(false);
      return;
    }
    const loggedInUser = createLoggedInUser({ ...user });
    setUser(loggedInUser);
  };

  return (
    <form className="LogInForm">
      {errorMessage && <p style={{ color: "tomato" }}>{errorMessage}</p>}
      <LineLabel>
        Account:
        <NiceInput
          disabled={dirty}
          onChange={onScreenNameChange}
          value={screenName}
        />
      </LineLabel>
      <NiceButton disabled={dirty} onClick={onClick}>
        Log in
      </NiceButton>
    </form>
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
