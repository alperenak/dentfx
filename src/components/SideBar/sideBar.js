import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/*** Styles ***/
import './sidebar.scss';

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
// import Card from '../Card/card';

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
      href: '/',
      MenuIcon: <Anasayfa className={'list__listItem__menuIcon'} />,
      not: ['dentist', 'clinic'],
    },
    {
      title: 'Profilim',
      href: `/profile/${getCookie('user_id')}`,
      MenuIcon: <Profilim className={'list__listItem__menuIcon'} />,
      not: ['user'],
    },
    {
      title: 'Takvim',
      MenuIcon: <Takvim className={'list__listItem__menuIcon'} />,
      href: '/calendar',
      not: ['user'],
    },
    {
      title: 'Randevularım',
      MenuIcon: <Randevular className={'list__listItem__menuIcon'} />,
      href: '/appointment',
      not: [],
    },
    {
      title: 'Hastalar',
      href: '/patients',
      MenuIcon: <Hastalar className={'list__listItem__menuIcon'} />,
      not: ['user'],
    },
    {
      title: 'Klinisyen',
      href: '/clinician',
      MenuIcon: <Klinisyen className={'list__listItem__menuIcon'} />,
      not: ['dentist', 'user'],
    },
    {
      title: 'Raporlar ',
      href: '/reports',
      MenuIcon: <Fatura className={'list__listItem__menuIcon'} />,
      not: ['dentist', 'user'],
    },
    {
      title: 'Sorular',
      MenuIcon: <Sorular className={'list__listItem__menuIcon'} />,
      href: '/messages',
      not: [],
    },
    {
      title: 'Tedavi Yönetimi',
      MenuIcon: <TedaviYonetim className={'list__listItem__menuIcon'} />,
      href: '/treatmentManagement',
      not: ['user'],
    },

    {
      title: 'Tedavi Geçmişi',
      MenuIcon: <TedaviGecmisi className={'list__listItem__menuIcon'} />,
      href: '/paymenthistory',
      not: ['dentist', 'clinic'],
    },
    {
      title: 'Profilim',
      href: `/profile/${getCookie('user_id')}`,
      MenuIcon: <Profilim className={'list__listItem__menuIcon'} />,
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
      <div key={i} className="listWrapper">
        <Link
          to={item.href}
          className={returnClassName(item.href, clickedLink)}
          onClick={() => setClickedLink(item.href)}
        >
          {item.MenuIcon}
          <div className={'list__listItem__text'}>{item.title}</div>
        </Link>
      </div>
    );
  });
}

export default function SideBar() {
  return (
    // <Card type="whiteBoard">
    <div className="list sideBarClass">
      <RenderList />
    </div>
    // </Card>
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
