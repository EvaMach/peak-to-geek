import React, { useState } from 'react';
import ChecklistModal from './ChecklistModal/ChecklistModal.jsx';

const Leaf = ({ initialLeaf, branchId, onChecked, onOpenModal }) => {
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
      {branchId % 2 === 0 ? (
        <div
          onClick={() => {
            setOpenModal(true);
          }}
        >
          {initialLeaf.name}
          <img
            className="tree__leaf-icon"
            src={
              initialLeaf.checkboxes.every((i) => i.done === true)
                ? require('./img/leaf__done.svg')
                : require('./img/leaf__black.svg')
            }
            alt="lísteček"
          />
        </div>
      ) : (
        <div onClick={() => setOpenModal(true)}>
          <img
            className="tree__leaf-icon"
            src={
              initialLeaf.checkboxes.every((i) => i.done === true)
                ? require('./img/leaf__done--left.svg')
                : require('./img/leaf__black.svg')
            }
            alt="lísteček"
          />
          {initialLeaf.name}
        </div>
      )}
    </>
  );
};

export default Leaf;
