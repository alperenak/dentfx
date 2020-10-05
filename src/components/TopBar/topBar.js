import React from "react";
import Button from "../Button/button";
import styles from "./topBar.module.scss";
import { Logo } from "../../icons/index";
const ButtonData = [
  { type: "primary", title: "Özelikler" },
  { type: "primary", title: "Fiyat" },
  { type: "primary", title: "İletişim" },
  { type: "secondary", title: "Uygulamaya Git", to: '/login' },
];

export default function TopBar() {
  return (
    <div className={styles.TopBarContainer}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.links}>
        {ButtonData.map((item, i) => {
          return <Button key={i} type={item.type} title={item.title} to={item.to} mission={'link'} />;
        })}
      </div>
    </div>
  );
}
