import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Progress = ({ token }) => {
  const [userProgress, setUserProgress] = useState(0);
  const [userDays, setUserDays] = useState(1);
  const controls = useAnimation();

  useEffect(() => {
    fetch('./api/user', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserProgress(data.results.tree.length);
        setUserDays(data.results.day);
      });
  }, []);

  controls.start({
    width: `${userProgress}%`,
    transition: { duration: 2 },
  });

  return (
    <>
      <div className="dashboard__streak-update">
        <motion.div
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ duration: 0.7, delay: 0 }}
        >
          <img
            className="streak-update__crown-icon"
            src={require('../img/progress-crown.svg')}
            alt="Ikonka korunky pro streak"
          />
        </motion.div>
        <p>Svůj strom pěstuješ už {userDays}. týden v řadě</p>
      </div>
      <div className="dashboard__tree-progress">
        <div className="tree-progress__label">
          Tvůj postup znalostním stromem
        </div>
        <div className="tree-progress__bar">
          <motion.div
            animate={controls}
            className="tree-progress__bar--actual"
          />
        </div>
      </div>
    </>
  );
};

export default Progress;
