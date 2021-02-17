import React, { useEffect, useState } from 'react';

/*** Components ***/

/*** Utils ***/
import store from '../../store';
import { getCookie, eraseCookie } from '../../utils/cookie';

/*** Styles ***/
import './topbar.scss';

/*** Icons ***/
import logo from '../../assets/icons/logo.svg';
import filterIcon from '../../icons/filter-icon.svg';
import menuIcon from '../../assets/images/menu-icon.png';
import notification from '../../icons/notification-icon.svg';
import logoutIcon from '../../icons/logout.svg';
import SideBar from '../SideBar/sideBar2';
import StaticAvatar from '../../assets/images/profile.png';

export default function UserTopBar() {
  const [user, setUser] = useState();
  const [userType, setUserType] = useState();
  const [dropdown, setDropdown] = useState(false);
  const [notifications, setNotifications] = useState(null);
  const [unreadNotifs, setUnreadNotifs] = useState(null);

  async function getUser() {
    let userType = getCookie('user_type');

    if (userType === 'dentist') {
      setUserType('dentist');
      let res = await store.getDentistDetail({
        dentistId: getCookie('user_id'),
      });
      setUser(res.data);
    } else if (userType === 'user') {
      setUserType('user');
      let res = await store.getUserDetail({ userId: getCookie('user_id') });
      setUser(res.data);
    } else if (userType === 'clinic') {
      setUserType('clinic');
      let res = await store.getClinicDetail({ clinicId: getCookie('user_id') });
      setUser(res.data);
    }
  }

  async function getNotifications() {
    let res = await store.getNotifications({ userId: getCookie('user_id') });
    setNotifications(res.data.notifications);
    setUnreadNotifs(res.data.unread);
  }

  useEffect(() => {
    getNotifications();
    getUser();
  }, []);

  return (
    <div className="topBarAllWrapper">
      <div className="topbar">
        <div className="TopBarWrapper">
          <div className="row mobile_row">
            <div
              className="col-8"
              style={{
                'flex-direction': 'row',
                display: 'flex',
                'align-items': 'center',
              }}
            >
              <div className="dropdown" style={{ 'margin-right': 20 }}>
                <a
                  href="javascript:void(0);"
                  id="dropdownProfile"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="topbar__inputContainer__filterIcon">
                    <img src={menuIcon} alt={'logo'} />
                  </div>
                </a>
                <div
                  className="dropdown-menu sidebardropdown dropdown-menu-left"
                  aria-labelledby="dropdownProfile"
                >
                  <SideBar />
                </div>
              </div>
              <div className="topbar__logo">
                <img src={logo} alt={'logo'} />
              </div>
            </div>
            <div className="col-2">
              <div className="topbar__notificationWrapper">
                <div className="dropdown">
                  <a
                    href="javascript:void(0);"
                    id="dropdownNotif"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      className="topbar__notificationWrapper__notification"
                      src={notification}
                      alt={'notification'}
                      onClick={() => {
                        dropdown ? setDropdown(false) : setDropdown(true);
                      }}
                    />
                    {unreadNotifs > 0 && (
                      <div className="topbar__notificationWrapper__unread" />
                    )}
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownNotif"
                  >
                    {notifications?.map((notification, i) => {
                      return (
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item"
                          key={i}
                        >
                          <div
                            className={`${'topbar__dropdownMenu__links__link'} ${'topbar__dropdownMenu__links__notification'} ${
                              notification.isRead === false &&
                              'topbar__dropdownMenu__links__notification__notificationNotRead'
                            }`}
                            onClick={async () => {
                              await store.setNotificationRead({
                                notificationId: notification.id,
                              });
                              await getNotifications();
                            }}
                          >
                            <div
                              className={
                                'topbar__dropdownMenu__links__notification__title'
                              }
                            >
                              {notification.title}
                            </div>
                            <div
                              className={
                                'topbar__dropdownMenu__links__notification__text'
                              }
                            >
                              {notification.message}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="topbar__user">
                <div className="dropdown ">
                  <a
                    href="javascript:void(0);"
                    id="dropdownProfile"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="topbar__dropdownMenu__links__username">
                      {userType === 'clinic'
                        ? `${user?.name}`
                        : `${user?.name} ${user?.surname}`}
                    </span>
                    <img
                      className="topbar__user__avatarContainer"
                      src={user?.avatar}
                      alt={'notification'}
                    />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownProfile"
                  >
                    <div
                      className="topbar__dropdownMenu__links__link dropdown-item"
                      onClick={() => {
                        eraseCookie(['token', 'user_type', 'user_id']);
                        window.location.pathname = '/';
                      }}
                    >
                      <img
                        src={logoutIcon}
                        className="topbar__dropdownMenu__links__link__icon"
                      ></img>
                      <div className="topbar__dropdownMenu__links__link__text">
                        Logout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="topbar__inputContainer">
                <input type="text" placeholder={'Ara'} />
                <div className="topbar__inputContainer__filterIcon">
                  <img src={filterIcon} alt={'logo'} />
                </div>
              </div>
            </div>
          </div>
          <div className="row desktop_row">
            <div className="col-xl-2 col-lg-2 col-md-3 col-xs-1">
              <div className="topbar__logo">
                <img src={logo} alt={'logo'} />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-1">
              <div className="topbar__inputContainer">
                <input type="text" placeholder={'Ara'} />
                <div className="topbar__inputContainer__filterIcon">
                  <img src={filterIcon} alt={'logo'} />
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 topbar__notifLabel">
              <div className="topbar__notificationWrapper">
                <div className="dropdown">
                  <a
                    href="javascript:void(0);"
                    id="dropdownNotif"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      className="topbar__notificationWrapper__notification"
                      src={notification}
                      alt={'notification'}
                      onClick={() => {
                        dropdown ? setDropdown(false) : setDropdown(true);
                      }}
                    />
                    {unreadNotifs > 0 && (
                      <div className="topbar__notificationWrapper__unread" />
                    )}
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownNotif"
                  >
                    {notifications?.map((notification, i) => {
                      return (
                        <a
                          href="javascript:void(0);"
                          key={i}
                          className="dropdown-item"
                        >
                          <div
                            className={`${'topbar__dropdownMenu__links__link'} ${'topbar__dropdownMenu__links__notification'} ${
                              notification.isRead === false &&
                              'topbar__dropdownMenu__links__notification__notificationNotRead'
                            }`}
                            onClick={async () => {
                              await store.setNotificationRead({
                                notificationId: notification.id,
                              });
                              await getNotifications();
                            }}
                          >
                            <div
                              className={
                                'topbar__dropdownMenu__links__notification__title'
                              }
                            >
                              {notification.title}
                            </div>
                            <div
                              className={
                                'topbar__dropdownMenu__links__notification__text'
                              }
                            >
                              {notification.message}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-1">
              <div className="topbar__user">
                <div className="dropdown ">
                  <a
                    href="javascript:void(0);"
                    id="dropdownProfile"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="topbar__dropdownMenu__links__username">
                      {userType === 'clinic'
                        ? `${user?.name}`
                        : `${user?.name} ${user?.surname}`}
                    </span>
                    <img
                      className="topbar__user__avatarContainer"
                      src={user ? StaticAvatar : StaticAvatar}
                      alt={'notification'}
                    />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownProfile"
                  >
                    <div
                      className="topbar__dropdownMenu__links__link dropdown-item"
                      onClick={() => {
                        eraseCookie(['token', 'user_type', 'user_id']);
                        window.location.pathname = '/';
                      }}
                    >
                      <img
                        src={logoutIcon}
                        className="topbar__dropdownMenu__links__link__icon"
                      ></img>
                      <div className="topbar__dropdownMenu__links__link__text">
                        Logout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
