import React, { Component } from "react";

/*** Styles ***/
import styles from "./messages.scss";

/*** Icons ***/
import noQuestionIllustration from "../../icons/illustration_1.svg";

/*** Utils ***/
import store from "../../store";

/*** Components ***/
import Message from "../../components/Message/Message";

class Messages extends Component {
  state = {
    search: "",
    messages: [],
    //singleMessages: SingleMessagesArray,
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

  onFileChange = async (e) => {
    e.preventDefault();

    await this.setState({ files: e.target.files });
    console.log(this.state.files);
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
      <div className={styles.noQuestionContainer}>
        <img src={noQuestionIllustration} alt="" />
        <div className={styles.title}> There is no question.</div>
        <button>Ask questions now!</button>
      </div>
    );
  };

  renderNewQuestion = () => {
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
  };

  renderMainList = () => {
    let { search, messages } = this.state;

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

        <div className={styles.messagesSection}>
          <div className={styles.header}>Messages</div>
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
    let { messages, dentists, path } = this.state;

    if (path === "new") return this.renderNewQuestion();

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
