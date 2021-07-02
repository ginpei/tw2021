import { useParams } from "react-router-dom";
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

  if (user === undefined) {
    return <div>Loading...</div>;
  }

  if (user === null) {
    return <NotFoundScreen />;
  }

  return (
    <BasicLayout title={`Home of ${user.name}`}>
      <h1>{user.name}</h1>
    </BasicLayout>
  );
};
