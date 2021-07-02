import { useParams } from "react-router-dom";
import { useUserRecentMessages } from "../../../data/messageHooks";
import { useUserByScreenName } from "../../../data/userDbHooks";
import { rootPath } from "../../../misc/mist";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
import { NotFoundScreen } from "../notFound/NotFoundScreen";

type ParamNames = "screenName";

export function userHomePath(screenName: string): string {
  return `${rootPath()}${screenName}/`;
}

export const UserHomePage: React.FC = () => {
  const params = useParams<Record<ParamNames, string>>();
  const [user] = useUserByScreenName(params.screenName);
  const [messages] = useUserRecentMessages(user?.id ?? undefined);

  if (user === null) {
    return <NotFoundScreen />;
  }

  if (user === undefined) {
    // TODO loading screen
    return <div>Loading...</div>;
  }

  return (
    <BasicLayout title={`Home of ${user.name}`}>
      <h1>{user.name}</h1>
      <div className="messages">
        {messages ? (
          messages.map((message) => <div key={message.id}>{message.body}</div>)
        ) : (
          <div>...</div>
        )}
      </div>
    </BasicLayout>
  );
};
