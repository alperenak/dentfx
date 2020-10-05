import React from "react";

/*** Components ***/
import Input from "../Input";

/*** Styles ***/
import styles from './topbar.scss';

/*** Icons ***/
import logo from '../../assets/icons/logo.svg';
import filterIcon from '../../icons/filter-icon.svg';
import notification from '../../icons/notification-icon.svg';

export default function UserTopBar() {
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
        Dursun Yılmaz
        <img className={styles.avatarContainer} src={notification} alt={'notification'} />
      </div>
    </div>
  );
};
