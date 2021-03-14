import React from 'react';
import './loading.scss';
import Logo from '../../icons/Logo';
import LoadingIcon from '../../icons/loading.svg';

export default function Loading({ noBackground, fullscreen, innerScreen }) {
  return (
    <div
      className={`loadingContainer ${noBackground && 'noBackground'} ${
        fullscreen && 'fullscreen'
      } ${innerScreen && 'innerScreen'}
      `}
    >
      <Logo className="loadingLogo" />

      <img src={LoadingIcon} className="loading" />
    </div>
  );
}
