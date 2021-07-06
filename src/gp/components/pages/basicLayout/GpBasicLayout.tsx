import Head from "next/head";
import { ReactElement } from "react";
import styles from "./GpBasicLayout.module.scss";
import { GpBasicLayoutFooter } from "./GpBasicLayoutFooter";
import { GpBasicNavBar, GpBasicNavBarProps } from "./GpBasicNavBar";

export type GpBasicLayoutProps = GpBasicNavBarProps & {
  title: string;
  FooterContent: ReactElement;
  NavBarContent: ReactElement;
};

export const GpBasicLayout: React.FC<GpBasicLayoutProps> = ({
  appName,
  children,
  FooterContent,
  homePath,
  NavBarContent,
  title,
}) => {
  return (
    <div className="BasicLayout">
      <Head>
        <title>{title}</title>
      </Head>
      <GpBasicNavBar {...{ appName, homePath }}>{NavBarContent}</GpBasicNavBar>
      <div className={styles.main}>
        <div className="u-container">{children}</div>
      </div>
      <GpBasicLayoutFooter>{FooterContent}</GpBasicLayoutFooter>
    </div>
  );
};
