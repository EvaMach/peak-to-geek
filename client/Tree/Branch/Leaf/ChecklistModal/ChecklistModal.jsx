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
    <div id="tree__modal" className="modal">
      <div className="modal__header">
        <h3>{modalName}</h3>
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          <img
            className="modal__simple-icon--close"
            src={require('./img/modal__simple-icon--close.svg')}
            alt="Křížek pro zavírání modálu"
          />
        </button>
      </div>
      <div className="checklist">
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
    </div>
  );
};

export default ChecklistModal;
