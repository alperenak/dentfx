import React, { useState, useEffect, Component } from "react";

/*** Styles ***/
import styles from "./rightMenu.scss";

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";

/*** Components ***/
import Message from "../Message/Message";
import Accordion from "./Accordion";

class RightMenu extends Component {
  state = {
    history: [],
    messages: [],
    totalMessage: 0,
  };

  componentDidMount = async () => {
    const userId = getCookie("user_id");
    const userType = getCookie("user_type");

    let res = await store.GetNewMessages();
    this.setState({
      messages: res.data.conversations,
      totalMessage: res.data.total,
    });
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
          id={message.id}
          key={i}
          unread={message.unread}
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
    let { history, messages, totalMessage } = this.state;
    return (
      <div className="rightBar">
        {getCookie("user_type") == "user" ? (
          <>
            <div className="rightBar__sectionHeader">Tedavi Geçmişi</div>
            <div className="rightBar__treatmentHistory">
              {history.length > 0 && this.renderHistory()}
            </div>
          </>
        ) : null}

        <div className="rightBar__sectionHeader">
          Yeni Mesajlar <span>({totalMessage})</span>
        </div>
        <div className="rightBar__messages">
          {messages.length > 0 && this.renderMessages()}
        </div>
      </div>
    );
  }
}

export default RightMenu;

//TODO_ERAN : TEDAVİ GEÇMİŞİ İKONLARI DÜZENLENECEK
//TODO_ERAN : HOVER STATE'I DÜZENLENECEK
