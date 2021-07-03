import { Helmet } from "react-helmet-async";
import { GpBasicNavBar } from "../../../gp/components/pages/basicLayout/GpBasicNavBar";
import { rootPath } from "../../../misc/mist";

export const LoadingScreen: React.VFC<{ title?: string }> = ({
  title = "Tw",
}) => {
  return (
    <div className="BasicLayout">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <GpBasicNavBar appName="Tw" homePath={rootPath()} />
    </div>
  );
};
