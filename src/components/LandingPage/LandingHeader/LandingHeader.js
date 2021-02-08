import React from 'react';
import './LandingHeader.scss';
import { Logo } from '../../../icons/index';
import { Link } from 'react-router-dom';
import AppleLogo from '../../../assets/images/apple-logo.png';

const LandingHeader = () => {
  return (
    <>
      <div className='header'>
        <div className='header__logoContainer'>
          <Logo className='header__logoContainer__logo' />
        </div>
        <div className='header__links'>
          <Link
            className='header__buttonContainer__menu'
            to={'/login'}
            style={{ textDecoration: 'none' }}
          >
            Giris yap
          </Link>
          <div className='header__rectangle'></div>
          <div className='header__rectangle'></div>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
