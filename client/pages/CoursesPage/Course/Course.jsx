import React, { useState } from 'react';
import '../CoursesPage.scss';

const Course = ({ userCourse, course, onActiveCourse }) => {
  const [activeCourse, setActiveCourse] = useState(course.active);

  if (userCourse) {
    return (
      <div
        className={
          activeCourse
            ? 'course-bar--active course-bar course-bar__actual-courses'
            : 'course-bar course-bar__actual-courses'
        }
      >
        <p>{course.name}</p>
        <button
          className="course-bar__btn"
          onClick={() => {
            setActiveCourse(!activeCourse);
            onActiveCourse(course.id, activeCourse);
          }}
        >
          {activeCourse ? 'Odebrat z rozvrhu' : 'Přidat do rozvrhu'}
        </button>
      </div>
    );
  } else {
    return (
      <div className="course-bar course-bar__actual-courses">
        <p>{course.name}</p>
        <a href={course.url} className="course-bar__btn">
          Přejít na kurz
        </a>
      </div>
    );
  }
};
export default Course;
