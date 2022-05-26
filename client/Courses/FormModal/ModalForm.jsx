import React, { useState } from 'react';

const FormModal = ({ closeModal, onAddCourse }) => {
  const [courseName, setCourseName] = useState('');
  const [courseUrl, setCourseUrl] = useState('');

  return (
    <div className="modal">
      <div className="modal__header">
        <h3>Přidat nový kurz</h3>{' '}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onAddCourse()
            closeModal(false);
          }}
        >
          <label>
            Název kurzu:{' '}
            <input
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              type="text"
            />
          </label>
          <label>
            Url kurzu:{' '}
            <input
              value={courseUrl}
              onChange={(e) => setCourseUrl(e.target.value)}
              type="text"
            />
          </label>
          <button type="submit">Uložit kurz</button>
        </form>
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default FormModal;
