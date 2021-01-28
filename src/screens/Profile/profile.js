import React, { Component, createRef, useEffect, useState } from 'react';

/*** Utils ***/
import store from '../../store';
import { getCookie } from '../../utils/cookie';

/*** Styles ***/
import styles from './profile.scss';

/*** Icons ***/
import editIcon from '../../icons/edit-icon.svg';
import birthdayIcon from '../../icons/birthday-icon.svg';
import phoneIcon from '../../icons/phone-icon.svg';
import emailIcon from '../../icons/email-icon.svg';
import locationIcon from '../../icons/location-icon_1.svg';
import languageSettingsIcon from '../../icons/language-settings-icon.svg';
import notificationIcon from '../../icons/notification-settings-icon.svg';
import profileSettingsIcon from '../../icons/profile-settings-icon.svg';
import chevronRightIcon from '../../icons/Chevron-right.svg';
import DatePicker from 'react-datepicker';
//*** Components ***/
import Input from '../../components/Input';
import Switch from 'react-input-switch';
import Dropzone, { useDropzone } from 'react-dropzone';
import Map from '../../components/Map/map';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const dropzoneRef = createRef();

const openDialog = () => {
  // Note that the ref is set async,
  // so it might be null at some point
  if (dropzoneRef.current) {
    dropzoneRef.current.open();
  }
};

export default function Profile() {
  //#region General States
  const [user, setUser] = useState();
  const [userType, setUserType] = useState();
  const [selectedTab, setSelectedTab] = useState(1);
  //#endregion

  //#region Profile Settings States
  const [profileName, setProfileName] = useState(user?.name);
  const [profileSurname, setProfileSurname] = useState(user?.surname);
  const [profileEmail, setProfileEmail] = useState(user?.email);
  const [profileBirthday, setProfileBirthday] = useState(
    new Date().toLocaleDateString()
  );
  const [profilePhone, setProfilePhone] = useState(user?.phone);
  //#endregion

  //#region Notifications States
  const [notification1, setNotification1] = useState(false);
  const [notification2, setNotification2] = useState(false);
  const [notification3, setNotification3] = useState(false);
  //#endregion

  //#region Language Settings States
  const [selectedLanguage, setSelectedLanguage] = useState('Türkçe');
  //#endregion

  //#WYSIWYG
  // const state = {
  //   editorState: EditorState.createEmpty(),
  // };
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorStatee) => {
    setEditorState(editorStatee);
  };

  async function getUser() {
    let userType = getCookie('user_type');
    setUserType(userType);

    if (userType === 'dentist') {
      let res = await store.getDentistDetail({
        dentistId: getCookie('user_id'),
      });

      setUser(res.data);
      setProfileName(res.data?.name);
      setProfileSurname(res.data?.surname);
      setProfileEmail(res.data?.email);
      setProfileBirthday(new Date().toLocaleDateString());
      setProfilePhone(res.data?.phone);
    } else if (userType === 'user') {
      let res = await store.getUserDetail({ userId: getCookie('user_id') });
      setUser(res.data);
      setProfileName(res.data.name);
      setProfileSurname(res.data.surname);
      setProfileEmail(res.data.email);
      setProfileBirthday(new Date().toLocaleDateString());
      setProfilePhone(res.data.phone);
    } else if (userType === 'clinic') {
      let res = await store.getClinicDetail({ clinicId: getCookie('user_id') });
      setUser(res.data);
      console.log(res.data);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  function overviewTab() {
    return (
      <div className='settingsWrapper'>
        <div className='row'>
          <form>
            <div className={'item profileInfoPart'}>
              <div className={'content'}>
                <div className='form-row'>
                  <div className='col-md-4 mb-3'>
                    <label for='validationDefault01'>İsim</label>
                    <input
                      type='text'
                      className='form-control'
                      id='validationDefault01'
                      value={`${user?.name} ${
                        user?.surname ? user.surname : ''
                      }`}
                      required
                    />
                  </div>
                  <div className='col-md-4 mb-3'>
                    <label for='validationDefault02'>Telefon Numarasi</label>
                    <input
                      type='text'
                      className='form-control'
                      id='validationDefault02'
                      value={user?.phone}
                      required
                    />
                  </div>
                  <div className='col-md-4 mb-3'>
                    <label for='inputTC'>Country</label>
                    <input
                      type='text'
                      className='form-control'
                      id='inputCountry'
                      value={user?.country}
                    />
                  </div>
                  <div className='col-md-4 mb-3'>
                    <label for='inputTC'>City</label>
                    <input
                      type='text'
                      className='form-control'
                      id='inputCity'
                      value={user?.city}
                    />
                  </div>
                  <div className='col-md-4 mb-3'>
                    <label for='inputTC'>Address</label>
                    <input
                      type='text'
                      className='form-control'
                      id='inputAddress'
                      value={user?.address}
                    />
                  </div>
                  <div className='col-md-12 mb-3'>
                    <Map clinics={user} />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  function aboutUsTab() {
    return (
      <div className='settingsWrapper'>
        <div className='row'>
          <div>
            <Editor
              editorState={editorState}
              wrapperClassName='demo-wrapper'
              editorClassName='demo-editor'
              onEditorStateChange={onEditorStateChange}
            />
          </div>
        </div>
      </div>
    );
  }

  function galleryTab() {
    return (
      <div className='settingsWrapper'>
        <div className='row'>
          <div>
            <h2>Carousel to be</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='profile'>
      <div className='profile__profileCard'>
        <img
          className='profile__profileCard__profileImage'
          src={user?.avatar}
          alt='avatar'
        />
        <Dropzonesss />
      </div>
      <div className='profile__profileName'>
        {`${user?.name} ${user?.surname ? user.surname : ''}`}
      </div>
      <div className='profile__tabs'>
        <div
          onClick={() => setSelectedTab(0)}
          className={`${'profile__tabs__tab'} ${
            selectedTab === 0 ? 'profile__tabs__selected' : ''
          }`}
        >
          Genel
        </div>
        <div
          onClick={() => setSelectedTab(1)}
          className={`${'profile__tabs__tab'} ${
            selectedTab === 1 ? 'profile__tabs__selected' : ''
          }`}
        >
          Hakkimizda
        </div>
        <div
          onClick={() => setSelectedTab(2)}
          className={`${'profile__tabs__tab'} ${
            selectedTab === 2 ? 'profile__tabs__selected' : ''
          }`}
        >
          Gallery
        </div>
      </div>

      <div className={styles.tabContent}>
        {selectedTab === 0 && overviewTab()}
        {selectedTab === 1 && aboutUsTab()}
        {selectedTab === 2 && galleryTab()}
      </div>
    </div>
  );
}

function Dropzonesss(props) {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className='profile__profileCard__editIcon__2' onClick={open}>
      <input {...getInputProps()} />
      <img src={editIcon} alt='' />
    </div>
  );
}
