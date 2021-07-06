import Link from "next/link";
import styles from "./GpBasicNavBar.module.scss";

export type GpBasicNavBarProps = {
  appName: string;
  homePath: string;
};

export const GpBasicNavBar: React.FC<GpBasicNavBarProps> = ({
  appName,
  children,
  homePath,
}) => {
  return (
    <div className={styles.root}>
      <div className="u-container">
        <div className={styles.frame}>
          <div className={styles.start}>
            <Link href={homePath}>{appName}</Link>
          </div>
          <div className={styles.end}>{children}</div>
        </div>
      </div>
    </div>
  );
};
