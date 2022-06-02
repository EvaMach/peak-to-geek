import React, { useState } from 'react';
import ModalForm from '../FormModal/ModalForm.jsx';
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
        // className="course-bar actual-courses--course1"
        className="actual-courses__button"
      >
        <p>Přidat kurz</p>
      </motion.button>
      {openModal && (
        <ModalForm onAddCourse={onNewCourse} closeModal={setOpenModal} />
      )}
    </>
  );
};
export default AddCourse;
