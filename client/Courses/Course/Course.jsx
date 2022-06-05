import React, { useState } from 'react';
import '../Courses.css';

const Course = ({ courseName, token, courseId, courseActive }) => {
  const [activeCourse, setActiveCourse] = useState(courseActive);

  return (
    <div
      className={
        activeCourse
          ? 'course-bar--active course-bar course-bar__actual-courses'
          : 'course-bar course-bar__actual-courses'
      }
    >
      <p>{courseName}</p>
      <button
        className="your-courses__add-dashboard-btn"
        onClick={() => {
          setActiveCourse(!activeCourse);
          fetch(`/api/course/${courseId}`, {
            method: 'POST',
            headers: {
              Authorization: token,
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              active: !activeCourse,
            }),
          });
        }}
      >
        {activeCourse ? 'Přidáno' : 'Přidat na dashboard'}
      </button>
    </div>
  );
};
export default Course;
