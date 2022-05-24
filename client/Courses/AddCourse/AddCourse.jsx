import React, { useState } from 'react';
import ModalForm from '../FormModal/ModalForm.jsx';

const AddCourse = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenModal(true)}
        className="course-bar actual-courses--course1"
      >
        <p>Přidat kurz</p>
      </div>
      {openModal && <ModalForm closeModal={setOpenModal} />}
    </>
  );
};
export default AddCourse;
