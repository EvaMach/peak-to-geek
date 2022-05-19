import React from 'react';
import '../style-new.css';

const Home = () => {
  return (
    <>
      <div id="app">
        <div className="container">
          <header className="main-page__header">
            <div className="left-side header__left-side">
              <div id="logo" className="main-page__logo">
                <a href="index.html">
                  <img src="img/logo-nerd-sloth.png" alt="Logo Peak to Geek" />
                </a>
              </div>
            </div>
            <div className="right-side header__right-side">
              <a className="main-page__login" href="login.html">
                Přihlásit se
              </a>
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
                <a id="main-page__signup-link" href="login.html">
                  <button id="main-page__signup-button">Přidej se!</button>
                </a>
              </div>
            </div>
            <div className="right-side main__right-side">
              <div className="main-page__tree">
                <img
                  className="tree__image"
                  src="img/tree.svg"
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
