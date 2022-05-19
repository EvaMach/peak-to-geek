import React from 'react';

const Navigation = () => {
  return (
    <>
      <header>
        <div id="logo" class="info__logo">
          <Link to="/">
            <img src="img/logo-nerd-sloth.png" alt="Peak to Geek logo" />
          </Link>
        </div>
        <nav id="navigation" class="info__navigation">
          <img id="hamburger" src="img/hamburger.svg" alt="Hamburger menu" />
          <ul id="navigation__items">
            <Link to="/info">
              <li class="navigation__item navigation__item--actual">Info</li>
            </Link>
            <Link to="/dashboard">
              <li class="navigation__item">Dashboard</li>
            </Link>
            <Link to="/tree">
              <li class="navigation__item">Tvůj Geek strom</li>
            </Link>
            <Link to="/courses">
              <li class="navigation__item">Tvoje kurzy</li>
            </Link>
            <Link to="/login">
              <li class="navigation__item">
                <img src="img/icon__log-out.svg" alt="Ikona odhlášení" />
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
