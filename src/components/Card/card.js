import React from "react";
import styles from "./card.module.scss";
import Features from "./sub-components/features/features";
import DentistSay from "./sub-components/dentistSay/dentistSay";

export default function Card(props) {
  return (
    <div className={styles.cardContainer}>
      <RenderByTypes {...props} />
    </div>
  );
}

function RenderByTypes(props) {
  let { type } = props;
  if (type === "features") {
    return <Features {...props} />;
  } else if (type === "dentistSay") {
    return <DentistSay {...props} />;
  } else {
    return <div>hata</div>;
  }
}
