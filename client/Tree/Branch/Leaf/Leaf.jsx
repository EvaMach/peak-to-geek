import React, { useEffect, useState } from 'react';
import ChecklistModal from './ChecklistModal/ChecklistModal.jsx';

const Leaf = ({ name, branchId, id, leafState }) => {
  const [state, setState] = useState(leafState);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && (
        <ChecklistModal
          name={name}
          closeModal={setOpenModal}
          leafId={id}
          branchId={branchId}
        />
      )}
      <div onClick={() => setOpenModal(true)}>
        {name}&nbsp;&nbsp;&nbsp;
        <span
          onClick={() => {
            setState(!state);
            fetch(`/api/tree/branch/${branchId}/leaf/${id}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                done: !state,
              }),
            });
          }}
        >
          {state ? 'ano' : 'ne'}
        </span>
      </div>
    </>
  );
};

export default Leaf;
