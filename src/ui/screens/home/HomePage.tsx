import Link from "next/link";
import { BasicLayout } from "../../layouts/basic/BasicLayout";
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
      <GlobalTimeline />
    </BasicLayout>
  );
};
