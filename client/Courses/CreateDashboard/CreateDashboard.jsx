import React from 'react';
import { motion } from 'framer-motion';

const CreateDashboard = ({ userDashboard, onCreateDashboard }) => {
  if (userDashboard == null) {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="create-dashboard-btn"
        className="actual-courses__button"
        onClick={onCreateDashboard}
      >
        Přidat na dashboard
      </motion.button>
    );
  } else {
    return (
      <p>
        Od teď už se bude dashboard aktualizovat automaticky každý týden. Nyní
        zakliknuté kurzy se přidají do následujícího týdne.
      </p>
    );
  }
};

export default CreateDashboard;
