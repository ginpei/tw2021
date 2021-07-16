import Link from "next/link";
import { useState } from "react";
import { useLoginUser } from "../../../data/loginUserHooks";
import { createPureMessage } from "../../../data/message";
import { saveMessage } from "../../../data/messageClient";
import { assureError } from "../../../misc/util";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
import { ErrorMessage } from "../../stateless/ErrorMessage";
import { MessageForm } from "../../stateless/MessageForm";
import { loginPath } from "../login/loginMeta";
import { userHomePath } from "../userHome/userHomeMeta";
import { GlobalTimeline } from "./GlobalTimeline";

export const HomePage: React.FC = () => {
  const user = useLoginUser();

  return (
    <BasicLayout title="Home">
      <h1>HOME</h1>
      {user.loggedIn ? (
        <ActiveMessageForm />
      ) : (
        <p>
          <Link href={loginPath()}>Login</Link>
        </p>
      )}
      <GlobalTimeline />
    </BasicLayout>
  );
};

const ActiveMessageForm: React.FC = () => {
  const [message, setMessage] = useState(createPureMessage());
  const [error, setError] = useState<Error | null>(null);

  const onSubmit = async () => {
    setError(null);
    try {
      await saveMessage(undefined, message);
      setMessage(createPureMessage());
    } catch (newError) {
      setError(assureError(newError));
    }
  };

  return (
    <div className="ActiveMessageForm">
      {error && <ErrorMessage error={error} />}
      <MessageForm
        message={message}
        onChange={setMessage}
        onSubmit={onSubmit}
      />
    </div>
  );
};
