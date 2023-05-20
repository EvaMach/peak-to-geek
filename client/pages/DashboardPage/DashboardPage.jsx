import React, { useEffect, useState } from 'react';
import './DashboardPage.scss';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader.jsx';
import DashboardCourses from './DashboardCourses/DashboardCourses.jsx';
import Progress from './Progress/Progress.jsx';
import FollowUp from './FollowUp/FollowUp.jsx';
import Footer from '../../components/Footer/Footer';

const DashboardPage = () => {
  const token = window.localStorage.getItem('token');
  if (token === null) {
    window.location = '/login';
  }

  const [userName, setUserName] = useState('');

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

      <div className="container">
        <main id="dashboard__core">
          <div className="dashboard__left-side">
            <h1 id="dashboard__title">Ahoj {userName}!</h1>
            <Progress token={token} />
            <DashboardCourses token={token} />
          </div>
          <FollowUp token={token} />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
