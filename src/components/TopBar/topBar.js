import React from "react";
import Button from "../Button/button";
import styles from "./topBar.module.scss";
import { Logo } from "../../icons/index";
const ButtonData = [
  { type: "primary", title: "Özelikler" },
  { type: "primary", title: "Fiyat" },
  { type: "primary", title: "İletişim" },
  { type: "secondary", title: "Uygulamaya Git" },
];

export default function TopBar() {
  return (
    <div className={styles.TopBarContainer}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.links}>
        {ButtonData.map((item) => {
          return <Button type={item.type} title={item.title} />;
        })}
      </div>
    </div>
  );
}
