import React, { useState } from 'react';
import './NavigationHeader.css';
import '../style.css';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { NavLink } from 'react-router-dom';

const NavigationHeader = () => {
  const [isOpened, setIsOpened] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  // const addClass = () => {
  //   setIsActive(true);
  // };
  return (
    <header>
      <div id="logo" className="info__logo">
        <Link to="/">
          <img
            src={require('./img/logo_own--colored3.svg')}
            alt="Peak to Geek logo"
          />
        </Link>
      </div>
      <nav id="navigation" className="info__navigation">
        {/* <img
          onClick={() => setIsOpened(!isOpened)}
          id="hamburger"
          src={require('./img/hamburger.svg')}
          alt="Hamburger menu"
        /> */}

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
              to="/login"
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

          {/* <Link to="/info">
            <li className="navigation__item">Info</li>
          </Link> */}
          {/* <Link to="/dashboard">
            <li className="navigation__item">Dashboard</li>
          </Link>
          <Link to="/tree">
            <li className="navigation__item">Tvůj Geek strom</li>
          </Link>
          <Link to="/courses">
            <li className="navigation__item">Tvoje kurzy</li>
          </Link>
          <Link to="/login">
            <li
              onClick={() => localStorage.removeItem('token')}
              className="navigation__item"
            >
              <img
                src={require('./img/icon__log-out.svg')}
                alt="Ikona odhlášení"
              />
            </li>
          </Link> */}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationHeader;
