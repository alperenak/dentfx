import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/*** Styles ***/
import './sidebar.scss';

/*** Icons ***/
import TakvimIcon from '../../icons/Takvim.svg';
import RandevularIcon from '../../icons/Randevular.svg';
import HastalarIcon from '../../icons/Hastalar.svg';
import KlinisyenIcon from '../../icons/Klinisyen.svg';
import FaturaIcon from '../../icons/Fatura.svg';
import SorularIcon from '../../icons/Sorular.svg';
import ProfilimIcon from '../../icons/Profilim.svg';
import MoneyIcon from '../../icons/Odemelerim.svg';
import MoneyIconBlue from '../../icons/OdemelerimBlue.svg';
import TedaviYonetimBlue from '../../icons/tedaviYonetimBlue.svg';
import TakvimIconBlue from '../../icons/TakvimBlue.svg';
import RandevularIconBlue from '../../icons/RandevularBlue.svg';
import HastalarIconBlue from '../../icons/HastalarBlue.svg';
import KlinisyenIconBlue from '../../icons/KlinisyenBlue.svg';
import FaturaIconBlue from '../../icons/FaturaBlue.svg';
import SorularIconBlue from '../../icons/SorularBlue.svg';
import ProfilimIconBlue from '../../icons/ProfilimBlue.svg';
import { getCookie } from '../../utils/cookie';
import {
  Anasayfa,
  Fatura,
  Hastalar,
  Klinisyen,
  Profilim,
  Randevular,
  Sorular,
  Takvim,
  TedaviGecmisi,
  TedaviYonetim,
} from '../../icons';

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
      title: 'Anasayfa',
      icon: ProfilimIcon,
      hoverIcon: ProfilimIconBlue,
      href: '/',
      MenuIcon: <Anasayfa className={'list__listItem__menuIcon'} />,
      not: ['dentist', 'clinic'],
    },
    {
      title: 'Takvim',
      icon: TakvimIcon,
      hoverIcon: TakvimIconBlue,
      MenuIcon: <Takvim className={'list__listItem__menuIcon'} />,
      href: '/calendar',
      not: ['user'],
    },
    {
      title: 'Randevularım',
      icon: RandevularIcon,
      MenuIcon: <Randevular className={'list__listItem__menuIcon'} />,
      hoverIcon: RandevularIconBlue,
      href: '/appointment',
      not: [],
    },
    {
      title: 'Hastalar',
      icon: HastalarIcon,
      hoverIcon: HastalarIconBlue,
      href: '/patients',
      MenuIcon: <Hastalar className={'list__listItem__menuIcon'} />,
      not: ['user'],
    },
    {
      title: 'Klinisyen',
      icon: KlinisyenIcon,
      hoverIcon: KlinisyenIconBlue,
      href: '/clinician',
      MenuIcon: <Klinisyen className={'list__listItem__menuIcon'} />,
      not: ['dentist', 'user'],
    },
    {
      title: 'Raporlar ',
      icon: FaturaIcon,
      hoverIcon: FaturaIconBlue,
      href: '/reports',
      MenuIcon: <Fatura className={'list__listItem__menuIcon'} />,
      not: ['dentist', 'user'],
    },
    {
      title: 'Sorular',
      icon: SorularIcon,
      hoverIcon: SorularIconBlue,
      MenuIcon: <Sorular className={'list__listItem__menuIcon'} />,
      href: '/messages',
      not: [],
    },
    {
      title: 'Tedavi Yönetimi',
      icon: TedaviYonetimBlue,
      hoverIcon: TedaviYonetimBlue,
      MenuIcon: <TedaviYonetim className={'list__listItem__menuIcon'} />,
      href: '/treatmentManagement',
      not: ['user'],
    },
    {
      title: 'Profilim',
      icon: ProfilimIcon,
      hoverIcon: ProfilimIconBlue,
      href: `/profile/${getCookie('user_id')}`,
      MenuIcon: <Profilim className={'list__listItem__menuIcon'} />,
      not: [],
    },
    {
      title: 'Tedavi Geçmişi',
      icon: MoneyIcon,
      hoverIcon: MoneyIconBlue,
      MenuIcon: <TedaviGecmisi className={'list__listItem__menuIcon'} />,
      href: '/paymenthistory',
      not: ['dentist', 'clinic'],
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
    if (item?.not.includes(getCookie('user_type'))) return <div></div>;

    return (
      <Link
        key={i}
        to={item.href}
        className={returnClassName(item.href, clickedLink)}
        onClick={() => setClickedLink(item.href)}
      >
        {item.MenuIcon}
        <div className={'list__listItem__text'}>{item.title}</div>
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

function returnClassName(hrefName, clickedLink) {
  let pathname = window.location.pathname;
  if (pathname === '/') {
    return hrefName === '/' &&
      (hrefName === pathname || hrefName.includes(clickedLink))
      ? 'list__listItem list__listItemClicked'
      : 'list__listItem';
  } else
    return hrefName.includes(window.location.pathname) ||
      hrefName.includes(clickedLink)
      ? 'list__listItem list__listItemClicked'
      : 'list__listItem';
}
