import React, { useState, useEffect } from 'react';
import './Courses.css';
import '../style.css';
import NavigationHeader from '../NavigationHeader/NavigationHeader.jsx';
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
  }, []);

  const handleAddCourse = (courseName, courseUrl) => {
    fetch('api/courses', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: courseName,
        url: courseUrl,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.results);
      });
  };

  return (
    <>
      <div className="container">
        <NavigationHeader />

        <main>
          <h1 id="courses__title">Tvoje kurzy</h1>
          <AddCourse onNewCourse={handleAddCourse} />
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
