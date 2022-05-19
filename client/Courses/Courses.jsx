import React from 'react';
import Navigation from '../Navigation';

const Courses = () => {
  return (
    <>
      <div class="container">
        <header>
          <div id="logo" className="courses__logo">
            <a href="index.html">
              <img src="img/logo-nerd-sloth.png" alt="" />
            </a>
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
