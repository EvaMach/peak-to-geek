import React from 'react';

const Dashboard = () => {
  return (
    <>
      <div className="container__topbar">
        <header>
          <div id="logo" className="dashboard__logo">
            <a href="index.html">
              <img src="img/logo-nerd-sloth.png" alt="Peak to Geek logo" />
            </a>
          </div>

          <nav id="navigation" className="dashboard__navigation">
            <img id="hamburger" src="img/hamburger.svg" alt="Hamburger menu" />
            <ul id="navigation__items">
              <a href="info.html">
                <li className="navigation__item">Info</li>
              </a>
              <a href="dashboard.html">
                <li className="navigation__item navigation__item--actual">
                  Dashboard
                </li>
              </a>
              <a href="tree.html">
                <li className="navigation__item">Tvůj Geek strom</li>
              </a>
              <a href="courses.html">
                <li className="navigation__item">Tvoje kurzy</li>
              </a>
              <a href="login.html">
                <li className="navigation__item">
                  <img src="img/icon__log-out.svg" alt="Ikona odhlášení" />
                </li>
              </a>
            </ul>
          </nav>
        </header>
      </div>
      <div className="container">
        <main id="dashboard__core">
          <div className="dashboard__left-side">
            <h1 id="dashboard__title">Ahoj Aničko!</h1>
            <div className="dashboard__streak-update">
              <img
                className="streak-update__crown-icon"
                src="img/progress-crown.svg"
                alt="Ikonka progress korunky"
              />
              <p>Svůj strom pěstuješ už XY. den v řadě</p>
            </div>
            <div className="dashboard__tree-progress">
              <div className="tree-progress__label">
                Tvůj postup znalostním stromem
              </div>
              <div className="tree-progress__bar">
                <div className="tree-progress__bar--actual"></div>
              </div>
            </div>
            <div className="dashboard__actual-courses">
              <h3 id="actual-courses__title">Tvoje aktuální kurzy:</h3>
              <div className="actual-courses__info">
                <div className="course-bar actual-courses--course1">
                  <p>Coursera: UX design certificate</p>
                  <img
                    className="course__check-icon check-icon1"
                    src="img/checkbox__tick--empty.svg"
                    alt="Kontrola plnění kurzu 1"
                  />
                  <div className="course__study-day study-day1">PO</div>
                </div>
                <div className="course-bar actual-courses--course2">
                  <p>Skillshare - Learn Figma</p>

                  <img
                    className="course__check-icon check-icon2"
                    src="img/checkbox__cross--full.svg"
                    alt="Kontrola plnění kurzu 2"
                  />
                  <div className="course__study-day study-day2">PO</div>
                </div>
                <div className="course-bar actual-courses--course3">
                  <p>Youtube - Sketch course</p>
                  <img
                    className="course__check-icon check-icon3"
                    src="img/checkbox__circle.svg"
                    alt="Kontrola plnění kurzu 3"
                  />
                  <div className="course__study-day study-day3">ÚT</div>
                </div>
                <div className="course-bar actual-courses--course4">
                  <p>Czechitas: UX design kurz</p>
                  <img
                    className="course__check-icon check-icon1"
                    src="img/checkbox__tick--empty.svg"
                    alt="Kontrola plnění kurzu 4"
                  />
                  <div className="course__study-day study-day3">ČT</div>
                </div>
              </div>
              <a href="courses.html">
                <button className="actual-courses__button">
                  Zobrazit všechny kurzy
                </button>
              </a>
            </div>
          </div>
          <div className="dashboard__right-side">
            <img
              className="dashboard__image--sloth"
              src="img/sloth.svg"
              alt="Lenochod visící na stromě"
            />
            <div className="dashboard__follow-up">
              <div className="follow-up__leaves">
                <h3>Jaký lístek tě čeká?</h3>
                <div className="leaves__tree-checklist">
                  <img
                    className="leaves__leaf--inactive"
                    src="img/leaf__black.svg"
                    alt="Lísteček"
                  />
                  <p>Návody &amp; best practices</p>
                </div>
              </div>

              <div className="follow-up__tree">
                <div className="follow-up__tree-branch--left">
                  <div className="dashboard__motivation">
                    Nikdo učený z nebe nespadl. To dáš!
                  </div>
                </div>
                <div className="follow-up__treetop--left"></div>
              </div>
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
};
