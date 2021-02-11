import React from 'react';
import './LandingFooter.scss';
import { Grid, TextField } from '@material-ui/core';

const LandingFooter = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer__top__items'>
          <p style={{ fontSize: '20px', color: 'white' }}>
            <span
              style={{ fontWeight: 'bold', fontSize: '24px', color: '#25f2ff' }}
            >
              Bultene
            </span>
            abone olun
          </p>
          <p style={{ fontSize: '16px', color: 'white' }}>
            Yeni kliniklerden haberdar olmak ister misiniz? Sadece kaydolun.
          </p>
        </div>
        <div className='footer__top__items'>
          <TextField
            className='footer__top__items__text'
            id='input-with-icon-grid'
            placeholder='mailadresim@gmail.com '
            inputProps={{
              style: {
                width: 400,
                color: '#a12b70',
                backgroundColor: 'white',
                borderRadius: '10%',
                padding: '10px',
              },
            }}
          />
        </div>
      </div>

      <div className='footer2'>
        <div>
          <p>Dentfx</p>
          <ul>
            <li>Hakkimizda</li>
            <li>Kullanim Kosullari</li>
            <li>Gizlilik Bildirimi</li>
            <li>Iletisim</li>
          </ul>
        </div>
        <div>
          <p>Müşteri Hizmetleri</p>
          <ul>
            <li>Klinikler Nerede?</li>
            <li>Yardim</li>
          </ul>
        </div>
        <div>
          <p>Hizmetler</p>
          <ul>
            <li>Implant</li>
            <li>Ortodonti</li>
            <li>Gulus Tasarimi</li>
          </ul>
        </div>
        <div>
          <p>Şehirler</p>
          <ul>
            <li>Ankara</li>
            <li>Istanbul</li>
            <li>Izmir</li>
          </ul>
        </div>
      </div>

      <div className='footer3'>
        <div>
          <p>2020-2021 Dentfx</p>
        </div>
        <div>
          <p>destek@dentfx.com</p>
        </div>
        <div>
          <p>+90 262 427 99 99</p>
        </div>
        <div>
          <p>social icons</p>
        </div>
      </div>
    </>
  );
};

export default LandingFooter;
