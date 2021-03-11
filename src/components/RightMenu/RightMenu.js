import React, { Component } from 'react';

/*** Styles ***/
import './rightMenu.scss';

/*** Utils ***/
import store from '../../store';
import { getCookie } from '../../utils/cookie';

/*** Components ***/
import Message from '../Message/Message';
import Accordion from './Accordion';

class RightMenu extends Component {
  state = {
    history: [],
    messages: [],
    totalMessage: 0,
  };

  componentDidMount = async () => {
    const userId = getCookie('user_id');
    const userType = getCookie('user_type');

    let res = await store.GetNewMessages();
    this.setState({
      messages: res.data.conversations,
      totalMessage: res.data.total,
    });
    if (userType === 'dentist') {
      const response = await store.getDentistTreatmentHistory({
        dentistId: userId,
      });
      this.setState({ history: response.data });
    } else if (userType === 'user') {
      const response = await store.getUserTreatmentHistory({ userId: userId });
      this.setState({ history: response.data });
    }
  };

  renderMessages = () => {
    let { messages } = this.state;

    return messages ? (
      messages.map((message, i) => {
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
      })
    ) : (
      <h6>yeni mesaj yoktur</h6>
    );
  };

  renderHistory = () => {
    let { history } = this.state;
    if (history.length < 0)
      return (
        <div>
          <h6>tedavi geçmişiniz yoktur</h6>
        </div>
      );
    return history ? (
      history.map((record, i) => {
        return <Accordion record={record} key={i} />;
      })
    ) : (
      <h6>tedavi geçmişiniz yoktur</h6>
    );
  };

  render() {
    return '';
    // <div className='rightBar'>
    //   {getCookie('user_type') == 'user' ? (
    //     <>
    //       <div className='rightBar__sectionHeader'>Tedavi Geçmişi</div>
    //       <div className='rightBar__treatmentHistory'>
    //         {history.length > 0 && this.renderHistory()}
    //       </div>
    //     </>
    //   ) : null}

    //   <div className='rightBar__sectionHeader'>
    //     Yeni Mesajlar <span>({totalMessage})</span>
    //   </div>
    //   <div className='rightBar__messages'>
    //     {messages.length > 0 && this.renderMessages()}
    //   </div>
    // </div>
  }
}

export default RightMenu;

//TODO_ERAN : TEDAVİ GEÇMİŞİ İKONLARI DÜZENLENECEK
//TODO_ERAN : HOVER STATE'I DÜZENLENECEK
