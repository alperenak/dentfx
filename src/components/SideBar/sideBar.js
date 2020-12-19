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
import patientIcon from "../../icons/patientSmall.svg"
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
      not: ["dentist", "clinic"],
    },
    {
      title: "Takvim",
      icon: randevuIcon,
      hoverIcon: randevuIconBlue,
      href: `/calendar`,
      not: ['user'],
    },
    {
      title: "Randevularım",
      icon: randevuIcon,
      hoverIcon: randevuIconBlue,
      href: `/appointment`,
      not: [],
    },
    {
      title: "Hastalar",
      icon: patientIcon,
      hoverIcon: patientIcon,
      href: `/patients`,
      not: ["user"],
    },
    {
      title: "Klinisyen",
      icon: dentfxSocialIcon,
      hoverIcon: dentfxSocialIconBlue,
      href: `/clinician`,
      not: ["dentist", "user"],
    },
    {
      title: "Fatura ",
      icon: dentfxSocialIcon,
      hoverIcon: dentfxSocialIconBlue,
      href: `/fatura`,
      not: ["dentist", "user"],
    },
    {
      title: "Sorular",
      icon: messageIcon,
      hoverIcon: messageIconBlue,
      href: `/messages`,
      not: [],
    },
    {
      title: "Profilim",
      icon: profileIcon,
      hoverIcon: profileIconBlue,
      href: `/profile/${getCookie("user_id")}`,
      not: [],
    },
    {
      title: "Cüzdanım",
      icon: walletIcon,
      hoverIcon: walletIconBlue,
      href: `/wallet`,
      not: ["dentist", "clinic"],
    },
    {
      title: "Kampanyalar",
      icon: kampanyaIcon,
      hoverIcon: kampanyaIconBlue,
      href: `/campaigns`,
      not: ["dentist", "clinic"],
    },
    {
      title: "DentFX Social",
      icon: dentfxSocialIcon,
      hoverIcon: dentfxSocialIconBlue,
      href: `/social`,
      not: ["dentist", "clinic"],
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
			key={i}
			to={item.href}
			className="list__listItem"
		>
			{hoverItem !== i && !item.selected && (
				<img src={item.icon} alt={"icon"} />
			)}
			{(hoverItem === i || item.selected) && (
				<img src={item.hoverIcon} alt={"icon"} />
			)}
			<div className={"list__listItem__text"}>{item.title}</div>
		</Link>
    );
  });
}

export default function SideBar() {
  return (
    <div className="list sideBarClass">
      <RenderList />
    </div>
  );
}
