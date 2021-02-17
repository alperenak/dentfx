import React, { useContext, useEffect, useState } from 'react';

/*** Utils ***/
import store from '../../store';
import { getCookie } from '../../utils/cookie';

/*** Styles ***/
import './profile.scss';

/*** Icons ***/
import editIcon from '../../icons/edit-icon.svg';
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
import StaticProfile from '../../assets/images/profile.png';
import { useDropzone } from 'react-dropzone';
// import Map from "../../components/Map/map";
// import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { AlertContext } from '../../context/alertContext';
import { MainLoadingContext } from '../../context/loadingContext';
import Loading from '../../components/Loading';
// import { Carousel } from "react-responsive-carousel";

export default function Profile() {
  //#region General States
  const [user, setUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [selectedTab, s] = useState(0);
  //#endregion

  //#region Profile Settings States
  const [profileFullName, setProfileFullName] = useState('');
  const [loading, setLoading] = useContext(MainLoadingContext);
  const [profileCountry, setProfileCountry] = useState('');
  const [profileCity, setProfileCity] = useState('');
  const [profileAddress, setProfileAddress] = useState('');
  const [setAlertboxActive, setAlertData] = useContext(AlertContext);
  const [profilePhone, setProfilePhone] = useState('');
  //#endregion

  //#region Notifications States
  //#endregion

  //#region Language Settings States
  //#endregion

  //#WYSIWYG
  // const state = {
  //   editorState: EditorState.createEmpty(),
  // };
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // const onEditorStateChange = (editorStatee) => {
  //   setEditorState(editorStatee);
  // };

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
        setProfileCity(data.data?.city);
        setProfilePhone(data.data.phone);
      });
    } else if (userType === 'clinic') {
      let res = await store.getClinicDetail({ clinicId: getCookie('user_id') });
      setUser(res.data);
      // console.log(res.data);
    }
  }

  useEffect(() => {
    getUser().then(() => {});
  }, []);

  function overviewTab() {
    return (
      <>
        <div className="settingsWrapper" style={{ marginBottom: '-430px' }}>
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
                          setAlertboxActive(true);
                          setAlertData({
                            type: 'success',
                            title: 'Kullanıcı bilgileri başarıyla kaydedildi',
                          });
                        }}
                        className="btn btn-primary"
                        id="profileSaveButton"
                      >
                        Kaydet
                      </button>
                    </div>
                    {/* <div className="col-md-12 mb-3">
                  <Map clinics={user} />
                </div> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

  // function aboutUsTab() {
  //   return (
  //     <div className="settingsWrapper">
  //       <div className="row">
  //         <div>
  //           <Editor
  //             editorState={editorState}
  //             wrapperClassName="demo-wrapper"
  //             editorClassName="demo-editor"
  //             onEditorStateChange={onEditorStateChange}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // function galleryTab() {
  //   return (
  //     <>
  //       <div className="settingsWrapper" style={{ marginBottom: "-500px" }}>
  //         <div className="row">
  //           <div style={{ width: "500px", height: "500px" }}>
  //             <GalleryDropZone />
  //             <Carousel>
  //               {carouselImages.map((carouselImage) => {
  //                 return (
  //                   <>
  //                     <button
  //                       onClick={async () => {
  //                         await store.deleteCarouselImage(
  //                           getCookie("user_id"),
  //                           carouselImage._id
  //                         );
  //                         window.location.reload();
  //                       }}
  //                       type="button"
  //                       className="btn btn-primary"
  //                     >
  //                       Sil
  //                     </button>
  //                     <div key={carouselImage._id}>
  //                       <img src={carouselImage.link} />
  //                     </div>
  //                   </>
  //                 );
  //               })}
  //             </Carousel>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      {loading ? (
        <Loading noBackground fullscreen />
      ) : (
        <div className={'ProfileContainer'}>
          <div className={'profileCard'}>
            <div className={'profileAvatar'}>
              <div className={'profilImageWrapper'}>
                <img
                  className={'profileImage'}
                  src={user ? StaticProfile : StaticProfile}
                  alt="avatar"
                />
                <Dropzonesss />
              </div>
            </div>
          </div>

          <div className={'profileName'}>{profileFullName}</div>
          <div
            className={'location'}
          >{`${profileCity}, ${profileCountry}`}</div>

          <div className={'tabs'}>
            <div
              onClick={() => this.setSelectedTab(0)}
              className={`${'tab'} ${selectedTab === 0 ? 'selected' : ''}`}
            >
              Genel
            </div>
          </div>

          <div>{selectedTab === 0 && overviewTab()}</div>
        </div>
      )}
    </>
  );
}

// const getProfileUploadLink = async (file) => {
//   const { data } = await store.getUploadURL({
//     fileType: file.type,
//     user: getCookie("user_id"),
//     whereTo: "profile",
//   });

//   uploadProfileImage(data.url, data.link, file);
// };

// const uploadProfileImage = async (_url, link) => {
//   // const res = await store.uploadImage(url, file);

//   const userType = getCookie("user_type");
//   if (userType === "user") {
//     await store.updateUserProfile({
//       userId: getCookie("user_id"),
//       avatar: link,
//     });
//   } else if (userType === "clinic") {
//     await store.updateClinicProfile(getCookie("user_id"), {
//       avatar: link,
//     });
//   } else if (userType === "dentist") {
//     await store.updateDentistProfile(getCookie("user_id"), {
//       avatar: link,
//     });
//   }

//   window.location.reload();
// };

// const getGalleryUploadLink = async (file) => {
//   const { data } = await store.getUploadURL({
//     fileType: file.type,
//     user: getCookie("user_id"),
//     whereTo: "gallery",
//   });

//   uploadGalleryImage(data.url, data.link, file);
// };

// const uploadGalleryImage = async (url, link, file) => {
//   const userType = getCookie("user_type");
//   if (userType === "clinic") {
//     await store.updateClinicGallery(getCookie("user_id"), {
//       link,
//     });
//   }

//   window.location.reload();
// };

function Dropzonesss() {
  const { getInputProps, open } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  // const files = acceptedFiles.map((file) => {
  //   getProfileUploadLink(file);
  // });

  return (
    <div className="profile__profileCard__editIcon__2" onClick={open}>
      <input {...getInputProps()} />
      <img src={editIcon} alt="" />
    </div>
  );
}

// function GalleryDropZone(_props) {
//   const { getRootProps, getInputProps, open } = useDropzone({
//     // Disable click and keydown behavior
//     noClick: true,
//     noKeyboard: true,
//   });

//   return (
//     <div {...getRootProps()} onClick={open}>
//       <input {...getInputProps()} />
//       <p>Drop the files here ...</p> :
//       <p>Drag drop some files here, or click to select files</p>
//     </div>
//   );
// }
