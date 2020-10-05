import React, {useState} from "react";

/*** Styles ***/
import styles from './sidebar.scss';

/*** Icons ***/
import homeIcon from '../../icons/home-icon.svg';
import homeIconBlue from '../../icons/home-icon-blue.svg';
import profileIcon from '../../icons/profile-icon.svg';
import profileIconBlue from '../../icons/profile-icon-blue.svg';
import messageIcon from '../../icons/messages-icon.svg';
import messageIconBlue from '../../icons/messages-icon-blue.svg';
import randevuIcon from '../../icons/randevu-icon.svg';
import randevuIconBlue from '../../icons/randevu-icon-blue.svg';
import walletIcon from '../../icons/wallet-icon.svg';
import walletIconBlue from '../../icons/wallet-icon-blue.svg';
import kampanyaIcon from '../../icons/kampanya-icon.svg';
import kampanyaIconBlue from '../../icons/kampanya-icon-blue.svg';
import dentfxSocialIcon from '../../icons/dentfx-social-icon.svg';
import dentfxSocialIconBlue from '../../icons/dentfx-social-icon-blue.svg';

function RenderList() {
  const tempList = [
    { title: 'Anasayfa', icon: homeIcon, hoverIcon: homeIconBlue},
    { title: 'Profilim', icon: profileIcon, hoverIcon: profileIconBlue},
    { title: 'Sorularım', icon: messageIcon, hoverIcon: messageIconBlue},
    { title: 'Randevularım', icon: randevuIcon, hoverIcon: randevuIconBlue},
    { title: 'Cüzdanım', icon: walletIcon, hoverIcon: walletIconBlue},
    { title: 'Kampanyalar', icon: kampanyaIcon, hoverIcon: kampanyaIconBlue},
    { title: 'DentFX Social', icon: dentfxSocialIcon, hoverIcon: dentfxSocialIconBlue},
  ];

  const [list, setList] = useState(tempList);
  const [hoverItem, setHoverItem] = useState(-1);

  return list.map((item, i) => {
    return (
      <div
        onMouseOver={() => setHoverItem(i)}
        onMouseLeave={() => setHoverItem(-1)}
        key={i}
        className={styles.listItem}
      >
        {hoverItem !== i && <img src={item.icon} alt={"icon"}/>}
        {hoverItem === i && <img src={item.hoverIcon} alt={"icon"}/>}
        <div className={styles.text}>{item.title}</div>
      </div>
    );
  });
}

export default function SideBar() {
  return (
    <div className={styles.List}>
      <RenderList />
    </div>
  );
};
