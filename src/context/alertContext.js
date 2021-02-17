import React, { createContext, useState } from 'react';

export const AlertContext = createContext();

export function AlertContextProvider(props) {
  const [alertIsActive, setAlertIsActive] = useState(false);
  const [alertData, setAlertData] = useState({
    type: 'success',
    title: 'alertbox çalışıyor',
  });
  return (
    <AlertContext.Provider
      value={[setAlertIsActive, setAlertData, alertIsActive, alertData]}
    >
      {props.children}
    </AlertContext.Provider>
  );
}
