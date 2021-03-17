import React from 'react';
import './LandingHeader.scss';
import { Logo } from '../../../icons/index';
import { Link } from 'react-router-dom';
import appstore from '../../../assets/images/appstore.jpeg';
import googleplay from '../../../assets/images/googleplay.jpeg';

const LandingHeader = () => {
  return (
    <>
      <div className="header">
        <div className="header__logoContainer">
          <Logo className="header__logoContainer__logo" />
        </div>
        <div className="header__links">
          <Link
            className="header__buttonContainer__menu"
            to={'/login'}
            style={{ textDecoration: 'none' }}
          >
            Giriş Yap
          </Link>
          <div className="header__rectangle">
            <img src={appstore} />
          </div>
          <div className="header__rectangle">
            <img src={googleplay} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
