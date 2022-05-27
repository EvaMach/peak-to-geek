import React, { useState } from 'react';

const ChecklistItem = ({ initialItem, branchId, leafId, onCheck }) => {
  const [itemDone, setItemDone] = useState(initialItem.done);

  return (
    <div>
      <input
        onChange={(event) => {
          setItemDone(event.target.checked);
          onCheck(initialItem.id, branchId, leafId, itemDone);
        }}
        checked={itemDone}
        type="checkbox"
      />
      {initialItem.name}
    </div>
  );
};

export default ChecklistItem;
