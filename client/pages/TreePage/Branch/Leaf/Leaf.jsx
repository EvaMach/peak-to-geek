import React, { useState } from 'react';
import ChecklistModal from './ChecklistModal/ChecklistModal.jsx';
import './Leaf.scss';
import '../../../../components/Modals/Modals.scss';

const Leaf = ({ initialLeaf, branchId, onChecked, token }) => {
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
          token={token}
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
            className="leaves__icon"
            src={
              initialLeaf.checkboxes.every((i) => i.done === true)
                ? require('./img/leaf__done.svg')
                : require('./img/leaf__black.svg')
            }
            alt="Lísteček na stromě"
          />
        </div>
      ) : (
        <div
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <img
            className="leaves__icon"
            src={
              initialLeaf.checkboxes.every((i) => i.done === true)
                ? require('./img/leaf__done--left.svg')
                : require('./img/leaf__black.svg')
            }
            alt="Lísteček na stromě"
          />
          {initialLeaf.name}
        </div>
      )}
    </>
  );
};

export default Leaf;
