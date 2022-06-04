import React, { useState } from 'react';

const Course = ({ courseName, token, courseId, courseActive, courseDone }) => {
  const [activeCourse, setActiveCourse] = useState(courseActive);

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
            active: !activeCourse,
            done: courseDone,
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
