import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import App from './App';
import { PhraseAppProvider } from 'react-i18next-phraseapp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <PhraseAppProvider config={ window.PHRASEAPP_CONFIG }>
    <App />
  </PhraseAppProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
