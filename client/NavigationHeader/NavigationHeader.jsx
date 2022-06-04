import React, { useState } from 'react';
import './NavigationHeader.css';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { NavLink } from 'react-router-dom';

const NavigationHeader = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <header>
      <div id="logo" className="info__logo">
        <Link to="/dashboard">
          <img
            src={require('./img/logo_own--colored3.svg')}
            alt="Peak to Geek logo"
          />
        </Link>
      </div>
      <nav id="navigation" className="info__navigation">
        <Hamburger
          label="Show menu"
          rounded
          toggled={isOpened}
          toggle={setIsOpened}
        />

        <ul
          id={!isOpened ? 'navigation__items' : 'navigation__items--hamburger'}
        >
          <li className="navigation__item">
            <NavLink
              to="/info"
              className={({ isActive }) =>
                isActive ? 'navigation__item--actual' : ''
              }
            >
              Info
            </NavLink>
          </li>

          <li className="navigation__item">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? 'navigation__item--actual' : ''
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/tree"
              className={({ isActive }) =>
                isActive ? 'navigation__item--actual' : ''
              }
            >
              Tvůj Geek strom
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? 'navigation__item--actual' : ''
              }
            >
              Tvoje kurzy
            </NavLink>
          </li>

          <li
            onClick={() => localStorage.removeItem('token')}
            className="navigation__item"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'navigation__item--actual' : ''
              }
            >
              <img
                src={require('./img/icon__log-out.svg')}
                alt="Ikona odhlášení"
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationHeader;
