import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ModalForm.css';

const FormModal = ({ closeModal, onAddCourse }) => {
  const [courseName, setCourseName] = useState('');
  const [courseUrl, setCourseUrl] = useState('');

  return (
    <div id="courses__modal" className="modal">
      <div className="modal__header">
        <h3>Přidat nový kurz</h3>
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          <img
            className="modal__icon--close"
            src={require('./img/modal__icon--close.svg')}
            alt="Křížek pro zavírání modálu"
          />
        </button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddCourse(courseName, courseUrl);
          closeModal(false);
        }}
      >
        <div className="form__row">
          <span>Název kurzu:</span>
          <input
            className="form__input login__field"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            type="text"
          />
        </div>
        <div className="form__row">
          <span>Url kurzu:</span>
          <input
            className="form__input login__field"
            value={courseUrl}
            onChange={(e) => setCourseUrl(e.target.value)}
            type="url"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="actual-courses__button form__button"
          type="submit"
        >
          Uložit kurz
        </motion.button>
      </form>
    </div>
  );
};

export default FormModal;
