import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useLoginMethod, useLoginUser } from "../../../data/loginUserHooks";
import { assureError } from "../../../misc/util";
import { LineLabel } from "../../form/LineLabel";
import { NiceButton } from "../../form/NiceButton";
import { NiceInput } from "../../form/NiceInput";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
import { homePath } from "../home/homeMeta";
import { userHomePath } from "../userHome/userHomeMeta";

export const LoginPage: React.FC = () => {
  const user = useLoginUser();

  return (
    <BasicLayout title="Login">
      <h1>Login</h1>
      <p>
        <Link href={homePath()}>Home</Link>
      </p>
      {user.loggedIn && (
        <p>
          Logged in as{" "}
          <Link href={userHomePath(user.screenName)}>
            <a>
              {user.name} @{user.screenName}
            </a>
          </Link>
        </p>
      )}
      {user.loggedIn ? <LogOutForm /> : <LogInForm />}
    </BasicLayout>
  );
};

const LogInForm: React.FC = () => {
  const { logIn } = useLoginMethod();
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
    try {
      await logIn({ screenName });
    } catch (error) {
      setErrorMessage(assureError(error).message);

      // revert only if global state is not changed
      setDirty(false);
    }
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
  const { logOut } = useLoginMethod();
  const [dirty, setDirty] = useState(false);

  const onClick = async () => {
    setDirty(true);
    logOut();
  };

  return (
    <div className="LogOutForm">
      <NiceButton disabled={dirty} onClick={onClick}>
        Log out
      </NiceButton>
    </div>
  );
};
