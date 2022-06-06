import React from 'react';
import { motion } from 'framer-motion';

const CreateDashboard = ({ userDashboard, onCreateDashboard }) => {
  if (userDashboard == null) {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="create-dashboard__btn"
        className="actual-courses__button"
        onClick={onCreateDashboard}
      >
        Přidat na dashboard
      </motion.button>
    );
  } else {
    return (
      <div className=".create-dashboard__info">
        <p>
          Po vytvoření se bude dashboard automaticky aktualizovat každý týden.
        </p>
        <p>Nyní zakliknuté kurzy se přidají do následujícího týdne.</p>
      </div>
    );
  }
};

export default CreateDashboard;
