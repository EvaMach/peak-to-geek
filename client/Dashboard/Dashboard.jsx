import React from 'react';
import Navigation from '../Navigation';
import DashboardCourses from './DashboardCourses';
import Progress from './Progress';
import FollowUp from './FollowUp';

const Dashboard = () => {
  return (
    <>
      <div className="container__topbar">
        <header>
          <div id="logo" className="dashboard__logo">
            <a href="index.html">
              <img src="img/logo-nerd-sloth.png" alt="Peak to Geek logo" />
            </a>
          </div>

          <Navigation />
        </header>
      </div>
      <div className="container">
        <main id="dashboard__core">
          <div className="dashboard__left-side">
            <h1 id="dashboard__title">Ahoj Aničko!</h1>
            <Progress />
            <DashboardCourses />
          </div>
          <FollowUp />
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Dashboard;
