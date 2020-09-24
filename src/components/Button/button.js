import React from "react";
import styles from "./button.module.scss";

export default function Button({ type, ButtonStyle, className, title }) {
  return (
    <div className={`${styles.Button} ${styles[ButtonStyle]}`}>
      <RenderButton type={type} title={title} className={className} />
    </div>
  );
}

function RenderButton({ type, className, title }) {
  return <div className={`${styles[type]} ${styles[className]}`}>{title}</div>;
}
