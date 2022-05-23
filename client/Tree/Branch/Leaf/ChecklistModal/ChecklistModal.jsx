import React, { useEffect, useState } from 'react';
import ChecklistItem from './ChecklistItem/ChecklistItem';

const ChecklistModal = ({ closeModal, name, leafId, branchId }) => {
  const [checkboxes, setCheckboxes] = useState([]);

  console.log(leafId);
  console.log(branchId);

  useEffect(() => {
    fetch(`/api/tree/branch/${branchId}/leaf/${leafId}`)
      .then((response) => response.json())
      .then((data) => {
        setCheckboxes(data.results.checkboxes);
      });
  }, [ChecklistItem]);

  return (
    <div className="modal">
      <div className="modal__header">
        <h3>{name}</h3> <button onClick={() => closeModal(false)}>X</button>
      </div>
      {checkboxes.map((checkbox) => (
        <ChecklistItem
          key={checkbox.name}
          itemName={checkbox.name}
          done={checkbox.done}
          branchId={branchId}
          leafId={leafId}
          id={checkbox.id}
        />
      ))}
    </div>
  );
};

export default ChecklistModal;
