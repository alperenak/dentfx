import React, { Component } from "react";

/*** Styles ***/
import styles from "./messages.scss";

class Messages extends Component {
  state = { search: "" };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let { search } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.searchSection}>
          <input
            type="text"
            name="search"
            value={search}
            onChange={this.onChange}
            placeholder="Search messages or user"
          />
        </div>

        <div className={styles.favDentistSection}>
          <div className={styles.header}>Favorite Dentists</div>

          <div className={styles.dentistContainer}>
            //TODO: ADD DENTIST INFO
          </div>
        </div>

        <div className={styles.messagesSection}>
          <div className={styles.header}>Messages</div>
          <div className={styles.messageContainer}>
            //TODO: ADD MESSAGE INFO
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
