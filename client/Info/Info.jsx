import React from 'react';
import NavigationHeader from '../NavigationHeader/NavigationHeader.jsx';
import './Info.scss';
import '../style.css';
import Footer from '../Footer/Footer.jsx';
import { Link, Outlet } from 'react-router-dom';

const Info = () => {
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
              <li className="info-navigation__item navigation__item--actual">
                <Link to="/info">O projektu</Link>
              </li>
              <li className="info-navigation__item">
                <Link to="/info/nelca">Nelča</Link>
              </li>
              <li className="info-navigation__item">
                <Link to="/info/evca">Evča</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>

        <img
          id="about-project__tree"
          src={require('./img/tree.svg')}
          alt="Stromeček v rámci info stránky"
        />
      </main>
      <Footer />
    </>
  );
};

export default Info;
