import React from 'react';
import './topBar.module.scss';
import { Logo } from '../../icons/index';
import { Link } from 'react-router-dom';
import searchIcon from '../../icons/loupe.svg';
const ButtonData = [
  { type: 'primary', title: 'Özelikler' },
  { type: 'primary', title: 'Fiyat' },
  { type: 'primary', title: 'İletişim' },
  { type: 'secondary', title: 'Uygulamaya Git', to: '/login' },
];

export default function TopBar() {
  return (
    <div className="topBarContainer">
      <div className="topBarContainer__logoContainer">
        <Logo className="topBarContainer__logoContainer__logo" />
      </div>
      <div className="topbar__inputContainer myInput">
        <input type="text" placeholder={'Ara'} />
        <div className="topbar__inputContainer__filterIcon">
          {/* <img src={filterIcon} alt={"logo"} /> */}
          <a href="/searchPage">
            <img src={searchIcon} alt={'logo'} />
          </a>
        </div>
      </div>
      <div className="topBarContainer__links">
        {ButtonData.map((item, i) => {
          return (
            <Link
              key={i}
              className={'topBarContainer__buttonContainer__menu'}
              to={item.to}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
