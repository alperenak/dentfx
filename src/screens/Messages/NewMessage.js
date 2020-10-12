import React, { Component } from "react";

import styles from "./messages.scss";

class NewMessage extends Component {
  state = {};
  render() {
    return (
      <div className={styles.newQuestionContainer}>
        <div className={styles.headerSection}>
          <div className={styles.header}>
            Choose a dentist or clinic and send a message!
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem illo debitis voluptatibus, sunt non nihil veniam
            aperiam eligendi nesciunt libero iure aliquid magnam error!
          </div>
        </div>
        <div className={styles.mainSection}>
          <div className={styles.inputWrapper}>
            <label htmlFor="dentist">Dentist or Clinic</label>
            <input type="text" name="dentist" placeholder="Florya Hospi" />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="dentist">Your Message</label>
            <textarea name="message"></textarea>
          </div>

          {/* TODO: ADD FUNCTIONALITY TO FILE INPUT  */}
          <div className={styles.photoUploadWrapper}>
            <div className={styles.photoUpload}>
              <input type="file" name="" id="" onChange={this.onFileChange} />
            </div>
          </div>

          <button className={styles.sendMessageButton}>Send message</button>
        </div>
      </div>
    );
  }
}

export default NewMessage;
