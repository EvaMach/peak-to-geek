import React, { useState, useEffect } from 'react';

const FollowUp = ({ token }) => {
  const [leafName, setLeafName] = useState('');

  useEffect(() => {
    fetch('/api/user', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        fetch(
          `/api/current-leaf/${String(
            Math.max.apply(
              0,
              data.results.tree.map((leaf) => Number(leaf)),
            ),
          ).slice(0, 2)}`,
        )
          .then((response) => response.json())
          .then((data) => {
            setLeafName(data.results);
          });
      });
  }, []);

  return (
    <div className="dashboard__right-side">
      <img
        className="dashboard__image--sloth"
        src={require('../img/sloth_own--colored.svg')}
        alt="Lenochod visící na stromě"
      />
      <img
        className="dashboard__image--liana"
        src={require('../img/liana.svg')}
        alt="Lenochod visící na stromě s dlouhou lianou"
      />
      <div className="dashboard__motivation">
        Nikdo učený z nebe nespadl. To dáš!
      </div>

      <div className="dashboard__follow-up">
        <div className="follow-up__leaves">
          <h3>Tvůj aktuální lístek</h3>
          <div className="leaves__tree-checklist">
            <img
              className="leaves__leaf--inactive"
              src={require('../img/leaf__black.svg')}
              alt="Černý lísteček pro dashboard"
            />
            <p>{leafName}</p>
          </div>
        </div>

        <div className="follow-up__tree">
          <div className="follow-up__tree-branch--left"></div>
          <div className="follow-up__treetop--left"></div>
        </div>
      </div>
    </div>
  );
};

export default FollowUp;
