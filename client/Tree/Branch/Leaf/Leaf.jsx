import React, { useEffect, useState } from 'react';

const Leaf = ({ name, branchId, leafId }) => {
  const [state, setState] = useState(true);

  useEffect(() => {
    fetch(`/api/tree/branch/${branchId}/leaf/${leafId}`)
      .then((response) => response.json())
      .then((data) => {
        setState(data.results.done);
      });
  }, [state]);

  return (
    <div>
      {name}&nbsp;&nbsp;&nbsp;
      <span
        onClick={() => {
          setState(!state);
          fetch(`/api/tree/branch/${branchId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              done: !state,
            }),
          });
        }}
      >
        {state ? 'ano' : 'ne'}
      </span>
    </div>
  );
};

export default Leaf;
