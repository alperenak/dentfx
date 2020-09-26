import React from "react";
import styles from "./button.module.scss";

export default function Button({ type, ButtonStyle, style, title }) {
  return (
    <div className={`${styles.Button} ${styles[ButtonStyle]}`}>
      <RenderButton type={type} title={title} style={style} />
    </div>
  );
}

function RenderButton({ type, style, title }) {
  return <div className={`${styles[type]} ${styles[style]}`}>{title}</div>;
}
