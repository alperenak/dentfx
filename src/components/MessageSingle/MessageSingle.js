import React from "react";

/*** Styles ***/
import styles from "./messagesingle.scss";

const MessageSingle = ({ message, sender }) => {
  return (
    <div
      className={`${styles.messageContainer} ${
        message.isMine ? styles.isMine : styles.notMine
      }`}
    >
      {!message.isMine ? (
        <div className={styles.avatar}>
          <img src={sender.avatar} alt="" />
        </div>
      ) : (
        ""
      )}

      <div
        className={`${styles.messageBody} ${
          message.isMine ? styles.isMine : styles.notMine
        }`}
      >
        <div className={`${styles.message}`}>{message.message}</div>

        <div className={styles.time}>{message.time}</div>
      </div>
    </div>
  );
};

export default MessageSingle;
