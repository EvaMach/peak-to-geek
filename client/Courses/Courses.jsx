import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <>
      <div className="container">
        <header>
          <div id="logo" className="courses__logo">
            <Link to="/">
              <img src="img/logo-nerd-sloth.png" alt="" />
            </Link>
          </div>
          <Navigation />
        </header>
        <main>
          <h1 id="courses__title">Tvoje kurzy</h1>
          <h2 id="community__title">Kurzy komunity</h2>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Courses;
