import React from 'react';

const Navigation = () => {
  return (
    <>
      <header>
        <div id="logo" class="info__logo">
          <a href="index.html">
            <img src="img/logo-nerd-sloth.png" alt="Peak to Geek logo" />
          </a>
        </div>
        <nav id="navigation" class="info__navigation">
          <img id="hamburger" src="img/hamburger.svg" alt="Hamburger menu" />
          <ul id="navigation__items">
            <a href="info.html">
              <li class="navigation__item navigation__item--actual">Info</li>
            </a>
            <a href="dashboard.html">
              <li class="navigation__item">Dashboard</li>
            </a>
            <a href="tree.html">
              <li class="navigation__item">Tvůj Geek strom</li>
            </a>
            <a href="courses.html">
              <li class="navigation__item">Tvoje kurzy</li>
            </a>
            <a href="login.html">
              <li class="navigation__item">
                <img src="img/icon__log-out.svg" alt="Ikona odhlášení" />
              </li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
