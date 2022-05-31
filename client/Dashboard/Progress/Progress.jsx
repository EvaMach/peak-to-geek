import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Progress = ({ token }) => {
  const [userProgress, setUserProgress] = useState(0);

  useEffect(() => {
    fetch('./api/my-tree', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserProgress(data.results.tree.length);
      });
  }, []);

  console.log(userProgress);

  return (
    <>
      <div className="dashboard__streak-update">
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: 360 }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          <img
            className="streak-update__crown-icon"
            src={require('../img/progress-crown.svg')}
            alt="Ikonka progress korunky"
          />
        </motion.div>
        <p>Svůj strom pěstuješ už XY. den v řadě</p>
      </div>
      <div className="dashboard__tree-progress">
        <div className="tree-progress__label">
          Tvůj postup znalostním stromem
        </div>
        <div className="tree-progress__bar">
          <div
            className="tree-progress__bar--actual"
            style={{ width: `${userProgress}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Progress;
