import React, { useState } from 'react';
import '../Courses.css';

const Course = ({
  courseName,
  token,
  courseId,
  courseActive,
  userCourse,
  courseUrl,
}) => {
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
      {userCourse ? (
        <button
          className="course-bar__btn"
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
          {activeCourse ? 'Odebrat z dashboardu' : 'Přidat na dashboard'}
        </button>
      ) : (
        <a href={courseUrl} className="course-bar__btn">
          Přejít na kurz
        </a>
      )}
    </div>
  );
};
export default Course;
