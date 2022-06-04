import React, { useState } from 'react';

const Course = ({ courseName, token, courseId, courseActive }) => {
  const [activeCourse, setActiveCourse] = useState(courseActive);

  console.log(activeCourse);
  console.log(courseId);
  return (
    <div
      onClick={() => {
        setActiveCourse(!activeCourse);
        fetch(`/api/course/${courseId}`, {
          method: 'POST',
          headers: {
            Authorization: token,
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            done: !activeCourse,
          }),
        });
      }}
      id="your-courses__course-bar"
      className={
        activeCourse
          ? 'course-bar--active course-bar course-bar__actual-courses'
          : 'course-bar course-bar__actual-courses'
      }
    >
      <p>{courseName}</p>
    </div>
  );
};
export default Course;
