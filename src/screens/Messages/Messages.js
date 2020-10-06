import React, { Component } from "react";
import Message from "../../components/Message/Message";

/*** Styles ***/
import styles from "./messages.scss";

/*** Icons ***/
import noQuestionIllustration from "../../icons/illustration_1.svg";
import { string } from "prop-types";

let dentists = [
  {
    name: " Dt. Brody W.",
    image: "https://picsum.photos/200",
    onlineStatus: true,
  },
  {
    name: " Dt. Brody W.",
    image: "https://picsum.photos/200",
    onlineStatus: true,
  },
  {
    name: " Dt. Brody W.",
    image: "https://picsum.photos/200",
    onlineStatus: true,
  },
  {
    name: " Dt. Brody W.",
    image: "https://picsum.photos/200",
    onlineStatus: true,
  },
  {
    name: " Dt. Brody W.",
    image: "https://picsum.photos/200",
    onlineStatus: true,
  },
  {
    name: " Dt. Brody W.",
    image: "https://picsum.photos/200",
    onlineStatus: false,
  },
  {
    name: " Dt. Brody W.",
    image: "https://picsum.photos/200",
    onlineStatus: false,
  },
  {
    name: " Dt. Brody W.",
    image: "https://picsum.photos/200",
    onlineStatus: true,
  },
  {
    name: " Dt. Brody W.",
    image: "https://picsum.photos/200",
    onlineStatus: true,
  },
  {
    name: " Dt. Brody W.",
    image: "https://picsum.photos/200",
    onlineStatus: false,
  },
];

let messagesArray = [
  {
    sender: {
      name: "Erhan Koca",
      avatar: "https://picsum.photos/200",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, illum. Ullam perspiciatis officiis doloribus aperiam debitis totam amet, tenetur reiciendis.",
    time: "11:47",
  },
  {
    sender: {
      name: "John Doe",
      avatar: "https://picsum.photos/200",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, illum. Ullam perspiciatis officiis doloribus aperiam debitis totam amet, tenetur reiciendis.",
    time: "11:47",
  },
  {
    sender: {
      name: "Jane Doe",
      avatar: "https://picsum.photos/200",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, illum. Ullam perspiciatis officiis doloribus aperiam debitis totam amet, tenetur reiciendis.",
    time: "11:47",
  },
  {
    sender: {
      name: "Alan Turing",
      avatar: "https://picsum.photos/200",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, illum. Ullam perspiciatis officiis doloribus aperiam debitis totam amet, tenetur reiciendis.",
    time: "11:47",
  },
  {
    sender: {
      name: "Clark Maxwell",
      avatar: "https://picsum.photos/200",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, illum. Ullam perspiciatis officiis doloribus aperiam debitis totam amet, tenetur reiciendis.",
    time: "11:47",
  },
  {
    sender: {
      name: "Michael Clifford",
      avatar: "https://picsum.photos/200",
    },
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem animi fugiat cum beatae minima. Quaerat, amet! Beatae, sed iure? Eum, nemo tempora mollitia nam suscipit animi dolorum tempore illo a?",
    time: "11:47",
  },
];

class Messages extends Component {
  state = {
    search: "",
    messages: messagesArray,
    dentists: [],
    files: [],
    path: null,
  };

  componentDidMount = () => {
    const path = this.props.location.pathname.split("/messages/");
    this.setState({ path: path[1] });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFileChange = async (e) => {
    e.preventDefault();

    await this.setState({ files: e.target.files });
    console.log(this.state.files);
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

        <div className={styles.favDentistSection}>
          <div className={styles.header}>Favorite Dentists</div>

          <div className={styles.dentistContainer}>
            {dentists.map((dentist, i) => {
              return (
                <div className={styles.dentist} key={i}>
                  <div className={styles.imageContainer}>
                    <img src={dentist.image} alt="" />
                    <div
                      className={
                        dentist.onlineStatus ? styles.online : styles.offline
                      }
                    ></div>
                  </div>
                  <div className={styles.name}>{dentist.name}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.messagesSection}>
          <div className={styles.header}>Messages</div>
          <div className={styles.messageContainer}>
            {messages.map((message, i) => {
              return (
                <Message
                  image={message.sender.avatar}
                  title={message.sender.name}
                  content={message.content}
                  time={message.time}
                  key={i}
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
