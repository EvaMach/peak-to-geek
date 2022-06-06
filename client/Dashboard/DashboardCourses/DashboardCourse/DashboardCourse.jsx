import React, { useState } from 'react';

const DashboardCourse = ({ token, course }) => {
  const [courseFinished, setCourseFinished] = useState(course.done);
  return (
    <div
      onClick={() => {
        setCourseFinished(!courseFinished);
        fetch(`/api/user-dashboard/course/${course.id}`, {
          method: 'POST',
          headers: {
            Authorization: token,
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            done: !courseFinished,
          }),
        });
      }}
      id="your-courses__course-bar"
      className="course-bar course-bar__actual-courses"
    >
      <p>{course.name}</p>
      <div className="course-bar__check">
        <img
          className="course__check-icon check-icon1"
          src={
            courseFinished
              ? require('./img/checkbox__tick--empty.svg')
              : require('./img/checkbox__circle.svg')
          }
          alt="Kontrola plnění kurzu"
        />
        {/* <div className="course__study-day study-day1">PO</div> */}
      </div>
    </div>
  );
};
export default DashboardCourse;
