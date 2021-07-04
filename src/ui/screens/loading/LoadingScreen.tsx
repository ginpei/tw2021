import Head from "next/head";
import { GpBasicNavBar } from "../../../gp/components/pages/basicLayout/GpBasicNavBar";
import { homePath } from "../home/homeMeta";

export const LoadingScreen: React.VFC<{ title?: string }> = ({
  title = "Tw",
}) => {
  return (
    <div className="BasicLayout">
      <Head>
        <title>{title}</title>
      </Head>
      <GpBasicNavBar appName="Tw" homePath={homePath()} />
    </div>
  );
};
