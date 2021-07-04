import { useRouter } from "next/router";
import { rootPath } from "../../src/misc/mist";
import { UserHomePage } from "../../src/ui/screens/userHome/UserHomePage";

export function userHomePath(screenName: string): string {
  return `${rootPath()}${screenName}/`;
}

const UserHomeRoute: React.FC = () => {
  const { screenName } = useRouter().query as Record<"screenName", string>;

  return <UserHomePage screenName={screenName} />;
};

export default UserHomeRoute;
