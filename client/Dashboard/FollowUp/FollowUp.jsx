import React from 'react';

const FollowUp = () => {
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
          <h3>Jaký lístek tě čeká?</h3>
          <div className="leaves__tree-checklist">
            <img
              className="leaves__leaf--inactive"
              src={require('../img/leaf__black.svg')}
              alt="Černý lísteček pro strom na dashboardu"
            />
            <p>Návody a best practices</p>
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
