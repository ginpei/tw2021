import { GpBasicLayout } from "../../../gp/components/pages/basicLayout/GpBasicLayout";
import { homePath } from "../../screens/home/homeMeta";
import { BasicLayoutFooter } from "./BasicLayoutFooter";

export const BasicLayout: React.FC<{ title: string }> = ({
  children,
  title,
}) => {
  return (
    <GpBasicLayout
      appName="Tw"
      FooterContent={<BasicLayoutFooter />}
      homePath={homePath()}
      title={title}
    >
      {children}
    </GpBasicLayout>
  );
};
