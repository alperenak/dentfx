import React from "react";

/*** Styles ***/
import styles from "./message.scss";

const Message = ({ image, title, content, time }) => {
  return (
    <div className={styles.message_container}>
      <div className={styles.avatar}>
        <img src={image} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{title}</div>
        <div className={styles.message}>{content}</div>
      </div>
      <div className={styles.time}>{time}</div>
    </div>
  );
};

export default Message;
