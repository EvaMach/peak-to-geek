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
      <img
        className="course__check-icon"
        src={
          courseFinished
            ? require('./img/checkbox__tick--empty.svg')
            : require('./img/checkbox__circle.svg')
        }
        alt="Kontrola plnění kurzu"
      />
      <p>{course.name}</p>
      <a href={course.url} target="_blank" className="course-bar__btn">
        Přejít na kurz
      </a>
    </div>
  );
};
export default DashboardCourse;
