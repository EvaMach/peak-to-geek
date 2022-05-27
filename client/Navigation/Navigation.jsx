import React from 'react';
// import '../style-responsivity.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <div id="logo" className="info__logo">
        <Link to="/">
          <img
            src={require('./img/logo-nerd-sloth.png')}
            alt="Peak to Geek logo"
          />
        </Link>
      </div>
      <nav id="navigation" className="info__navigation">
        <img
          id="hamburger"
          src={require('./img/hamburger.svg')}
          alt="Hamburger menu"
        />
        <ul id="navigation__items">
          <Link to="/info">
            <li className="navigation__item navigation__item--actual">Info</li>
          </Link>
          <Link to="/dashboard">
            <li className="navigation__item">Dashboard</li>
          </Link>
          <Link to="/tree">
            <li className="navigation__item">Tvůj Geek strom</li>
          </Link>
          <Link to="/courses">
            <li className="navigation__item">Tvoje kurzy</li>
          </Link>
          <Link to="/login">
            <li className="navigation__item">
              <img
                src={require('./img/icon__log-out.svg')}
                alt="Ikona odhlášení"
              />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
