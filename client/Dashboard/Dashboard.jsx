import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import DashboardCourses from './DashboardCourses/DashboardCourses.jsx';
import Progress from './Progress/Progress.jsx';
import FollowUp from './FollowUp/FollowUp.jsx';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div className="container__topbar">
        <header>
          <div id="logo" className="dashboard__logo">
            <Link to="/">
              <img src="img/logo-nerd-sloth.png" alt="Peak to Geek logo" />
            </Link>
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
