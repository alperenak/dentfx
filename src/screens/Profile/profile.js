import React, { useEffect, useState } from "react";

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";

/*** Styles ***/
import styles from "./profile.scss";

/*** Icons ***/
import editIcon from "../../icons/edit-icon.svg";
import birthdayIcon from "../../icons/birthday-icon.svg";
import phoneIcon from "../../icons/phone-icon.svg";
import emailIcon from "../../icons/email-icon.svg";
import locationIcon from "../../icons/location-icon_1.svg";
import languageSettingsIcon from "../../icons/language-settings-icon.svg";
import notificationIcon from "../../icons/notification-settings-icon.svg";
import profileSettingsIcon from "../../icons/profile-settings-icon.svg";
import chevronRightIcon from "../../icons/Chevron-right.svg";

//*** Components ***/
import Input from "../../components/Input";
import Switch from "react-input-switch";

export default function Profile() {
  //#region General States
  const [user, setUser] = useState();
  const [selectedTab, setSelectedTab] = useState(0);
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
  const [selectedLanguage, setSelectedLanguage] = useState("Türkçe");
  //#endregion

  async function getUser() {
    let res = await store.getUserDetail({ userId: getCookie("user_id") });

    setUser(res.data);
    setProfileName(user?.name);
    setProfileSurname(user?.surname);
    setProfileEmail(user?.email);
    setProfileBirthday(new Date().toLocaleDateString());
    setProfilePhone(user?.phone);
  }

  useEffect(() => {
    getUser();
  }, []);

  function overviewTab() {
    return (
      <div className={styles.overviewWrapper}>
        <div className={styles.card}>
          <img src={birthdayIcon} className={styles.icon} />
          <div className={styles.content}>17 September 1994</div>
        </div>

        <div className={styles.card}>
          <img src={emailIcon} className={styles.icon} />
          <div className={styles.content}>{user?.email}</div>
        </div>

        <div className={styles.card}>
          <img src={phoneIcon} className={styles.icon} />
          <div className={styles.content}>{user?.phone}</div>
        </div>

        <div className={styles.card}>
          <img src={locationIcon} className={styles.icon} />
          <div className={styles.content}>
            {user?.city}, {user?.country}
          </div>
        </div>
      </div>
    );
  }

  function settingsTab() {
    return (
      <div className={styles.settingsWrapper}>
        <div
          className={styles.tab}
          onClick={() => {
            setSelectedTab(2);
          }}
        >
          <div className={styles.iconWrapper}>
            <img src={profileSettingsIcon} alt="" className={styles.leftIcon} />
          </div>
          <div className={styles.text}>Profile Settings</div>
          <img src={chevronRightIcon} alt="" className={styles.rightIcon} />
        </div>

        <div
          className={styles.tab}
          onClick={() => {
            setSelectedTab(3);
          }}
        >
          <div className={styles.iconWrapper}>
            <img src={notificationIcon} alt="" className={styles.leftIcon} />
          </div>
          <div className={styles.text}>Notification Settings</div>
          <img src={chevronRightIcon} alt="" className={styles.rightIcon} />
        </div>

        <div
          className={styles.tab}
          onClick={() => {
            setSelectedTab(4);
          }}
        >
          <div className={styles.iconWrapper}>
            <img
              src={languageSettingsIcon}
              alt=""
              className={styles.leftIcon}
            />
          </div>
          <div className={styles.text}>Language Settings</div>
          <img src={chevronRightIcon} alt="" className={styles.rightIcon} />
        </div>
      </div>
    );
  }

  function profileSettings() {
    const onClickSubmit = async () => {};

    return (
      <div className={`${styles.settingsWrapper} ${styles.profileSettings}`}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <img src={profileSettingsIcon} alt="" className={styles.leftIcon} />
          </div>
          <div className={styles.text}>Profile Settings</div>

          <img
            src={chevronRightIcon}
            alt=""
            className={styles.rightIcon}
            onClick={() => setSelectedTab(1)}
          />
        </div>

        <div className={styles.inputs}>
          <Input
            type={"text"}
            defaultValue={user?.name}
            size={"full"}
            label="Ad"
            onChange={setProfileName}
          />
          <Input
            type={"text"}
            defaultValue={user?.surname}
            size={"full"}
            label="Soyad"
            onChange={setProfileSurname}
          />
          <Input
            type={"text"}
            defaultValue={user?.email}
            size={"full"}
            label="E-Posta"
            onChange={setProfileEmail}
          />
          <Input
            type={"date"}
            defaultValue={new Date().toLocaleDateString()}
            size={"full"}
            label="Doğum Tarihi"
            onChange={setProfileBirthday}
          />
          <Input
            type={"text"}
            defaultValue={user?.phone}
            size={"full"}
            label="Telefon"
            onChange={setProfilePhone}
          />
        </div>

        <button className={styles.submitButton}>Kaydet</button>
      </div>
    );
  }

  function notificationSettings() {
    return (
      <div className={styles.settingsWrapper}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <img src={notificationIcon} alt="" className={styles.leftIcon} />
          </div>
          <div className={styles.text}>Notification Settings</div>

          <img
            src={chevronRightIcon}
            alt=""
            className={styles.rightIcon}
            onClick={() => setSelectedTab(1)}
          />
        </div>

        <div className={styles.inputs}>
          <div className={styles.item}>
            <div className={styles.text}>Notification Setting 1</div>
            <div className={styles.switch}>
              <Switch
                on={true}
                off={false}
                value={notification1}
                onChange={setNotification1}
              />
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.text}>Notification Setting 1</div>
            <div className={styles.switch}>
              <Switch
                on={true}
                off={false}
                value={notification2}
                onChange={setNotification2}
              />
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.text}>Notification Setting 1</div>
            <div className={styles.switch}>
              <Switch
                on={true}
                off={false}
                value={notification3}
                onChange={setNotification3}
              />
            </div>
          </div>
        </div>

        <button className={styles.submitButton}>Kaydet</button>
      </div>
    );
  }

  function languageSettings() {
    return (
      <div className={styles.settingsWrapper}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <img
              src={languageSettingsIcon}
              alt=""
              className={styles.leftIcon}
            />
          </div>
          <div className={styles.text}>Language Settings</div>

          <img
            src={chevronRightIcon}
            alt=""
            className={styles.rightIcon}
            onClick={() => setSelectedTab(1)}
          />
        </div>

        <div className={styles.inputs}>
          <Input type="select" size="full" />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.Profile}>
      <div className={styles.profileCard}>
        <img className={styles.profileImage} src={user?.avatar} alt="avatar" />
        <div className={styles.editIcon}>
          <img src={editIcon} alt="" />
        </div>
      </div>
      <div className={styles.profileName}>
        {`${user?.name} ${user?.surname}`}
      </div>
      <div className={styles.tabs}>
        <div
          onClick={() => setSelectedTab(0)}
          className={`${styles.tab} ${
            selectedTab === 0 ? styles.selected : ""
          }`}
        >
          Overview
        </div>
        <div
          onClick={() => setSelectedTab(1)}
          className={`${styles.tab} ${
            selectedTab === 1 ? styles.selected : ""
          }`}
        >
          Settings
        </div>
      </div>

      <div className={styles.tabContent}>
        {selectedTab === 0 && overviewTab()}
        {selectedTab === 1 && settingsTab()}
        {selectedTab === 2 && profileSettings()}
        {selectedTab === 3 && notificationSettings()}
        {selectedTab === 4 && languageSettings()}
      </div>
    </div>
  );
}
