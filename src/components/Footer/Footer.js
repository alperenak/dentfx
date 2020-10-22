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
    <footer class="row">
      <div class="col-md-4">
	  <div className={"section"}>
        <div>
          <img src={locationIcon} alt="" />
        </div>
        <div className={"textBlue"}>34734</div>
        <div className={"textMuted"}>
          Kadıköy, <span className={"textBlue"}>İstanbul</span>
        </div>
      </div>
	  </div>


	  <div class="col-md-4">
	  <div className={"section"}>
		<div className={"textMuted"}>Privacy</div>
		<div className={"textMuted"}>Terms</div>
	  </div>
	  </div>

	  <div class="col-md-4">
	  <div className={"section"}>
        <img src={telegramIcon} alt="" className={"socialIcon"} />
        <img src={twitterIcon} alt="" className={"socialIcon"} />
        <img src={facebookIcon} alt="" className={"socialIcon"} />
        <img src={messengerIcon} alt="" className={"socialIcon"} />
        <img src={instagramIcon} alt="" className={"socialIcon"} />
      </div>
	  </div>

    </footer>
  );
};

export default Footer;
