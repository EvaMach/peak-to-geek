import React, { useState } from 'react';
import ChecklistModal from './ChecklistModal/ChecklistModal.jsx';

const Leaf = ({ initialLeaf, branchId, onChecked }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && (
        <ChecklistModal
          modalName={initialLeaf.name}
          closeModal={setOpenModal}
          leafId={initialLeaf.id}
          branchId={branchId}
          onChecked={onChecked}
        />
      )}
      <div onClick={() => setOpenModal(true)}>
        {initialLeaf.name}&nbsp;&nbsp;&nbsp;
        {initialLeaf.checkboxes.every((i) => i.done === true) ? (
          <img
            className="tree__leaf-icon"
            src={require('./img/leaf__done.svg')}
            alt="lísteček"
          />
        ) : (
          <img
            className="tree__leaf-icon"
            src={require('./img/leaf__black.svg')}
            alt="lísteček"
          />
        )}
      </div>
    </>
  );
};

export default Leaf;
