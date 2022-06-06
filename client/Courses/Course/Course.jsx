import React, { useState } from 'react';
import '../Courses.css';

const Course = ({ token, userCourse, course }) => {
  const [activeCourse, setActiveCourse] = useState(course.active);

  return (
    <div
      className={
        activeCourse
          ? 'course-bar--active course-bar course-bar__actual-courses'
          : 'course-bar course-bar__actual-courses'
      }
    >
      <p>{course.name}</p>
      {userCourse ? (
        <button
          className="course-bar__btn"
          onClick={() => {
            setActiveCourse(!activeCourse);
            fetch(`/api/course/${course.id}`, {
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
          {activeCourse ? 'Odebrat z dashboardu' : 'Přidat na dashboard'}
        </button>
      ) : (
        <a href={course.url} className="course-bar__btn">
          Přejít na kurz
        </a>
      )}
    </div>
  );
};
export default Course;
