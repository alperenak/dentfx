import React, { useEffect, useState } from 'react';
import CheckIcon from '../../icons/check-circle-fill.svg';
import XIcon from '../../icons/x-circle-fill.svg';
import './index.scss';

export default function AlertBox({ isActive, setIsActive, alertData }) {
  return (
    <>
      {isActive && (
        <RenderAlertbox setIsActive={setIsActive} alertData={alertData} />
      )}
    </>
  );
}

export function RenderAlertbox({ setIsActive, alertData }) {
  const [activeAlert, setActiveAlert] = useState(true);
  useEffect(() => {
    setTimeout(() => setActiveAlert(false), 3000);
    setTimeout(() => setIsActive(false), 4300);
  }, []);
  return (
    <div className={'alertBoxWrapper'}>
      <div
        className={`alertboxContainer ${
          !activeAlert && 'closeAlertboxContainer'
        } ${
          alertData?.type === 'success'
            ? 'alertboxContainerSuccess'
            : 'alertboxContainerError'
        }`}
      >
        <div className={'alertbox'}>
          <div className={'alertMessage'}>
            {alertData?.type === 'error' && (
              <div className={'alertMessageIcon'}>
                <img src={XIcon} className={'errorIcon'} />
              </div>
            )}
            {alertData?.type === 'success' && (
              <div className={'alertMessageIcon'}>
                <img src={CheckIcon} className={'successIcon'} />
              </div>
            )}
            <div className={'alertMessageTitle'}>{alertData?.title}</div>
          </div>

          <div className={'alertProgressBar'} />
        </div>
      </div>
    </div>
  );
}
