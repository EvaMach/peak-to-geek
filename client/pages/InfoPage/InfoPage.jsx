import React from 'react';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader.jsx';
import './InfoPage.scss';
import Footer from '../../components/Footer/Footer.jsx';
import { Link, NavLink, Outlet } from 'react-router-dom';

const InfoPage = () => {
  return (
    <>
      <div className="container__topbar">
        <NavigationHeader />
      </div>
      <main className="about-project">
        <div className="about-project__container">
          <h1 id="about-project__title">Peak to Geek</h1>

          <nav id="info-navigation" className="info-navigation">
            <ul id="info-navigation__items">
              <li className="info-navigation__item">
                <NavLink
                  to="/info/about"
                  className={({ isActive }) =>
                    isActive ? 'info-navigation__item--actual' : ''
                  }
                >
                  O projektu
                </NavLink>
              </li>
              <li className="info-navigation__item">
                <NavLink
                  to="/info/nelca"
                  className={({ isActive }) =>
                    isActive ? 'info-navigation__item--actual' : ''
                  }
                >
                  Nelča
                </NavLink>
              </li>
              <li className="info-navigation__item">
                <NavLink
                  to="/info/evca"
                  className={({ isActive }) =>
                    isActive ? 'info-navigation__item--actual' : ''
                  }
                >
                  Evča
                </NavLink>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>

        <img
          className="about-project__tree"
          src={require('./img/tree.svg')}
          alt="Stromeček na info stránce"
        />
      </main>
      <Footer />
    </>
  );
};

export default InfoPage;
