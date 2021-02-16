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
import patientIcon from "../../icons/patientSmall.svg";
import TakvimIcon from "../../icons/Takvim.svg";
import RandevularIcon from "../../icons/Randevular.svg";
import HastalarIcon from "../../icons/Hastalar.svg";
import KlinisyenIcon from "../../icons/Klinisyen.svg";
import FaturaIcon from "../../icons/Fatura.svg";
import SorularIcon from "../../icons/Sorular.svg";
import ProfilimIcon from "../../icons/Profilim.svg";
import MoneyIcon from "../../icons/Odemelerim.svg";
import MoneyIconBlue from "../../icons/OdemelerimBlue.svg";
import TedaviYonetimBlue from "../../icons/tedaviYonetimBlue.svg";
import TakvimIconBlue from "../../icons/TakvimBlue.svg";
import RandevularIconBlue from "../../icons/RandevularBlue.svg";
import HastalarIconBlue from "../../icons/HastalarBlue.svg";
import KlinisyenIconBlue from "../../icons/KlinisyenBlue.svg";
import FaturaIconBlue from "../../icons/FaturaBlue.svg";
import SorularIconBlue from "../../icons/SorularBlue.svg";
import ProfilimIconBlue from "../../icons/ProfilimBlue.svg";
import { getCookie } from "../../utils/cookie";
import {
  Anasayfa,
  Fatura,
  Hastalar,
  Klinisyen,
  Odemelerim,
  Profilim,
  Randevular,
  Sorular,
  Takvim,
  TedaviYonetim,
} from "../../icons";

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
      icon: ProfilimIcon,
      hoverIcon: ProfilimIconBlue,
      href: "/",
      MenuIcon: <Anasayfa className={"list__listItem__menuIcon"} />,
      not: ["dentist", "clinic"],
    },
    {
      title: "Takvim",
      icon: TakvimIcon,
      hoverIcon: TakvimIconBlue,
      MenuIcon: <Takvim className={"list__listItem__menuIcon"} />,
      href: `/calendar`,
      not: ["user"],
    },
    {
      title: "Randevularım",
      icon: RandevularIcon,
      MenuIcon: <Randevular className={"list__listItem__menuIcon"} />,
      hoverIcon: RandevularIconBlue,
      href: `/appointment`,
      not: [],
    },
    {
      title: "Hastalar",
      icon: HastalarIcon,
      hoverIcon: HastalarIconBlue,
      href: `/patients`,
      MenuIcon: <Hastalar className={"list__listItem__menuIcon"} />,
      not: ["user"],
    },
    {
      title: "Klinisyen",
      icon: KlinisyenIcon,
      hoverIcon: KlinisyenIconBlue,
      href: `/clinician`,
      MenuIcon: <Klinisyen className={"list__listItem__menuIcon"} />,
      not: ["dentist", "user"],
    },
    {
      title: "Raporlar ",
      icon: FaturaIcon,
      hoverIcon: FaturaIconBlue,
      href: `/reports`,
      MenuIcon: <Fatura className={"list__listItem__menuIcon"} />,
      not: ["dentist", "user"],
    },
    {
      title: "Sorular",
      icon: SorularIcon,
      hoverIcon: SorularIconBlue,
      MenuIcon: <Sorular className={"list__listItem__menuIcon"} />,
      href: `/messages`,
      not: [],
    },
    {
      title: "Tedavi Yönetimi",
      icon: TedaviYonetimBlue,
      hoverIcon: TedaviYonetimBlue,
      MenuIcon: <TedaviYonetim className={"list__listItem__menuIcon"} />,
      href: `/treatmentManagement`,
      not: ["dentist"],
    },
    {
      title: "Profilim",
      icon: ProfilimIcon,
      hoverIcon: ProfilimIconBlue,
      href: `/profile/${getCookie("user_id")}`,
      MenuIcon: <Profilim className={"list__listItem__menuIcon"} />,
      not: [],
    },
    {
      title: "Tedavilerim / Ödemelerim",
      icon: MoneyIcon,
      hoverIcon: MoneyIconBlue,
      MenuIcon: <Odemelerim className={"list__listItem__menuIcon"} />,
      href: `/paymenthistory`,
      not: ["dentist", "clinic"],
    },
    // {
    //   title: 'Kampanyalar',
    //   icon: kampanyaIcon,
    //   hoverIcon: kampanyaIconBlue,
    //   href: `/campaigns`,
    //   not: ['user'],
    // },
    // {
    //   title: 'DentFX Social',
    //   icon: dentfxSocialIcon,
    //   hoverIcon: dentfxSocialIconBlue,
    //   href: `/social`,
    //   not: ['user'],
    // },
  ];

  const [list, setList] = useState(tempList);
  const [clickedLink, setClickedLink] = useState(false);
  const pathnameNow = window.location.pathname;
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
    console.log(
      item.href.length === 1 &&
        item.href === window.location.pathname &&
        item.href.includes(clickedLink)
    );
    return (
      <Link
        key={i}
        to={item.href}
        className={returnClassName(item.href, clickedLink)}
        onClick={() => setClickedLink(item.href)}
      >
        {/* <RenderMenu
          icon={item.icon}
          hoverIcon={item.hoverIcon}
          clickedLink={clickedLink}
          hrefName={item.href}
        /> */}

        {item.MenuIcon}
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
function RenderMenu({ hrefName, clickedLink, icon, hoverIcon }) {
  let pathname = window.location.pathname;
  console.log(hrefName);

  if (pathname === "/") {
    return (
      <>
        {hrefName === "/" &&
        (hrefName === pathname || hrefName.includes(clickedLink)) ? (
          <img src={hoverIcon} alt={"icon"} />
        ) : (
          <img src={icon} alt={"icon"} />
        )}
      </>
    );
  } else
    return (
      <>
        {hrefName.includes(window.location.pathname) ||
        hrefName.includes(clickedLink) ? (
          <img src={hoverIcon} alt={"icon"} />
        ) : (
          <img src={icon} alt={"icon"} />
        )}
      </>
    );
}
function returnClassName(hrefName, clickedLink) {
  let pathname = window.location.pathname;
  if (pathname === "/") {
    return hrefName === "/" &&
      (hrefName === pathname || hrefName.includes(clickedLink))
      ? "list__listItem list__listItemClicked"
      : "list__listItem";
  } else
    return hrefName.includes(window.location.pathname) ||
      hrefName.includes(clickedLink)
      ? "list__listItem list__listItemClicked"
      : "list__listItem";
}
