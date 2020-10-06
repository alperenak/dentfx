import React, { Component } from "react";
import Message from "../../components/Message/Message";

/*** Styles ***/
import styles from "./messages.scss";

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

let messages = [
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
            {dentists.map((dentist, i) => {
              return (
                <div className={styles.dentist}>
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
  }
}

export default Messages;
