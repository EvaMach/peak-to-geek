import React, { useState, useEffect } from 'react';
import './Courses.scss';
import NavigationHeader from '../NavigationHeader/NavigationHeader.jsx';
import Course from './Course/Course.jsx';
import AddCourse from './AddCourse/AddCourse.jsx';
import CreateDashboard from './CreateDashboard/CreateDashboard.jsx';
import Footer from '../Footer/Footer.jsx';

const Courses = () => {
  const token = window.localStorage.getItem('token');
  if (token === null) {
    window.location = '/login';
  }

  const [courses, setCourses] = useState([]);
  const [userCourses, setUserCourses] = useState([]);
  const [userDashboard, setUserDashboard] = useState(null);

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
        setUserDashboard(data.results.dashboard);
      });
  }, []);

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
        active: false,
        id: String(Math.floor(Math.random() * 100)),
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

  const handleCreateDashboard = () => {
    fetch('/api/create-dashboard', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    }).then((response) =>
      response.json().then((data) => setUserDashboard(data.results.dashboard)),
    );
  };

  const handleActiveCourse = (courseId, activeCourse) => {
    fetch(`/api/course/${courseId}`, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        active: !activeCourse,
      }),
    }).then((response) =>
      response.json().then((data) => setUserCourses(data.results)),
    );
  };

  return (
    <div id="your-courses__page">
      <div className="container__topbar">
        <NavigationHeader />
      </div>

      <div className="container your-courses__container">
        <main className="your-courses__main">
          <h1 id="courses__title">Tvoje kurzy</h1>
          {userCourses.map((userCourse) => (
            <Course
              key={userCourse.id}
              course={userCourse}
              token={token}
              userCourse={true}
              onActiveCourse={handleActiveCourse}
            />
          ))}

          <div className="your-courses__buttons">
            <AddCourse onNewCourse={handleAddCourse} />
            <CreateDashboard
              userDashboard={userDashboard}
              onCreateDashboard={handleCreateDashboard}
              activeCourses={userCourses.some(
                (course) => course.active === true,
              )}
            />
          </div>

          <h2 id="community__title">Kurzy komunity</h2>
          <h3 id="community__title--inspiration">
            Inspiruj se kurzy, které si přidali další geekové!
          </h3>
          {courses.map((course) => (
            <Course
              key={course.id}
              token={token}
              userCourse={false}
              course={course}
            />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
