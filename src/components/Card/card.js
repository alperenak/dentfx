import React from "react";
import styles from "./card.module.scss";
import Features from "./sub-components/features/features";

export default function Card(props) {
  return (
    <div className={styles.cardContainer}>
      <RenderByTypes {...props} />
    </div>
  );
}

function RenderByTypes(props) {
  let { type, title } = props;
  if (type === "features") {
    return <Features type={type} title={title} {...props} />;
  } else {
    return <div>hata</div>;
  }
}
