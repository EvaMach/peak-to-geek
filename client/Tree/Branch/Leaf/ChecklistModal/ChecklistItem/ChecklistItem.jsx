import React, { useState } from 'react';

const ChecklistItem = ({
  itemName,
  apiItemState,
  branchId,
  leafId,
  itemId,
}) => {
  const [itemDone, setItemDone] = useState(apiItemState);

  return (
    <div>
      <input
        onChange={(e) => {
          fetch(`/api/tree/branch/${branchId}/leaf/${leafId}/item/${itemId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              done: !itemDone,
            }),
          });
        }}
        checked={apiItemState}
        type="checkbox"
      />
      {itemName}
    </div>
  );
};

export default ChecklistItem;
