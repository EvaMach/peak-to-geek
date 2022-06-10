import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardCourse from './DashboardCourse/DashboardCourse.jsx';

const DashboardCourses = ({ token }) => {
  const [userDashboard, setUserDashboard] = useState(null);

  useEffect(() => {
    fetch('/api/user-dashboard', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserDashboard(data.results);
      });
  }, []);

  return (
    <div className="dashboard__actual-courses">
      <h3 id="actual-courses__title">Tvoje aktuální kurzy</h3>

      {userDashboard === null ? (
        <div className="actual-courses__empty">
          <h4>Nemáš žádné aktuální kurzy v rozvrhu 😱</h4>
          <p>
            Vytvoř si rozvrh s aktuálními kurzy ze sekce Tvoje kurzy a sleduj
            svůj každotýdenní progress!
          </p>
        </div>
      ) : (
        <>
          <div className="dashboard__streak-update">
            <motion.div
              animate={{ scale: [0, 1.5, 1] }}
              transition={{ duration: 0.7, delay: 0 }}
            >
              <img
                className="streak-update__crown-icon"
                src={require('../img/progress-crown.svg')}
                alt="Ikonka progress korunky"
              />
            </motion.div>
            <p>Kurzy sleduješ {userDashboard.streak}. týden v řadě.</p>
          </div>
          {userDashboard.dashboard.map((activeCourse) => (
            <DashboardCourse
              key={activeCourse.id}
              course={activeCourse}
              token={token}
            />
          ))}
        </>
      )}

      <Link to="/courses">
        <motion.button
          className="actual-courses__button"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
        >
          Zobrazit všechny kurzy
        </motion.button>
      </Link>
    </div>
  );
};

export default DashboardCourses;
