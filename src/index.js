import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import * as i18n from './i18n';
import App from './App';
import { PhraseAppProvider } from 'react-i18next-phraseapp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <I18nextProvider i18n={ i18n }>
    <PhraseAppProvider config={ window.PHRASEAPP_CONFIG }>
      <App />
    </PhraseAppProvider>,
  // </I18nextProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
