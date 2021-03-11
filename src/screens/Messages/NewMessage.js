import React, { Component } from 'react';

import './messages.scss';

import mailIcon from '../../icons/mail_blue.png';

import DragDrop from '../../components/DrapDrop/dragDrop';
import store from '../../store';

class NewMessage extends Component {
  state = { dentist: '', message: '', files: null, searchResults: null };

  onSubmit = async () => {
    let { message, files } = this.state;
    let formData = new FormData();
    formData.append('attachements', files[0]);

    formData.append('receiver', {
      id: '5f6eae3f8cf83c51024768b1',
      userType: 'dentist',
    });

    formData.append('body', message);

    await store.CreateNewChat(formData);
  };

  onFileChange = async (file) => {
    await this.setState({ files: { ...this.state.files, file } });
  };

  onChange = async (e) => {
    let { dentist } = this.state;

    this.setState({ [e.target.name]: e.target.value });

    if (e.target.name === 'dentist') {
      let res = await store.SearchChat({ keyword: dentist });
      this.setState({ searchResults: res.data });
    }
  };

  render() {
    let { dentist, message } = this.state;
    return (
      <div className="newQuestionContainer">
        <div className="newQuestionContainer__headerSection">
          <div className="newQuestionContainer__headerSection__icon">
            <img src={mailIcon} alt="" />
          </div>
          <div className="newQuestionContainer__headerSection__header">
            Klinik veya Diş Hekimlerinden birini seç ve mesaj atmaya başla!
          </div>
          <div className="newQuestionContainer__headerSection__content">
            Klinikler veya Diş Hekimlerinden birinin adını aşağıya yazman
            yeterli. Yazdığın klinik veya diş hekimi mevcutsa bir kutucuk
            çıkacak ona tıklayabilirsin.
          </div>
        </div>
        <div className="newQuestionContainer__mainSection">
          <div className="newQuestionContainer__mainSection__inputWrapper">
            <label htmlFor="dentist">Diş Hekimi veya Klinik</label>
            <input
              type="text"
              name="dentist"
              placeholder="Zafer Yılmaz"
              value={dentist}
              onChange={this.onChange}
            />
          </div>

          <div className="newQuestionContainer__mainSection__inputWrapper">
            <label htmlFor="dentist">Mesajın</label>
            <textarea
              name="message"
              value={message}
              onChange={this.onChange}
            ></textarea>
          </div>

          <label htmlFor="dentist">Tedavi için fotoğraf (opsiyonel) </label>
          <div className="dropDrag">
            <DragDrop onFileChange={this.onFileChange} />
          </div>
          <button
            className="newQuestionContainer__mainSection__sendMessageButton"
            onClick={this.onSubmit}
          >
            Send message
          </button>
        </div>
      </div>
    );
  }
}

export default NewMessage;
