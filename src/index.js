import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import '../public/login-icon.ico';
import '../public/manifest.json';
import '../public/login-icon.png';

import {
  FullScreenLoadingContextProvider,
  MainLoadingContextProvider,
} from './context/loadingContext';
import { AlertContextProvider } from './context/alertContext';

ReactDOM.render(
  <AlertContextProvider>
    <MainLoadingContextProvider>
      <FullScreenLoadingContextProvider>
        <App />
      </FullScreenLoadingContextProvider>
    </MainLoadingContextProvider>
  </AlertContextProvider>,
  document.getElementById('root')
);
