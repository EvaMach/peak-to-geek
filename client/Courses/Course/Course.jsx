import React from 'react';

const Course = ({ courseName }) => {
  return (
    <div className="course-bar actual-courses--course1">
      <p>{courseName}</p>
      <img
        className="course__check-icon check-icon1"
        src={require('../img/checkbox__tick--empty.svg')}
        alt="Kontrola plnění kurzu 1"
      />
      <div className="course__study-day study-day1">PO</div>
    </div>
  );
};
export default Course;
