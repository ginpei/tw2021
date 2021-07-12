import Link from "next/link";
import { useState } from "react";
import { saveMessage } from "../../../data/messageClient";
import { createMessage } from "../../../data/pureMessage";
import { assureError } from "../../../misc/util";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
import { ErrorMessage } from "../../stateless/ErrorMessage";
import { MessageForm } from "../../stateless/MessageForm";
import { loginPath } from "../login/loginMeta";
import { userHomePath } from "../userHome/userHomeMeta";
import { GlobalTimeline } from "./GlobalTimeline";

export const HomePage: React.FC = () => {
  return (
    <BasicLayout title="Home">
      <h1>HOME</h1>
      <p>
        <Link href={loginPath()}>Login</Link>
      </p>
      <p>
        <Link href={userHomePath("ginpei_jp")}>@ginpei_jp</Link>
      </p>
      <ActiveMessageForm />
      <GlobalTimeline />
    </BasicLayout>
  );
};

const ActiveMessageForm: React.FC = () => {
  const [message, setMessage] = useState(createMessage());
  const [error, setError] = useState<Error | null>(null);

  const onSubmit = async () => {
    setError(null);
    try {
      await saveMessage(undefined, message);
      setMessage(createMessage());
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
