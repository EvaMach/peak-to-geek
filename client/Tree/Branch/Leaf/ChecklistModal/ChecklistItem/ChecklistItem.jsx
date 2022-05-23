import React, { useState } from 'react';

const ChecklistItem = ({ itemName, done, branchId, leafId, id }) => {
  const [state, setState] = useState(done);

  return (
    <div>
      <input
        onChange={(e) => {
          setState(e.target.checked);
          fetch(`/api/tree/branch/${branchId}/leaf/${leafId}/item/${id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              done: !state,
            }),
          });
        }}
        checked={done}
        type="checkbox"
      />
      {itemName}
    </div>
  );
};

export default ChecklistItem;
