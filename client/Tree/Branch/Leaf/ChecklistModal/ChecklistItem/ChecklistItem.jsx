import React, { useState } from 'react';

const ChecklistItem = ({ initialItem, branchId, leafId, onCheck }) => {
  const [itemDone, setItemDone] = useState(initialItem.done);

  return (
    <label className="checklist-item">
      <input
        className="checkbox"
        onChange={(event) => {
          setItemDone(event.target.checked);
          onCheck(initialItem.id, branchId, leafId, itemDone);
        }}
        checked={itemDone}
        type="checkbox"
      />
      {initialItem.name}
    </label>
  );
};

export default ChecklistItem;
