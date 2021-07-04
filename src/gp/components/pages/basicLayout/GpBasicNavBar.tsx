import Link from "next/link";
import styles from "./GpBasicNavBar.module.scss";

export type GpBasicNavBarProps = {
  appName: string;
  homePath: string;
};

export const GpBasicNavBar: React.FC<GpBasicNavBarProps> = ({
  appName,
  homePath,
}) => {
  return (
    <div className={styles.root}>
      <div className="u-container">
        <Link href={homePath}>{appName}</Link>
      </div>
    </div>
  );
};
