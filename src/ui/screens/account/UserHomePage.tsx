import { useParams } from "react-router-dom";
import { rootPath } from "../../../misc/mist";
import { BasicLayout } from "../../layouts/basic/BasicLayout";

type ParamNames = "screenName";

export function userHomePath(screenName: string): string {
  return `${rootPath()}${screenName}/`;
}

export const UserHomePage: React.FC = () => {
  const params = useParams<Record<ParamNames, string>>();

  return (
    <BasicLayout title={`Home of @${params.screenName}`}>
      <h1>@{params.screenName}</h1>
    </BasicLayout>
  );
};
