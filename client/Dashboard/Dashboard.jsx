import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import NavigationHeader from '../NavigationHeader/NavigationHeader.jsx';
import DashboardCourses from './DashboardCourses/DashboardCourses.jsx';
import Progress from './Progress/Progress.jsx';
import FollowUp from './FollowUp/FollowUp.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const token = window.localStorage.getItem('token');
  if (token === null) {
    window.location = '/login';
  }

  useEffect(() => {
    fetch('api/user', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserName(data.results.name);
      });
  }, []);

  return (
    <>
      <div className="container__topbar">
        <NavigationHeader />
      </div>
      {/* <Outlet /> */}
      <div className="container">
        <main id="dashboard__core">
          <div className="dashboard__left-side">
            <h1 id="dashboard__title">Ahoj {userName}!</h1>
            <Progress token={token} />
            <DashboardCourses token={token} />
          </div>
          <FollowUp />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
