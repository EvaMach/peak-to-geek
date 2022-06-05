import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardCourse from './DashboardCourse/DashboardCourse.jsx';

const DashboardCourses = ({ token }) => {
  const [activeCourses, setActiveCourses] = useState(null);

  useEffect(() => {
    fetch('/api/user-dashboard', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setActiveCourses(data.results);
      });
  }, []);

  return (
    <div className="dashboard__actual-courses">
      <h3 id="actual-courses__title">Tvoje aktuální kurzy</h3>
      <div className="actual-courses__info">
        {activeCourses === null || activeCourses.dashboard === undefined ? (
          <div className="actual-courses__empty">Nemáš žádné aktivní kurzy</div>
        ) : (
          <>
            <h2>{activeCourses.streak}</h2>
            {activeCourses.dashboard.map((activeCourse) => (
              <DashboardCourse
                key={activeCourse.name}
                courseName={activeCourse.name}
                courseUrl={activeCourse.url}
                courseId={activeCourse.id}
                courseActive={activeCourse.active}
                courseDone={activeCourse.done}
                token={token}
              />
            ))}
          </>
        )}
      </div>
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
