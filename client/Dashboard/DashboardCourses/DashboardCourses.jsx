import React from 'react';

const DashboardCourses = () => {
  return (
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
  );
};

export default DashboardCourses;
