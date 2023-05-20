import React, { useState } from 'react';
import FormModal from '../FormModal/FormModal.jsx';
import '../../../components/Modals/Modals.scss';
import { motion } from 'framer-motion';

const AddCourse = ({ onNewCourse }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpenModal(true)}
        id="your-courses__button"
        className="actual-courses__button"
      >
        Přidat nový kurz
      </motion.button>
      {openModal && (
        <FormModal onAddCourse={onNewCourse} closeModal={setOpenModal} />
      )}
    </>
  );
};
export default AddCourse;
