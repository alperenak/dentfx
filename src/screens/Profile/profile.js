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
import DatePicker from 'react-datepicker';
//*** Components ***/
import Input from "../../components/Input";
import Switch from "react-input-switch";

export default function Profile() {
  //#region General States
  const [user, setUser] = useState();
  const [userType, setUserType] = useState();
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
    let userType = getCookie("user_type");
    setUserType(userType);

    if (userType === "dentist") {
      let res = await store.getDentistDetail({
        dentistId: getCookie("user_id"),
      });

      setUser(res.data);
      setProfileName(res.data?.name);
      setProfileSurname(res.data?.surname);
      setProfileEmail(res.data?.email);
      setProfileBirthday(new Date().toLocaleDateString());
      setProfilePhone(res.data?.phone);
    } else if (userType === "user") {
      let res = await store.getUserDetail({ userId: getCookie("user_id") });
      setUser(res.data);
      setProfileName(res.data.name);
      setProfileSurname(res.data.surname);
      setProfileEmail(res.data.email);
      setProfileBirthday(new Date().toLocaleDateString());
      setProfilePhone(res.data.phone);
    } else if (userType === "clinic") {
      let res = await store.getClinicDetail({ clinicId: getCookie("user_id") });
      setUser(res.data);
      console.log(res.data);
      /* setProfileName(res.data.name);
      setProfileSurname(res.data.surname);
      setProfileEmail(res.data.email);
      setProfileBirthday(new Date().toLocaleDateString());
      setProfilePhone(res.data.phone); */
    }
  }

  useEffect(() => {
    getUser();
  }, []);

	function overviewTab() {
	return (
		<div className="overviewWrapper">
			<div class="row">
				<div class="col-md-6">
					<div className="overviewWrapper__card">
						<img src={birthdayIcon} className="overviewWrapper__card__icon" />
						<div className="overviewWrapper__card__content">17 September 1994</div>
					</div>
				</div>
				<div class="col-md-6">
					{userType !== "clinic" && (
						<div className="overviewWrapper__card">
							<img src={emailIcon} className="overviewWrapper__card__icon" />
							<div className="overviewWrapper__card__content">{user?.email}</div>
						</div>
					)}
				</div>
				<div class="col-md-6">
					<div className="overviewWrapper__card">
						<img src={phoneIcon} className="overviewWrapper__card__icon" />
						<div className="overviewWrapper__card__content">{user?.phone}</div>
					</div>
				</div>
				<div class="col-md-6">
				<div className="overviewWrapper__card">
					<img src={locationIcon} className="overviewWrapper__card__icon" />
					<div className="overviewWrapper__card__content">
						{user?.city}, {user?.country}
					</div>
				</div>
				</div>
			</div>

		</div>
	);
	}

	function settingsTab() {
		return (
		<div className="settingsWrapper">
			<div className="settingsWrapper__tab" onClick={() => {setSelectedTab(2);}}>
			<div className="settingsWrapper__tab__iconWrapper">
				<img src={profileSettingsIcon} alt="" className={styles.leftIcon} />
			</div>
			<div className="settingsWrapper__tab__text">Profil Ayarları</div>
				<img src={chevronRightIcon} alt="" className="settingsWrapper__tab__rightIcon" />
			</div>

			<div className="settingsWrapper__tab" onClick={() => {setSelectedTab(3);}}>
				<div className="settingsWrapper__tab__iconWrapper">
					<img src={notificationIcon} alt="" className={styles.leftIcon} />
				</div>
				<div className="settingsWrapper__tab__text">Bildirim Ayarları</div>
				<img src={chevronRightIcon} alt="" className="settingsWrapper__tab__rightIcon" />
			</div>

			<div className="settingsWrapper__tab" onClick={() => {setSelectedTab(4);}}>
				<div className="settingsWrapper__tab__iconWrapper">
					<img src={languageSettingsIcon} alt="" className={styles.leftIcon} />
				</div>
				<div className="settingsWrapper__tab__text">Dil Ayarları</div>
				<img src={chevronRightIcon} alt="" className="settingsWrapper__tab__rightIcon" />
			</div>
		</div>
		);
	}

	function profileSettings() {
		const onClickSubmit = async () => {
			await store.updateUserProfile({
				userId: user.id,
				name: profileName,
				surname: profileSurname,
				email: profileEmail,
				phone: profilePhone,
			});
		};

		return (
			<div className={`${"settingsWrapper"} ${styles.profileSettings}`}>
				<div className="settingsWrapper__header">
					<div className="settingsWrapper__header__iconWrapper">
						<img src={profileSettingsIcon} alt="" className={styles.leftIcon} />
					</div>
					<div className="settingsWrapper__header__text">Profil Ayarları</div>
					<img
						src={chevronRightIcon}
						alt=""
						className="settingsWrapper__header__rightIcon"
						onClick={() => setSelectedTab(1)}
					/>
				</div>

				<div className="settingsWrapper__inputs">
					<div class="row">
						<div class="col-md-6">
							<div className={"settingsWrapper__inputContainer__input"}>
								<label>Ad</label>
								<input type="text" value={user?.name}  placeholder={'Ad'} onChange={value => setProfileName(value.target.value)} />
							</div>
						</div>
						<div class="col-md-6">
							{userType !== "clinic" && (
								<div className={"settingsWrapper__inputContainer__input"}>
									<label>Soyad</label>
									<input type="text" value={user?.surname}  placeholder={'Soyad'} onChange={value => setProfileSurname(value.target.value)} />
								</div>
							)}
						</div>
						<div class="col-md-6">
							<div className={"settingsWrapper__inputContainer__input"}>
								<label>E-Posta</label>
								<input type="text" value={user?.email}  placeholder={'E-Posta'} onChange={value => setProfileEmail(value.target.value)} />
							</div>
						</div>
						<div class="col-md-6">
							<div className={"settingsWrapper__inputContainer__input"}>
								<label>Telefon</label>
								<input type="text" value={user?.phone}  placeholder={'Telefon'} onChange={value => setProfilePhone(value.target.value)} />
							</div>
						</div>
					</div>
				</div>
				<button className="settingsWrapper__submitButton" onClick={onClickSubmit}>
					Kaydet
				</button>
			</div>
		);
	}

	function notificationSettings() {
		return (
			<div className="settingsWrapper">
				<div className="settingsWrapper__header">
					<div className="settingsWrapper__header__iconWrapper">
						<img src={notificationIcon} alt="" className={styles.leftIcon} />
					</div>
					<div className="settingsWrapper__header__text">Bildirim Ayarları</div>

					<img
						src={chevronRightIcon}
						alt=""
						className="settingsWrapper__header__rightIcon"
						onClick={() => setSelectedTab(1)}
					/>
				</div>

				<div className="settingsWrapper__inputs">
					<div class="row">
						<div class="col-md-6">
							<div className="settingsWrapper__item">
								<div className="settingsWrapper__header__text">Notification Setting 1</div>
								<div className="settingsWrapper__item__switch">
									<Switch
										on={true}
										off={false}
										value={notification1}
										onChange={setNotification1}
									/>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div className={styles.item}>
								<div className="settingsWrapper__header__text">Notification Setting 1</div>
								<div className="settingsWrapper__item__switch">
									<Switch
										on={true}
										off={false}
										value={notification2}
										onChange={setNotification2}
									/>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div className={styles.item}>
								<div className="settingsWrapper__header__text">Notification Setting 1</div>
								<div className="settingsWrapper__item__switch">
									<Switch
										on={true}
										off={false}
										value={notification3}
										onChange={setNotification3}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button className="settingsWrapper__submitButton">Kaydet</button>
			</div>
		);
	}

	function languageSettings() {
		return (
			<div className="settingsWrapper">
				<div className="settingsWrapper__header">
					<div className="settingsWrapper__header__iconWrapper">
						<img
							src={languageSettingsIcon}
							alt=""
							className={styles.leftIcon}
						/>
					</div>
					<div className="settingsWrapper__header__text">Dil Ayarları</div>
					<img
						src={chevronRightIcon}
						alt=""
						className="settingsWrapper__header__rightIcon"
						onClick={() => setSelectedTab(1)}
					/>
					</div>
					<div className="settingsWrapper__inputs">
						<Input type="select" size="full" />
					</div>
			</div>
		);
	}

	return (
		<div className="profile">
			<div className="profile__profileCard">
				<img className="profile__profileCard__profileImage" src={user?.avatar} alt="avatar" />
				<div className="profile__profileCard__editIcon">
					<img src={editIcon} alt="" />
				</div>
			</div>
			<div className="profile__profileName">
				{`${user?.name} ${user?.surname? user.surname : ''}`}
			</div>
			<div className="profile__tabs">
				<div onClick={() => setSelectedTab(0)} className={`${"profile__tabs__tab"} ${selectedTab === 0 ? "profile__tabs__selected" : ""}`}>
					Genel
				</div>
				<div onClick={() => setSelectedTab(1)} className={`${"profile__tabs__tab"} ${selectedTab === 1 ? "profile__tabs__selected" : ""}`}>
					Ayarlar
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
