import React, { useEffect, useState } from 'react';
import './DashboardPage.scss';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
// @ts-ignore
import DashboardCourses from '../DashboardPage/DashboardCourses/DashboardCourses';
import Progress from './Progress/Progress';
//@ts-ignore
import FollowUp from './FollowUp/FollowUp';
import { getUser } from '../../components/api/user';
import Footer from '../../components/Footer/Footer';

const DashboardPage = (): JSX.Element => {
  const [userName, setUserName] = useState('');
  const token = window.localStorage.getItem('token');
  if (token === null) {
    window.location = '/login' as unknown as Location;
  }


  useEffect(() => {
    void (async (): Promise<void> => {
      const user = await getUser(token!);
      setUserName(user.name);
    })();

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
            <Progress token={token!} />
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
