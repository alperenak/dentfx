import React from "react";

/*** Styles ***/
import styles from "./footer.scss";

/*** Icons ***/
import twitterIcon from "../../icons/twitter-icon.svg";
import telegramIcon from "../../icons/telegram-icon.svg";
import facebookIcon from "../../icons/facebook-icon.svg";
import messengerIcon from "../../icons/messenger-icon.svg";
import instagramIcon from "../../icons/instagram-icon.svg";

import locationIcon from "../../icons/location-icon.svg";

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.section} ${styles.bulletPoints}`}>
        <div className={styles.textBlue}>© DentFX</div>
        <div className={styles.textMuted}>2020</div>
        <div className={styles.textMuted}>All rights reserved</div>
      </div>

      <div className={styles.section}>
        <div>
          <img src={locationIcon} alt="" />
        </div>
        <div className={styles.textBlue}>34734</div>
        <div className={styles.textMuted}>
          Kadıköy, <span className={styles.textBlue}>İstanbul</span>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.textMuted}>Privacy</div>
        <div className={styles.textMuted}>Terms</div>
      </div>

      <div className={styles.section}>
        <img src={telegramIcon} alt="" className={styles.socialIcon} />
        <img src={twitterIcon} alt="" className={styles.socialIcon} />
        <img src={facebookIcon} alt="" className={styles.socialIcon} />
        <img src={messengerIcon} alt="" className={styles.socialIcon} />
        <img src={instagramIcon} alt="" className={styles.socialIcon} />
      </div>
    </footer>
  );
};

export default Footer;
