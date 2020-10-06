import React, {useEffect, useState} from 'react';

/*** Utils ***/
import store from "../../store";
import {getCookie} from "../../utils/cookie";

/*** Styles ***/
import styles from './profile.scss';

/*** Icons ***/
import editIcon from '../../icons/edit-icon.svg';


export default function Profile() {
  const [user, setUser] = useState();
  const [selectedTab, setSelectedTab] = useState(0);

  async function getUser() {
    let res = await store.getUserDetail({userId: getCookie('user_id')});

    setUser(res.data);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.Profile}>
      <div className={styles.profileCard}>
        <img className={styles.profileImage} src={user?.avatar} alt="avatar"/>
        <div className={styles.editIcon}>
          <img src={editIcon} alt=""/>
        </div>
      </div>
      <div className={styles.profileName}>
        {`${user?.name} ${user?.surname}`}
      </div>
      <div className={styles.tabs}>
        <div
          onClick={() => setSelectedTab(0)}
          className={`${styles.tab} ${selectedTab === 0 ? styles.selected : ''}`}
        >Overview</div>
        <div
          onClick={() => setSelectedTab(1)}
          className={`${styles.tab} ${selectedTab === 1 ? styles.selected : ''}`}
        >Settings</div>
      </div>
    </div>
  );
};
