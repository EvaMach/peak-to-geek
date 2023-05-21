import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Props {
  token: string;
}

const Progress = ({ token }: Props): JSX.Element => {
  const [userProgress, setUserProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    void fetch('./api/user', {
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

  void controls.start({
    width: `${(userProgress / 108) * 100}%`,
    transition: { duration: 2 },
  });

  return (
    <div className="dashboard__tree-progress">
      <div className="tree-progress__label">Tvůj postup znalostním stromem</div>
      <div className="tree-progress__bar">
        <motion.div animate={controls} className="tree-progress__bar--actual" />
      </div>
    </div>
  );
};

export default Progress;
