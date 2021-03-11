import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import './assets/ico/login-icon.ico';
import './assets/ico/manifest.json';
import './assets/ico/login-icon.png';

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
