import React, { Component } from 'react';

import styles from './messages.scss';

import backButton from '../../icons/Chevron-right.svg';
import detailsIcon from '../../icons/three-dots-more-indicator.svg';
import addFile from '../../icons/add-file.svg';
import sendButton from '../../icons/send-button.svg';

import store from '../../store';

import MessageSingle from '../../components/MessageSingle/MessageSingle';

class MessageDetails extends Component {
  state = {
    conversationID: null,
    singleMessages: [],
    sender: {},
    messageToSend: '',
  };
  componentDidMount = async () => {
    let conversationID = this.props.match.params.id;

    this.setState({ conversationID });

    await this.getMessageDetails();
  };

  getMessageDetails = async () => {
    let conversationID = this.props.match.params.id;

    let res = await store.GetMessageDetails({ conversationID });

    this.setState({
      singleMessages: res.data.messages,
      sender: res.data.contact,
    });
  };

  onSendMessage = async () => {
    let { conversationID, messageToSend, sender } = this.state;
    let receiver = { id: sender.id, userType: sender.userType };

    await store.SendMessage({
      conversationID,
      receiver,
      body: messageToSend,
      attachements: [],
    });

    await this.getMessageDetails();
    this.setState({ messageToSend: '' });

    var list = document.getElementById('list');
    list.scrollTop = list.offsetHeight;
  };

  onChange = (e) => {
    this.setState({ messageToSend: e.target.value });
  };

  render() {
    let { sender, singleMessages } = this.state;

    return (
      <div className="messageDetailsContainer">
        <div className="messageDetailsContainer__header">
          <div className="messageDetailsContainer__header__avatar">
            <img src={sender?.avatar} alt="" />
            <div
              className={
                sender?.onlineStatus
                  ? 'messageDetailsContainer__header__avatar__online'
                  : 'messageDetailsContainer__header__avatar__offline'
              }
            ></div>
          </div>
          <div className="messageDetailsContainer__header__senderInfo">
            <div className="messageDetailsContainer__header__senderInfo__name">
              {sender?.name}
            </div>
          </div>

          <div className="messageDetailsContainer__header__rightButtons">
            <div
              className="messageDetailsContainer__header__rightButtons__backButton"
              onClick={() => (window.location = '/messages')}
            >
              <img src={backButton} alt="" />
              <div className={styles.text}> Back </div>
            </div>

            <div className="messageDetailsContainer__header__rightButtons__detailsButton">
              <img src={detailsIcon} alt="" />
            </div>
          </div>
        </div>

        <div className="messageDetailsContainer__messagesContainer" id="list">
          {singleMessages.length > 0 &&
            singleMessages.map((message, i) => {
              if (message.isMine)
                return <MessageSingle message={message} key={i} />;
              else
                return (
                  <MessageSingle message={message} sender={sender} key={i} />
                );
            })}
        </div>

        <div className="messageDetailsContainer__sendMessageContainer">
          <div className={`${styles.leftIcon} ${styles.icon}`}>
            <img src={addFile} alt="" />
          </div>
          <div className="messageDetailsContainer__sendMessageContainer__inputContainer">
            <input
              type="text"
              name="messageToSend"
              onChange={this.onChange}
              value={this.state.messageToSend}
            />
          </div>

          <div
            className={`${
              styles.rightIcon
            } ${'messageDetailsContainer__sendMessageContainer__icon'}`}
            onClick={this.onSendMessage}
          >
            <img src={sendButton} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default MessageDetails;
