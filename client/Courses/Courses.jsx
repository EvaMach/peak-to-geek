import React, { useState, useEffect } from 'react';
import '../style-new.css';
import Navigation from '../Navigation/Navigation.jsx';
import { Link } from 'react-router-dom';
import Course from './Course/Course.jsx';
import AddCourse from './AddCourse/AddCourse.jsx';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/courses')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.results);
      });
  }, [courses]);

  return (
    <>
      <div className="container">
        <header>
          <div id="logo" className="courses__logo">
            <Link to="/">
              <img src="img/logo-nerd-sloth.png" alt="" />
            </Link>
          </div>
          <Navigation />
        </header>
        <main>
          <h1 id="courses__title">Tvoje kurzy</h1>
          <AddCourse />
          <h2 id="community__title">Kurzy komunity</h2>
          {courses.map((course) => (
            <Course key={course.url} courseName={course.name} />
          ))}
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Courses;
