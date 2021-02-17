import React, { createContext, useState } from 'react';

export const MainLoadingContext = createContext();
export const FullScreenLoadingContext = createContext();

export function FullScreenLoadingContextProvider(props) {
  const [LoadingData, setLoadingData] = useState(false);
  return (
    <FullScreenLoadingContext.Provider value={[LoadingData, setLoadingData]}>
      {props.children}
    </FullScreenLoadingContext.Provider>
  );
}
export function MainLoadingContextProvider(props) {
  const [LoadingData, setLoadingData] = useState(false);
  return (
    <MainLoadingContext.Provider value={[LoadingData, setLoadingData]}>
      {props.children}
    </MainLoadingContext.Provider>
  );
}
