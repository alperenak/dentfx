/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';

/*** Utils ***/
import store from '../../store';
import { getCookie } from '../../utils/cookie';

/*** Styles ***/
import './profile.scss';

/*** Icons ***/
import editIcon from '../../icons/edit-icon.svg';
import deleteImage from '../../icons/trash.svg';
// import birthdayIcon from "../../icons/birthday-icon.svg";
// import phoneIcon from "../../icons/phone-icon.svg";
// import emailIcon from "../../icons/email-icon.svg";
// import locationIcon from "../../icons/location-icon_1.svg";
// import languageSettingsIcon from "../../icons/language-settings-icon.svg";
// import notificationIcon from "../../icons/notification-settings-icon.svg";
// import profileSettingsIcon from "../../icons/profile-settings-icon.svg";
// import chevronRightIcon from "../../icons/Chevron-right.svg";
// import DatePicker from "react-datepicker";
// //*** Components ***/
// import Input from "../../components/Input";
// import Switch from "react-input-switch";
import { useDropzone } from 'react-dropzone';
// import Map from "../../components/Map/map";
// import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
import { AlertContext } from '../../context/alertContext';
import Loading from '../../components/Loading';
import Map from '../../components/Map/map';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { EditorState, convertFromHTML } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { Carousel } from 'react-responsive-carousel';

