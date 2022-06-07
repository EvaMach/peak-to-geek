import React from 'react';
import './MainHeader.css';
import '../style.css';
import { Link } from 'react-router-dom';
import DarkMode from '../DarkMode';

const MainHeader = () => {
  return (
    <div className="main-page__topbar">
      <DarkMode />
      <header className="main-page__header">
        <div id="logo" className="main-page__logo">
          <Link to="/">
            <img
              src={require('./img/tree-sloth.svg')}
              alt="Logo Peak to Geek (lenochod s notebookem)"
            />
          </Link>
        </div>
        <div id="main-page__login">
          <Link to="/login" className="main-page__login">
            Přihlásit se
          </Link>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
