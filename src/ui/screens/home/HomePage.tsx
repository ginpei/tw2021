import Link from "next/link";
import { useState } from "react";
import { createMessage } from "../../../data/message";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
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

  const onSubmit = () => {
    console.log("# message", message);
    setMessage(createMessage());
  };

  return (
    <div className="ActiveMessageForm">
      <MessageForm
        message={message}
        onChange={setMessage}
        onSubmit={onSubmit}
      />
    </div>
  );
};
