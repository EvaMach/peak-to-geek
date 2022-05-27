import React, { useEffect, useState } from 'react';
import ChecklistItem from './ChecklistItem/ChecklistItem';

const ChecklistModal = ({
  closeModal,
  modalName,
  leafId,
  branchId,
  onChecked,
}) => {
  const [checklistItems, setChecklistItems] = useState([]);

  useEffect(() => {
    fetch(`/api/tree/branch/${branchId}/leaf/${leafId}`)
      .then((response) => response.json())
      .then((data) => {
        setChecklistItems(data.results.checkboxes);
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
      {checklistItems.map((item) => (
        <ChecklistItem
          key={item.name}
          initialItem={item}
          branchId={branchId}
          leafId={leafId}
          onCheck={onChecked}
        />
      ))}
    </div>
  );
};

export default ChecklistModal;
