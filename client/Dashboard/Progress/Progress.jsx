import React from 'react';

const Progress = () => {
  return (
    <>
      <div className="dashboard__streak-update">
        <img
          className="streak-update__crown-icon"
          src="img/progress-crown.svg"
          alt="Ikonka progress korunky"
        />
        <p>Svůj strom pěstuješ už XY. den v řadě</p>
      </div>
      <div className="dashboard__tree-progress">
        <div className="tree-progress__label">
          Tvůj postup znalostním stromem
        </div>
        <div className="tree-progress__bar">
          <div className="tree-progress__bar--actual"></div>
        </div>
      </div>
    </>
  );
};

export default Progress;
