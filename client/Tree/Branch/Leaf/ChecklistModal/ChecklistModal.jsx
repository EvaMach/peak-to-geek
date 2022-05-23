import React, { useEffect, useState } from 'react';
import ChecklistItem from './ChecklistItem/ChecklistItem';

const ChecklistModal = ({
  closeModal,
  modalName,
  leafId,
  branchId,
  onFinishList,
}) => {
  const [checkboxes, setCheckboxes] = useState([]);
  const [leafDone, setLeafDone] = useState(false);

  useEffect(() => {
    fetch(`/api/tree/branch/${branchId}/leaf/${leafId}`)
      .then((response) => response.json())
      .then((data) => {
        setCheckboxes(data.results.checkboxes);
      });
  }, [checkboxes]);

  const value = checkboxes.every((i) => i.done === true);

  return (
    <div className="modal">
      <div className="modal__header">
        <h3>{modalName}</h3>{' '}
        <button
          onClick={() => {
            onFinishList(value);
            closeModal(false);
          }}
        >
          X
        </button>
      </div>
      {checkboxes.map((checkbox) => (
        <ChecklistItem
          key={checkbox.name}
          itemName={checkbox.name}
          itemId={checkbox.id}
          apiItemState={checkbox.done}
          branchId={branchId}
          leafId={leafId}
        />
      ))}
    </div>
  );
};

export default ChecklistModal;
