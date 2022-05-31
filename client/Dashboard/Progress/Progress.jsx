import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Progress = ({ token }) => {
  const [userProgress, setUserProgress] = useState(0);
  const controls = useAnimation();

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

  controls.start({
    width: `${userProgress}%`,
    transition: { duration: 3 },
  });

  return (
    <>
      <div className="dashboard__streak-update">
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: 360 }}
          transition={{ duration: 2, delay: 0 }}
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
