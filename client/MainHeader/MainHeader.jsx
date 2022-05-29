import React from 'react';
import './MainHeader.css';
import '../style.css';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header>
      <header className="main-page__header">
        <div className="left-side header__left-side">
          <div id="logo" className="main-page__logo">
            <Link to="/">
              <img
                src={require('./img/logo-nerd-sloth.png')}
                alt="Logo Peak to Geek"
              />
            </Link>
          </div>
        </div>
        <div className="right-side header__right-side">
          <Link to="/login" className="main-page__login">
            Přihlásit se
          </Link>
        </div>
      </header>
    </header>
  );
};

export default MainHeader;
