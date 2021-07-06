import { useRouter } from "next/router";
import { UserHomePage } from "../../ui/screens/userHome/UserHomePage";

const UserHomeRoute: React.FC = () => {
  const { screenName } = useRouter().query as Record<"screenName", string>;

  return <UserHomePage screenName={screenName} />;
};

export default UserHomeRoute;
