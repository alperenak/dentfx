import React from 'react';
import styles from './index.module.scss';
import LoadingIcon from '../../icons/Loading.svg';

export default function Loading({ noBackground, fullscreen }) {
  return (
    <div
      className={`loadingContainer ${noBackground ? 'noBackground' : ''} ${
        fullscreen ? 'fullscreen' : ''
      }
      `}
    >
      <img src={LoadingIcon} className={styles.loading} />
    </div>
  );
}
