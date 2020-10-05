import React from "react";
import styles from "./features.scss";

export default function Features({ title, children }) {
  return (
    <div className={styles.FeaturesCard}>
      {children}
      <div className={styles.CardTitle}>{title}</div>
    </div>
  );
}
