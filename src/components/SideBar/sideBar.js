import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/*** Styles ***/
import styles from "./sidebar.scss";

/*** Icons ***/
import homeIcon from "../../icons/home-icon.svg";
import homeIconBlue from "../../icons/home-icon-blue.svg";
import profileIcon from "../../icons/profile-icon.svg";
import profileIconBlue from "../../icons/profile-icon-blue.svg";
import messageIcon from "../../icons/messages-icon.svg";
import messageIconBlue from "../../icons/messages-icon-blue.svg";
import randevuIcon from "../../icons/randevu-icon.svg";
import randevuIconBlue from "../../icons/randevu-icon-blue.svg";
import walletIcon from "../../icons/wallet-icon.svg";
import walletIconBlue from "../../icons/wallet-icon-blue.svg";
import kampanyaIcon from "../../icons/kampanya-icon.svg";
import kampanyaIconBlue from "../../icons/kampanya-icon-blue.svg";
import dentfxSocialIcon from "../../icons/dentfx-social-icon.svg";
import dentfxSocialIconBlue from "../../icons/dentfx-social-icon-blue.svg";
import { getCookie } from "../../utils/cookie";

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function RenderList() {
  const tempList = [
    {
      title: "Anasayfa",
      icon: homeIcon,
      hoverIcon: homeIconBlue,
      href: `/`,
      not: ["dentist"],
    },
    {
      title: "Profilim",
      icon: profileIcon,
      hoverIcon: profileIconBlue,
      href: `/profile/${getCookie("user_id")}`,
      not: [],
    },
    {
      title: "Sorularım",
      icon: messageIcon,
      hoverIcon: messageIconBlue,
      href: `/messages`,
      not: [],
    },
    {
      title: "Randevularım",
      icon: randevuIcon,
      hoverIcon: randevuIconBlue,
      href: `/appointment`,
      not: [],
    },
    {
      title: "Cüzdanım",
      icon: walletIcon,
      hoverIcon: walletIconBlue,
      href: `/wallet`,
      not: ["dentist"],
    },
    {
      title: "Kampanyalar",
      icon: kampanyaIcon,
      hoverIcon: kampanyaIconBlue,
      href: `/campaigns`,
      not: ["dentist"],
    },
    {
      title: "DentFX Social",
      icon: dentfxSocialIcon,
      hoverIcon: dentfxSocialIconBlue,
      href: `/social`,
      not: ["dentist"],
    },
  ];

  const [list, setList] = useState(tempList);
  const [hoverItem, setHoverItem] = useState(-1);

  const mounted = useRef();
  const prevList = usePrevious(list);

  useEffect(() => {
    if (!mounted.current) {
      setList(
        list.map((el) => {
          el.selected = window.location.pathname === el.href;
          return el;
        })
      );
      mounted.current = true;
    } else {
      if (Object.is(prevList, list)) {
        setList(
          list.map((el) => {
            el.selected = window.location.pathname === el.href;
            return el;
          })
        );
      }
    }
  });

  return list.map((item, i) => {
    if (item?.not.includes(getCookie("user_type"))) return <div></div>;
    return (
      <Link
        onMouseOver={() => setHoverItem(i)}
        onMouseLeave={() => setHoverItem(-1)}
        key={i}
        to={item.href}
        className={`${styles.listItem} ${item.selected ? styles.selected : ""}`}
      >
        {hoverItem !== i && !item.selected && (
          <img src={item.icon} alt={"icon"} />
        )}
        {(hoverItem === i || item.selected) && (
          <img src={item.hoverIcon} alt={"icon"} />
        )}
        <div className={styles.text}>{item.title}</div>
      </Link>
    );
  });
}

export default function SideBar() {
  return (
    <div className={styles.List}>
      <RenderList />
    </div>
  );
}
