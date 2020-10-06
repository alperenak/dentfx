import React, {useEffect, useState} from "react";

/*** Components ***/
import Input from "../Input";

/*** Utils ***/
import store from "../../store";
import {getCookie} from "../../utils/cookie";

/*** Styles ***/
import styles from './topbar.scss';

/*** Icons ***/
import logo from '../../assets/icons/logo.svg';
import filterIcon from '../../icons/filter-icon.svg';
import notification from '../../icons/notification-icon.svg';

export default function UserTopBar() {
  const [user, setUser] = useState();

  async function getUser() {
    let res = await store.getUserDetail({userId: getCookie('user_id')});

    setUser(res.data);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.Container}>
      <img className={styles.logo} src={logo} alt={'logo'} />
      <div className={styles.inputContainer}>
        <Input type={'text'} placeholder={'Ara'} size={'half'} />
        <div className={styles.filterIcon}>
          <img src={filterIcon} alt={'logo'} />
        </div>
      </div>
      <div className={styles.label}>DentFX Puanı<span>{`: 2000`}</span></div>
      <img className={styles.notification} src={notification} alt={'notification'} />
      <div className={styles.user}>
        {`${user?.name} ${user?.surname}`}
        <img className={styles.avatarContainer} src={user?.avatar} alt={'notification'} />
      </div>
    </div>
  );
};
