import React from 'react';

const Home = () => {
  return (
    <>
      <div id="app">
        <div class="container">
          <header class="main-page__header">
            <div class="left-side header__left-side">
              <div id="logo" class="main-page__logo">
                <a href="index.html">
                  <img src="img/logo-nerd-sloth.png" alt="Logo Peak to Geek" />
                </a>
              </div>
            </div>
            <div class="right-side header__right-side">
              <a class="main-page__login" href="login.html">
                Přihlásit se
              </a>
            </div>
          </header>
          <main class="main-page__main">
            <div class="left-side main__left-side">
              <h1 id="main-page__title">Peak to Geek</h1>
              <div class="main-page__info">
                <p class="main-page__text">
                  Sleduj svůj progress napříč IT společně s komunitou stejně
                  motivovaných nadšenců
                </p>
                <a id="main-page__signup-link" href="login.html">
                  <button id="main-page__signup-button">Přidej se!</button>
                </a>
              </div>
            </div>
            <div class="right-side main__right-side">
              <div class="main-page__tree">
                <img class="tree__image" src="img/tree.svg" alt="Stromeček" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
