import React from 'react';
import '../Courses.css';

const CreateDashboard = ({
  userDashboard,
  onCreateDashboard,
  activeCourses,
}) => {
  if (userDashboard == null) {
    return (
      <button
        disabled={!activeCourses}
        id={
          activeCourses
            ? 'create-dashboard__btn'
            : 'create-dashboard__btn--disabled'
        }
        className="actual-courses__button"
        onClick={onCreateDashboard}
      >
        Vytvořit rozvrh
      </button>
    );
  } else {
    return (
      <div className=".create-dashboard__info">
        <p className="your-courses__dashboard-update">
          Po vytvoření se bude rozvrh sám automaticky aktualizovat každý týden.
        </p>
        <p className="your-courses__dashboard-update">
          Nyní zakliknuté kurzy se přidají nebo odeberou do následujícího týdne.
        </p>
      </div>
    );
  }
};

export default CreateDashboard;
