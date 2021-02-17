import React, { Component } from "react";

/*** Styles ***/
import styles from "./messages.scss";

/*** Icons ***/
import noQuestionIllustration from "../../icons/illustration_1.svg";
import addCircle from "../../icons/Icons_add-circle.svg";

/*** Utils ***/
import store from "../../store";

/*** Components ***/
import Message from "../../components/Message/Message";
import { getCookie } from "../../utils/cookie";

class Messages extends Component {
  state = {
    search: "",
    messages: [],
    dentists: [],
    files: [],
    path: null,
    conversationId: null,
    sender: {
      name: "Erhan Koca",
      clinic: "Medicana Hospitals Group",
      avatar: "https://picsum.photos/200",
      onlineStatus: false,
    },
    messageToSend: "",
  };

  componentDidMount = async () => {
    const path = this.props.location.pathname.split("/messages/");
    this.setState({ path: path[1] });

    let res = await store.GetConversations();
    this.setState({ messages: res.data });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSendMessage = () => {
    let message = {
      isMine: true,
      time: new Date().getHours() + ":" + new Date().getMinutes(),
      date: "07.10.2020",
      message: this.state.messageToSend,
    };

    this.setState({
      singleMessages: [...this.state.singleMessages, message],
      messageToSend: "",
    });
  };

  renderNoQuestion = () => {
    return (
      <div className="noQuestionContainer">
        <img src={noQuestionIllustration} alt="" />
        <div className="noQuestionContainer__title">
          Burada hiç bir soru yok
        </div>
        <button>Hadi soru sor!</button>
      </div>
    );
  };

  renderNewQuestion = () => {};

  renderMainList = () => {
    let { search, messages } = this.state;

    return (
      <div className="messagesContainer">
        <div className="messagesContainer__searchSection">
          <input
            type="text"
            name="search"
            value={search}
            onChange={this.onChange}
            placeholder="Search messages or user"
          />
        </div>

        {getCookie("user_type") === "user" && (
          <div
            className="messagesContainer__newMessageBtn"
            onClick={() => (window.location = "/messages/new")}
          >
            <img src={addCircle} alt="" />
            <div>Yeni Mesaj</div>
          </div>
        )}

        <div className="messagesContainer__messagesSection">
          <div className="messagesContainer__messagesSection__header">
            Mesajlar
          </div>
          <div className={styles.messageContainer}>
            {messages.map((message, i) => {
              return (
                <Message
                  image={message?.contact.avatar}
                  title={message?.contact.name}
                  content={message?.lastMessage.body}
                  time={message?.lastMessage.createdAt}
                  key={i}
                  id={message.id}
                  unread={message.unread}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  render() {
    let { messages } = this.state;

    return (
      <>
        {messages.length === 0
          ? this.renderNoQuestion()
          : this.renderMainList()}
      </>
    );
  }
}

export default Messages;
