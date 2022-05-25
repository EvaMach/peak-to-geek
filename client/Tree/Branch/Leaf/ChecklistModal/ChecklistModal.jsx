import React, { useEffect, useState } from 'react';
import ChecklistItem from './ChecklistItem/ChecklistItem';

const ChecklistModal = ({
  closeModal,
  modalName,
  leafId,
  branchId,
  onChecked,
}) => {
  const [checkboxes, setCheckboxes] = useState([]);

  useEffect(() => {
    fetch(`/api/tree/branch/${branchId}/leaf/${leafId}`)
      .then((response) => response.json())
      .then((data) => {
        setCheckboxes(data.results.checkboxes);
      });
  }, []);

  return (
    <div className="modal">
      <div className="modal__header">
        <h3>{modalName}</h3>{' '}
        <button
          onClick={() => {
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
          onCheck={onChecked}
        />
      ))}
    </div>
  );
};

export default ChecklistModal;
