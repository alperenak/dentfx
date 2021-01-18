import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
import patientIcon from '../../icons/patientSmall.svg';
import TakvimIcon from '../../icons/Takvim.svg';
import RandevularIcon from '../../icons/Randevular.svg';
import HastalarIcon from '../../icons/Hastalar.svg';
import KlinisyenIcon from '../../icons/Klinisyen.svg';
import FaturaIcon from '../../icons/Fatura.svg';
import SorularIcon from '../../icons/Sorular.svg';
import ProfilimIcon from '../../icons/Profilim.svg';
import patientIconBlue from '../../icons/patientSmallBlue.svg';
import TakvimIconBlue from '../../icons/TakvimBlue.svg';
import RandevularIconBlue from '../../icons/RandevularBlue.svg';
import HastalarIconBlue from '../../icons/HastalarBlue.svg';
import KlinisyenIconBlue from '../../icons/KlinisyenBlue.svg';
import FaturaIconBlue from '../../icons/FaturaBlue.svg';
import SorularIconBlue from '../../icons/SorularBlue.svg';
import ProfilimIconBlue from '../../icons/ProfilimBlue.svg';
import { getCookie } from '../../utils/cookie';

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
      icon: homeIcon,
      hoverIcon: homeIconBlue,
      href: `/`,
      not: ['dentist', 'clinic'],
    },
    {
      title: 'Takvim',
      icon: TakvimIcon,
      hoverIcon: TakvimIconBlue,
      href: `/calendar`,
      not: ['user'],
    },
    {
      title: 'Randevularım',
      icon: RandevularIcon,
      hoverIcon: RandevularIconBlue,
      href: `/appointment`,
      not: [],
    },
    {
      title: 'Hastalar',
      icon: HastalarIcon,
      hoverIcon: HastalarIconBlue,
      href: `/patients`,
      not: ['user'],
    },
    {
      title: 'Klinisyen',
      icon: KlinisyenIcon,
      hoverIcon: KlinisyenIconBlue,
      href: `/clinician`,
      not: ['dentist', 'user'],
    },
    {
      title: 'Raporlar ',
      icon: FaturaIcon,
      hoverIcon: FaturaIconBlue,
      href: `/reports`,
      not: ['dentist', 'user'],
    },
    {
      title: 'Sorular',
      icon: SorularIcon,
      hoverIcon: SorularIconBlue,
      href: `/messages`,
      not: [],
    },
    {
      title: 'Tedavi Yönetimi',
      icon: SorularIcon,
      hoverIcon: SorularIconBlue,
      href: `/treatmentManagement`,
      not: ['dentist'],
    },
    {
      title: 'Profilim',
      icon: ProfilimIcon,
      hoverIcon: ProfilimIconBlue,
      href: `/profile/${getCookie('user_id')}`,
      not: [],
    },
    {
      title: 'Tedavilerim/Odemelerim',
      icon: walletIcon,
      hoverIcon: walletIconBlue,
      href: `/paymenthistory`,
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
    if (item?.not.includes(getCookie('user_type'))) return <div></div>;
    console.log(pathnameNow);
    return (
      <Link
        key={i}
        to={item.href}
        className={
          item.href.includes(window.location.pathname) ||
          item.href.includes(clickedLink)
            ? 'list__listItem list__listItemClicked'
            : 'list__listItem'
        }
        onClick={() => setClickedLink(item.href)}
      >
        {/* {hoverItem !== i && !item.selected && (
          <img src={item.icon} alt={"icon"} />
        )}
        {(hoverItem === i || item.selected) && (
          <img src={item.hoverIcon} alt={"icon"} />
        )} */}
        {item.href.includes(window.location.pathname) ||
        item.href.includes(clickedLink) ? (
          <img src={item.hoverIcon} alt={'icon'} style={{ color: 'red' }} />
        ) : (
          <img src={item.icon} alt={'icon'} />
        )}
        <div className={'list__listItem__text'}>{item.title}</div>
      </Link>
    );
  });
}

export default function SideBar() {
  return (
    <div className='list sideBarClass'>
      <RenderList />
    </div>
  );
}
