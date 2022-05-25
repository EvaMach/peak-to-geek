import React, { useEffect, useState } from 'react';
import ChecklistModal from './ChecklistModal/ChecklistModal.jsx';

const Leaf = ({ leaf, branchId, onCheckedChecked }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && (
        <ChecklistModal
          modalName={leaf.name}
          closeModal={setOpenModal}
          leafId={leaf.id}
          branchId={branchId}
          onChecked={onCheckedChecked}
        />
      )}
      <div onClick={() => setOpenModal(true)}>
        {leaf.name}&nbsp;&nbsp;&nbsp;
        {leaf.checkboxes.every((i) => i.done === true) ? (
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
