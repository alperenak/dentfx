import React from "react";
import Button from "../../../Button/button";
import styles from "./bigPackages.module.scss";

export default function BigPackages({
  packageName,
  children,
  packagePrice,
  packageDescription,
  packagesFeatures,
  buttonTitle,
}) {
  return (
    <div className={styles.PackagesContainer}>
      <div className={styles.icon}>{children}</div>
      <div className={styles.packageName}>{packageName}</div>
      <div className={styles.packagePrice}>
        {packagePrice}
        <span className={styles.currency}>TL</span>
        <span className={styles.slash}>/</span>
        <span className={styles.year}>YILLIK</span>
      </div>
      <div className={styles.packageDescription}>{packageDescription}</div>
      <div className={styles.packagesFeatures}>
        {packagesFeatures.map((item, i) => {
          return (
            <div key={i} className={styles.PackagesFeaturesLabel}>
              {item}
            </div>
          );
        })}
      </div>
      <Button title={buttonTitle} type={"tertiary"} style={"packages"} />
    </div>
  );
}
