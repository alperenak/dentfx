import React, { useEffect, useState } from "react";

/*** Components ***/
import Input from "../Input";

/*** Utils ***/
import store from "../../store";
import { getCookie, eraseCookie } from "../../utils/cookie";

/*** Styles ***/
import styles from "./topbar.scss";

/*** Icons ***/
import logo from "../../assets/icons/logo.svg";
import filterIcon from "../../icons/filter-icon.svg";
import notification from "../../icons/notification-icon.svg";
import logoutIcon from "../../icons/logout.svg";

export default function UserTopBar() {
  const [user, setUser] = useState();
  const [userType, setUserType] = useState();
  const [dropdown, setDropdown] = useState(false);
  const [dropdownType, setDropdownType] = useState("notifications");
  const [notifications, setNotifications] = useState(null);
  const [unreadNotifs, setUnreadNotifs] = useState(null);

  async function getUser() {
    let userType = getCookie("user_type");

    if (userType === "dentist") {
      setUserType("dentist");
      let res = await store.getDentistDetail({
        dentistId: getCookie("user_id"),
      });
      setUser(res.data);
    } else if (userType === "user") {
      setUserType("user");
      let res = await store.getUserDetail({ userId: getCookie("user_id") });
      setUser(res.data);
    } else if (userType === "clinic") {
      setUserType("clinic");
      let res = await store.getClinicDetail({ clinicId: getCookie("user_id") });
      setUser(res.data);
    }
  }

  async function getNotifications() {
    let res = await store.getNotifications({ userId: getCookie("user_id") });
    setNotifications(res.data.notifications);
    setUnreadNotifs(res.data.unread);
  }

  useEffect(() => {
    getNotifications();
    getUser();
  }, []);

  const RenderDropdown = ({ type }) => {
    return (
      <div
        className={`${styles.dropdownMenuContainer} ${
          type === "menu" ? styles.menu : styles.notifications
        }`}
      >
        <div className={styles.dropdownMenu}>
          <div className={styles.links}>
            {type === "menu" && (
              <div
                className={styles.link}
                onClick={() => {
                  eraseCookie(["token", "user_type", "user_id"]);
                  window.location.pathname = "/";
                }}
              >
                <img src={logoutIcon} className={styles.icon}></img>
                <div className={styles.text}>Logout</div>
              </div>
            )}

            {type === "notifications" &&
              notifications?.map((notification, i) => {
                return (
                  <div
                    key={i}
                    className={`${styles.link} ${styles.notification} ${
                      notification.isRead === false &&
                      styles.notificationNotRead
                    }`}
                    onClick={async () => {
                      await store.setNotificationRead({
                        notificationId: notification.id,
                      });
                      await getNotifications();
                    }}
                  >
                    <div className={styles.title}>{notification.title}</div>
                    <div className={styles.text}>{notification.message}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.Container}>
        <img className={styles.logo} src={logo} alt={"logo"} />
        <div className={styles.inputContainer}>
          <Input type={"text"} placeholder={"Ara"} size={"half"} />
          <div className={styles.filterIcon}>
            <img src={filterIcon} alt={"logo"} />
          </div>
        </div>
        <div className={styles.label}>
          DentFX Puanı<span>{`: 2000`}</span>
        </div>
        <div className={styles.notificationWrapper}>
          <img
            className={styles.notification}
            src={notification}
            alt={"notification"}
            onClick={() => {
              setDropdownType("notifications");
              dropdown ? setDropdown(false) : setDropdown(true);
            }}
          />
          {unreadNotifs > 0 && <div className={styles.unread} />}
        </div>
        <div className={styles.user}>
          {userType === "clinic"
            ? `${user?.name}`
            : `${user?.name} ${user?.surname}`}

          <img
            className={styles.avatarContainer}
            src={user?.avatar}
            alt={"notification"}
            onClick={() => {
              setDropdownType("menu");
              dropdown ? setDropdown(false) : setDropdown(true);
            }}
          />
        </div>
      </div>
      {dropdown && <RenderDropdown type={dropdownType} />}
    </>
  );
}
