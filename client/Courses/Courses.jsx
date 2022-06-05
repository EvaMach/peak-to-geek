import React, { useState, useEffect } from 'react';
import './Courses.css';
import NavigationHeader from '../NavigationHeader/NavigationHeader.jsx';
import Course from './Course/Course.jsx';
import AddCourse from './AddCourse/AddCourse.jsx';
import Footer from '../Footer/Footer.jsx';

const Courses = () => {
  const token = window.localStorage.getItem('token');
  if (token === null) {
    window.location = '/login';
  }
  const [courses, setCourses] = useState([]);
  const [userCourses, setUserCourses] = useState([]);

  useEffect(() => {
    fetch('/api/courses')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.results);
      });
    fetch('/api/user-courses', {
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

  console.log(userCourses);

  const handleAddCourse = (courseName, courseUrl) => {
    fetch('api/user-courses', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        name: courseName,
        url: courseUrl,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserCourses(data.results.courses);
      });
    if (courses.every((course) => course.name != courseName)) {
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
    }
  };

  return (
    <>
      <div id="your-courses__page">
        <div className="container__topbar">
          <NavigationHeader />
        </div>
        <div className="container container__your-courses">
          <main className="main__your-courses">
            <h1 id="courses__title">Tvoje kurzy</h1>
            {userCourses.map((userCourse) => (
              <Course
                key={userCourse.url}
                courseName={userCourse.name}
                courseId={userCourse.id}
                courseActive={userCourse.active}
                token={token}
              />
            ))}
            <AddCourse onNewCourse={handleAddCourse} />
            <h2 id="community__title">Kurzy komunity</h2>
            {courses.map((course) => (
              <Course
                key={course.url}
                courseName={course.name}
                courseUrl={course.url}
                token={token}
              />
            ))}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Courses;
