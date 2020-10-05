import React from "react";
import styles from "./card.scss";
import Features from "./sub-components/features/features";
import DentistSay from "./sub-components/dentistSay/dentistSay";
import PropTypes from "prop-types";
import Packages from "./sub-components/packages/packages";
import BigPackages from "./sub-components/bigPackages/bigPackages";

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
  } else if (type === "packages") {
    return <Packages {...props} />;
  } else if (type === "bigPackages") {
    return <BigPackages {...props} />;
  } else {
    return <div>hata</div>;
  }
}

Card.propTypes = {
  type: PropTypes.string
};
