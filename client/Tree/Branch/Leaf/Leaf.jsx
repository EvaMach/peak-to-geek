import React, { useEffect, useState } from 'react';
import ChecklistModal from './ChecklistModal/ChecklistModal.jsx';

const Leaf = ({ leafName, branchId, leafId, apiLeafState }) => {
  const [leafDone, setLeafDone] = useState(apiLeafState);
  const [openModal, setOpenModal] = useState(false);

  const handleFinishList = (value) => {
    fetch(`/api/tree/branch/${branchId}/leaf/${leafId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        done: value,
      }),
    });
  };

  return (
    <>
      {openModal && (
        <ChecklistModal
          modalName={leafName}
          closeModal={setOpenModal}
          leafId={leafId}
          branchId={branchId}
          onFinishList={handleFinishList}
        />
      )}
      <div onClick={() => setOpenModal(true)}>
        {leafName}&nbsp;&nbsp;&nbsp;
        <span
          onClick={() => {
            // setState(!state);
            // fetch(`/api/tree/branch/${branchId}/leaf/${id}`, {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({
            //     done: !state,
            //   }),
            // });
          }}
        >
          {leafDone ? 'ano' : 'ne'}
        </span>
      </div>
    </>
  );
};

export default Leaf;
