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
  state = { history: [], messages: tempMessages };

  componentDidMount = async () => {
    const userId = getCookie("user_id");
    const response = await store.getTreatmentHistory(userId);

    this.setState({ history: response.data });
  };

  renderMessages = () => {
    let { messages } = this.state;

    return messages.map((message, i) => {
      return (
        <Message
          image={message.image}
          title={message.title}
          content={message.content}
          time={message.time}
          key={i}
        />
      );
    });
  };

  renderHistory = () => {
    let { history } = this.state;

    return history.map((record, i) => {
      return <Accordion record={record} key={i} />;
    });
  };

  render() {
    return (
      <div className={styles.rightBar}>
        <div className={styles.sectionHeader}>Tedavi Geçmişi</div>
        <div className={styles.treatmentHistory}>{this.renderHistory()}</div>

        <div className={styles.sectionHeader}>
          New Messages <span>(2)</span>
        </div>
        <div className={styles.messages}>{this.renderMessages()}</div>
      </div>
    );
  }
}

export default RightMenu;

//TODO_ERAN : TEDAVİ GEÇMİŞİ İKONLARI DÜZENLENECEK
//TODO_ERAN : HOVER STATE'I DÜZENLENECEK
