import React, { useState } from 'react';

const ChecklistItem = ({
  itemName,
  apiItemState,
  branchId,
  leafId,
  itemId,
  onCheck,
}) => {
  const [itemDone, setItemDone] = useState(apiItemState);

  return (
    <div>
      <input
        onChange={(event) => {
          setItemDone(event.target.checked);
          onCheck(itemId, branchId, leafId, itemDone);
          // fetch(`/api/tree/branch/${branchId}/leaf/${leafId}/item/${itemId}`, {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify({
          //     done: !itemDone,
          //   }),
          // });
        }}
        checked={itemDone}
        type="checkbox"
      />
      {itemName}
    </div>
  );
};

export default ChecklistItem;
