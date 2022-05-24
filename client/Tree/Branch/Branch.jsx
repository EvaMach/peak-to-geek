import React, { useState, useEffect } from 'react';

import Leaf from './Leaf/Leaf.jsx';

const Branch = ({ branchName, branchId, apiBranchState, leaves }) => {
  const [branchDone, setBranchDone] = useState(apiBranchState);

  return (
    <>
      <span
        className={
          branchId % 2 === 0
            ? `tree__branch--${branchId} tree__branch--right`
            : `tree__branch--${branchId} tree__branch--left`
        }
      >
        <div
          onClick={() => {
            setBranchDone(!branchDone);
            fetch(`/api/tree/branch/${branchId}/`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                done: !branchDone,
              }),
            });
            console.log(branchDone);
          }}
          className={
            branchId % 2 === 0
              ? `tree__treetop tree__treetop--right`
              : `tree__treetop tree__treetop--left`
          }
        >
          <p>{branchName}</p>
        </div>
        <div>
          {leaves.map((leaf) => (
            <Leaf
              key={leaf.name}
              leafName={leaf.name}
              leafId={leaf.id}
              apiLeafState={leaf.done}
              branchId={branchId}
            ></Leaf>
          ))}
        </div>
      </span>
    </>
  );
};

export default Branch;
