import React from 'react';
import '../style-new.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div id="app">
        <div className="container">
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
          <main className="main-page__main">
            <div className="left-side main__left-side">
              <h1 id="main-page__title">Peak to Geek</h1>
              <div className="main-page__info">
                <p className="main-page__text">
                  Sleduj svůj progress napříč IT společně s komunitou stejně
                  motivovaných nadšenců
                </p>
                <Link to="/login" id="main-page__signup-link">
                  <button id="main-page__signup-button">Přidej se!</button>
                </Link>
              </div>
            </div>
            <div className="right-side main__right-side">
              <div className="main-page__tree">
                <img
                  className="tree__image"
                  src={require('./img/tree.svg')}
                  alt="Stromeček"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
