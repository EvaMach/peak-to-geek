import React from 'react';

const Course = ({ courseName, courseUrl }) => {
  return (
    <a
      href={courseUrl}
      id="your-courses__course-bar"
      className="course-bar course-bar__actual-courses"
    >
      <p>{courseName}</p>
      <div className="course-bar__check">
        <img
          className="course__check-icon check-icon1"
          src={require('../img/checkbox__tick--empty.svg')}
          alt="Kontrola plnění kurzu"
        />
        <div className="course__study-day study-day1">PO</div>
      </div>
    </a>
  );
};
export default Course;