export default function Profile() {
  //#region General States
  const [user, setUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [selectedTab, setSelectedTab] = useState(0);
  //#endregion

  //#region Profile Settings States
  const [profileFullName, setProfileFullName] = useState('');
  const [loading, setLoading] = useState(true);
  const [profileCountry, setProfileCountry] = useState('');
  const [profileCity, setProfileCity] = useState('');
  const [profileAddress, setProfileAddress] = useState('');
  const [setAlertboxActive, setAlertData] = useContext(AlertContext);
  const [profilePhone, setProfilePhone] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [carouselImages, setCarouselImages] = useState([]);
  // const [convertedContent, setConvertedContent] = useState('');
  //#endregion

  //#region Notifications States
  //#endregion

  //#region Language Settings States
  //#endregion

  //#WYSIWYG
  // const state = {
  //   editorState: EditorState.createEmpty(),
  // };

  // const exportHTML = () => {
  //   setConvertedContent(
  //     convertToHTML(this.state.editorState.getCurrentContent())
  //   );
  // };

  // const updateHTML = (e) => {
  //   e.preventDefault();
  //   this.setState({ convertedContent: e.target.value });
  // };

  // const importHTML = () => {
  //   const { editorState } = this.state;
  //   this.onChange(
  //     EditorState.push(
  //       editorState,
  //       convertFromHTML(this.state.convertedContent)
  //     )
  //   );
  // };

  const onEditorStateChange = (editorStatee) => {
    setEditorState(editorStatee);
  };

  async function getUser() {
    let userType = getCookie('user_type');

    if (userType === 'dentist') {
      let res = await store.getDentistDetail({
        dentistId: getCookie('user_id'),
      });

      setUser(res.data);
      setProfileFullName(`${res.data?.name} ${res.data?.surname}`);
      setProfilePhone(res.data?.phone);
    } else if (userType === 'user') {
      setLoading(true);
      store.getUserDetail({ userId: getCookie('user_id') }).then((data) => {
        setLoading(false);
        setUser(data.data);
        setProfileFullName(`${data.data?.name} ${data.data?.surname}`);
        setProfileCountry(data.data?.country);
        setProfileAddress(data.data?.address);
        setProfilePhoto(data.data?.avatar);
        setProfileCity(data.data?.city);
        setProfilePhone(data.data.phone);
      });
    } else if (userType === 'clinic') {
      setLoading(true);
      store.getClinicDetail({ clinicId: getCookie('user_id') }).then((data) => {
        setLoading(false);
        setProfileFullName(data.data?.name);
        setProfileCountry(data.data?.country);
        setProfileAddress(data.data?.address);
        setProfileCity(data.data?.city);
        setProfilePhoto(data.data?.avatar);
        setProfilePhone(data.data.phone);
        setCarouselImages(data.data?.gallery);

        // const blocksFromHTML = convertFromHTML(data.data?.description);
        // const inComingHTML = editorState.createFromBlockArray(
        //   blocksFromHTML.contentBlocks,
        //   blocksFromHTML.entityMap
        // );

        // setEditorState(EditorState.createWithContent(inComingHTML));
        // EditorState.push(editorState, convertFromHTML(data.data?.description));
      });
      // console.log(res.data);
    }
  }

  useEffect(() => {
    getUser().then(() => {});
  }, []);

  function overviewTab() {
    return (
      <>
        <div className="settingsWrapper">
          <div className="row">
            <form>
              <div className={'item profileInfoPart'}>
                <div className={'content'}>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationDefault01">İsim</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        value={profileFullName}
                        onChange={(e) => setProfileFullName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationDefault02">
                        Telefon Numarası
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault02"
                        onChange={(e) => setProfilePhone(e.target.value)}
                        value={profilePhone}
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="inputTC">Ülke</label>
                      <input
                        type="text"
                        onChange={(e) => setProfileCountry(e.target.value)}
                        className="form-control"
                        id="inputCountry"
                        value={profileCountry}
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="inputTC">Şehir</label>
                      <input
                        type="text"
                        onChange={(e) => setProfileCity(e.target.value)}
                        className="form-control"
                        id="inputCity"
                        value={profileCity}
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="inputTC">Adres</label>
                      <input
                        onChange={(e) => setProfileAddress(e.target.value)}
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        value={profileAddress}
                      />
                    </div>
                    <div className="d-flex align-items-end justify-content-center col-md-4 mb-3">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          let payload = {
                            name: profileFullName,
                            country: profileCountry,
                            city: profileCity,
                            address: profileAddress,
                          };
                          store
                            .updateClinicProfile(getCookie('user_id'), payload)
                            .then(() => {
                              setAlertboxActive(true);
                              setAlertData({
                                type: 'success',
                                title:
                                  'Kullanıcı bilgileri başarıyla kaydedildi',
                              });
                            });
                        }}
                        className="btn btn-primary"
                        id="profileSaveButton"
                      >
                        Kaydet
                      </button>
                    </div>
                    {getCookie('user_type') === 'clinic' && (
                      <div className="col-md-12 mb-3">
                        <Map clinics={user} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

  function aboutUsTab() {
    return (
      <div className="settingsWrapper w-100 d-flex align-items-center justify-content-center">
        <div className="draftJSeditorWrapper">
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            placeholder="Hakkında bir şeyler yaz..."
            editorClassName="demo-editor"
            onEditorStateChange={onEditorStateChange}
          />
          <button
            className="btn btn-primary draftJSSaveButton"
            onClick={() => {
              let payload = {
                description: convertToHTML(editorState.getCurrentContent()),
              };
              store
                .updateClinicProfile(getCookie('user_id'), payload)
                .then(() => {
                  setAlertboxActive(true);
                  setAlertData({
                    type: 'success',
                    title: 'Kullanıcı bilgileri başarıyla kaydedildi',
                  });
                });
            }}
          >
            Kaydet
          </button>
        </div>
      </div>
    );
  }

  function galleryTab() {
    return (
      <>
        <div className="settingsWrapper">
          <div className="row">
            <div className="galleryWrapper">
              <Carousel className="galleryCarousel" showStatus={false}>
                {carouselImages.map((carouselImage) => {
                  return (
                    <>
                      <GalleryDropZone />
                      <div className="deleteGalleryImage">
                        <img src={deleteImage} alt="" />
                      </div>
                      {/* <button
                        onClick={async () => {
                          await store.deleteCarouselImage(
                            getCookie('user_id'),
                            carouselImage._id
                          );
                          window.location.reload();
                        }}
                        type="button"
                        className="btn btn-primary"
                      >
                        Sil
                      </button> */}
                      <div key={carouselImage._id}>
                        <img src={carouselImage.link} />
                      </div>
                    </>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {loading ? (
        <Loading innerScreen />
      ) : (
        <div className={'ProfileContainer'}>
          <div className={'profileCard'}>
            <div className={'profileAvatar'}>
              <div className={'profilImageWrapper'}>
                <img
                  className={'profileImage'}
                  src={profilePhoto ? profilePhoto : ''}
                  alt="avatar"
                />
              </div>
              <Dropzonesss />
            </div>
          </div>

          <div className={'profileName'}>{profileFullName}</div>
          <div
            className={'location'}
          >{`${profileCity}, ${profileCountry}`}</div>

          <div className={'tabs'}>
            <div
              onClick={() => setSelectedTab(0)}
              className={`${'profile__tabs__tab'} ${
                selectedTab === 0 ? 'profile__tabs__selected' : ''
              }`}
            >
              Genel
            </div>
            {getCookie('user_type') === 'clinic' && (
              <>
                <div
                  onClick={() => setSelectedTab(1)}
                  className={`${'profile__tabs__tab'} ${
                    selectedTab === 1 ? 'profile__tabs__selected' : ''
                  }`}
                >
                  Hakkımızda
                </div>
                <div
                  onClick={() => setSelectedTab(2)}
                  className={`${'profile__tabs__tab'} ${
                    selectedTab === 2 ? 'profile__tabs__selected' : ''
                  }`}
                >
                  Galeri
                </div>
              </>
            )}
          </div>

          <div className={'tabContent'}>
            {selectedTab === 0 && overviewTab()}
            {selectedTab === 1 && aboutUsTab()}
            {selectedTab === 2 && galleryTab()}
          </div>
        </div>
      )}
    </>
  );
}

// ! burasi cokomelli

// eslint-disable-next-line no-unused-vars
const getProfileUploadLink = async (file) => {
  const { data } = await store.getUploadURL({
    fileType: file.type,
    user: getCookie('user_id'),
    whereTo: 'profile',
  });

  uploadProfileImage(data.url, data.link, file);
};

const uploadProfileImage = async (_url, link) => {
  // const res = await store.uploadImage(url, file);

  const userType = getCookie('user_type');
  if (userType === 'user') {
    await store.updateUserProfile({
      userId: getCookie('user_id'),
      avatar: link,
    });
  } else if (userType === 'clinic') {
    await store.updateClinicProfile(getCookie('user_id'), {
      avatar: link,
    });
  } else if (userType === 'dentist') {
    await store.updateDentistProfile(getCookie('user_id'), {
      avatar: link,
    });
  }

  window.location.reload();
};
// ! burasi cokomelli
// eslint-disable-next-line no-unused-vars
const getGalleryUploadLink = async (file) => {
  const { data } = await store.getUploadURL({
    fileType: file.type,
    user: getCookie('user_id'),
    whereTo: 'gallery',
  });

  uploadGalleryImage(data.url, data.link, file);
};

const uploadGalleryImage = async (url, link) => {
  const userType = getCookie('user_type');
  if (userType === 'clinic') {
    await store.updateClinicGallery(getCookie('user_id'), {
      link,
    });
  }

  window.location.reload();
};

function Dropzonesss() {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map((file) => {
    getProfileUploadLink(file);
  });

  return (
    <div className="profile__profileCard__editIcon__2" onClick={open}>
      <input {...getInputProps()} />
      <img src={editIcon} alt="" />
    </div>
  );
}

function GalleryDropZone() {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map((file) => {
    getGalleryUploadLink(file);
  });

  return (
    <div className="addGallerImage" {...getRootProps()} onClick={open}>
      <input {...getInputProps()} />
      <img src={editIcon} alt="" />
    </div>
  );
}
