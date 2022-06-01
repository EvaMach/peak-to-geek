import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../../Courses/Course/Course';

const DashboardCourses = ({ token }) => {
  const [userCourses, setUserCourses] = useState([]);

  useEffect(() => {
    fetch('/api/my-courses', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserCourses(data.results.courses);
      });
  }, []);

  return (
    <div className="dashboard__actual-courses">
      <h3 id="actual-courses__title">Tvoje aktuální kurzy:</h3>
      <div className="actual-courses__info">
        {userCourses.map((userCourse) => (
          <Course key={userCourse.name} courseName={userCourse.name} />
        ))}
      </div>
      <Link to="/courses">
        <button className="actual-courses__button">
          Zobrazit všechny kurzy
        </button>
      </Link>
    </div>
  );
};

export default DashboardCourses;
