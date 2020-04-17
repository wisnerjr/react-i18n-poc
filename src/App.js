import React, { Component, Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

class TranslatedClass extends Component {
  render() {
    const { t } = this.props;
    return <h2>{t('key')}</h2>;
  }
}

const Welcome = withTranslation()(TranslatedClass);

function MyComponent() {
  return (
    <Trans i18nKey="description.part1">
      To get started, edit <code>src/App.js</code> and save to reload.
    </Trans>
  );
}

function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <div className="Container-button">
          <button className="Button-style" onClick={() => changeLanguage('en')}>en</button>
          <button className="Button-style" onClick={() => changeLanguage('br')}>br</button>
          <button className="Button-style" onClick={() => changeLanguage('es')}>es</button>
          <button className="Button-style" onClick={() => changeLanguage('ch')}>ch</button>
        </div>
      </div>
      <div className="App-intro">
        <MyComponent />
      </div>
      <div>{t('description.part2')}</div>
    </div>
  );
}

const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}