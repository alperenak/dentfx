import React from "react";
import styles from "./packages.module.scss";

export default function Packages({ children, title, description }) {
  console.log(children);
  return (
    <div className={styles.PackagesCard}>
      <div className={styles.avatar}>
        <div className={styles.icon}>{children}</div>
      </div>
      <div className={styles.packagesText}>
        <div className={styles.packagesTitle}>{title}</div>
        <div className={styles.packagesDescription}>{description}</div>
      </div>
    </div>
  );
}
