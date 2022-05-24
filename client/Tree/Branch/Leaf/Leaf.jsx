import React, { useEffect, useState } from 'react';
import ChecklistModal from './ChecklistModal/ChecklistModal.jsx';

const Leaf = ({ leafName, branchId, leafId, apiLeafState }) => {
  const [leafDone, setLeafDone] = useState(apiLeafState);
  const [openModal, setOpenModal] = useState(false);

  const handleFinishList = (value) => {
    setLeafDone(value);
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
        {/* <span>{leafDone ? 'ano' : 'ne'}</span> */}
        {leafDone ? (
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
