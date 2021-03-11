import React, { useState } from 'react';

/*** Styles ***/
import './message.scss';

const Message = ({ image, title, content, time, id, unread }) => {
  const [unreadMessages] = useState('bold');
  return (
    <div
      className="message_container"
      onClick={() => (window.location = `/messages/details/${id}`)}
    >
      <div className="message_container__avatar">
        <img src={image} alt="" />
        {unread && unread > 0 && <div className="unread">{unread}</div>}
      </div>

      <div className="message_container__content">
        <div className="message_container__content__name">{title}</div>
        <div
          className={`${'message_container__content__message'} ${
            unread && unread > 0 && unreadMessages
          }`}
        >
          {content}
        </div>
      </div>
      <div className={'message_container__time'}>{`${new Date(
        time
      ).getHours()}:${new Date(time).getMinutes()}`}</div>
    </div>
  );
};
export default Message;
