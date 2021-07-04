import { GpBasicLayout } from "../../../gp/components/pages/basicLayout/GpBasicLayout";
import { rootPath } from "../../../misc/mist";
import { BasicLayoutFooter } from "./BasicLayoutFooter";

export const BasicLayout: React.FC<{ title: string }> = ({
  children,
  title,
}) => {
  return (
    <GpBasicLayout
      appName="Tw"
      FooterContent={<BasicLayoutFooter />}
      homePath={rootPath()}
      title={title}
    >
      {children}
    </GpBasicLayout>
  );
};
