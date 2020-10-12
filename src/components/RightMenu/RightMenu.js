import React, { useState, useEffect, Component } from "react";

/*** Styles ***/
import styles from "./rightMenu.scss";

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";

/*** Components ***/
import Message from "../Message/Message";
import Accordion from "./Accordion";

const tempMessages = [
  {
    title: "Eran Koca",
    image: "https://picsum.photos/200 ",
    content: "Lorem Ipsum dolor ames blah blah s adasdf asdfa ",
    time: "11:47",
  },
  {
    title: "Mehmet Akdeniz",
    image: "https://picsum.photos/200 ",
    content: "Lorem Ipsum...",
    time: "11:47",
  },
  {
    title: "İsmail Duru",
    image: "https://picsum.photos/200 ",
    content: "Lorem Ipsum...",
    time: "11:47",
  },
];

class RightMenu extends Component {
  state = { history: [], messages: [] };

  componentDidMount = async () => {
    const userId = getCookie("user_id");
    const userType = getCookie("user_type");

    let res = await store.GetNewMessages();
    this.setState({ messages: res.data });

    if (userType === "dentist") {
      const response = await store.getDentistTreatmentHistory({
        dentistId: userId,
      });
      this.setState({ history: response.data });
    } else if (userType === "user") {
      const response = await store.getUserTreatmentHistory({ userId: userId });
      this.setState({ history: response.data });
    }
  };

  renderMessages = () => {
    let { messages } = this.state;

    return messages?.map((message, i) => {
      return (
        <Message
          image={message?.contact.avatar}
          title={message?.contact.name}
          content={message?.lastMessage.body}
          time={message?.lastMessage.createdAt}
          key={i}
        />
      );
    });
  };

  renderHistory = () => {
    let { history } = this.state;

    if (history.length < 0) return <div></div>;
    return history?.map((record, i) => {
      return <Accordion record={record} key={i} />;
    });
  };

  render() {
    let { history, messages } = this.state;
    return (
      <div className={styles.rightBar}>
        <div className={styles.sectionHeader}>Tedavi Geçmişi</div>
        <div className={styles.treatmentHistory}>
          {history.length > 0 && this.renderHistory()}
        </div>

        <div className={styles.sectionHeader}>
          New Messages <span>(2)</span>
        </div>
        <div className={styles.messages}>
          {messages.length > 0 && this.renderMessages()}
        </div>
      </div>
    );
  }
}

export default RightMenu;

//TODO_ERAN : TEDAVİ GEÇMİŞİ İKONLARI DÜZENLENECEK
//TODO_ERAN : HOVER STATE'I DÜZENLENECEK
