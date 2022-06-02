import React, { useEffect } from 'react';
// import '../style-responsivity.css';
import './Dashboard.css';
import '../style.css';
import NavigationHeader from '../NavigationHeader/NavigationHeader.jsx';
import DashboardCourses from './DashboardCourses/DashboardCourses.jsx';
import Progress from './Progress/Progress.jsx';
import FollowUp from './FollowUp/FollowUp.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const token = window.localStorage.getItem('token');
  if (token === null) {
    window.location = '/login';
  }

  useEffect(() => {
    fetch('./api/my-tree', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.results.tree.forEach((item) => {
          const branchId = item.slice(0, 1);
          const leafId = item.slice(1, 2);
          const itemId = item.slice(2);
          fetch(
            `/api/my-tree/branch/${branchId}/leaf/${leafId}/item/${itemId}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                done: true,
              }),
            },
          );
        });
      });
  }, []);

  return (
    <>
      <div className="container__topbar">
        <NavigationHeader />
      </div>
      <Outlet />
      <div className="container">
        <main id="dashboard__core">
          <div className="dashboard__left-side">
            <h1 id="dashboard__title">Ahoj Aničko!</h1>
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
