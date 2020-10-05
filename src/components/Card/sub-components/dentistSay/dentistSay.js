import React from "react";
import { Star, StarDisable } from "../../../../icons";
import styles from "./dentistSay.scss";

export default function DentistSay(props) {
  let { name, starCount, content, avatar } = props;
  return (
    <div className={styles.DentistSay}>
      <div className={styles.Top}>
        <div className={styles.avatar}>
          <img src={avatar} />
        </div>
        <div className={styles.otherDetails}>
          <div className={styles.name}>{name}</div>
          <div className={styles.star}>
            <RenderStars starCount={starCount} />
          </div>
        </div>
      </div>
      <div className={styles.Content}>{content}</div>
    </div>
  );
}

function RenderStars({ starCount }) {
  const disableCount = 5 - starCount;
  return (
    <>
      <RenderActiveStar activeCount={starCount} />
      <RenderDisableStar disableCount={disableCount} />
    </>
  );
}
function RenderDisableStar({ disableCount }) {
  let arr = [];
  for (let i = 0; i < disableCount; i++) {
    arr.push("");
  }
  if (disableCount !== 0) {
    return (
      <>
        {arr.map((item, i) => {
          return <StarDisable key={i} className={styles.starIcon} />;
        })}
      </>
    );
  } else return <div></div>;
}
function RenderActiveStar({ activeCount }) {
  let arr = [];
  for (let i = 0; i < activeCount; i++) {
    arr.push("");
  }

  if (activeCount !== 0) {
    return (
      <>
        {arr.map((item, i) => {
          return <Star key={i} className={styles.starIcon} />;
        })}
      </>
    );
  } else return <div></div>;
}
