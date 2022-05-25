import React, { useState, useEffect } from 'react';
import Leaf from './Leaf/Leaf.jsx';

const Branch = ({ initialBranch }) => {
  const [branchUpdate, setBranchUpdate] = useState(initialBranch);
  const leaves = branchUpdate.leaves.map((leaf) => leaf.checkboxes);

  const branchStateCheck = () =>
    leaves.every((checkboxes) =>
      checkboxes.every((checkbox) => checkbox.done === true),
    );

  const handleCheck = (itemId, branchId, leafId, itemDone) => {
    fetch(`/api/tree/branch/${branchId}/leaf/${leafId}/item/${itemId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        done: !itemDone,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setBranchUpdate(data.results);
      });
  };

  return (
    <>
      <span
        className={
          branchUpdate.id % 2 === 0
            ? `tree__branch--${branchUpdate.id} tree__branch--right`
            : `tree__branch--${branchUpdate.id} tree__branch--left`
        }
      >
        <div
          className={
            branchUpdate.id % 2 === 0
              ? `tree__treetop tree__treetop--right`
              : `tree__treetop tree__treetop--left`
          }
        >
          {branchStateCheck() ? (
            <img src={require('./img/sloth.svg')} alt="lenochodik" />
          ) : null}
          <p>{branchUpdate.name}</p>&nbsp;&nbsp;
        </div>
        <div>
          {branchUpdate.leaves.map((leaf) => (
            <Leaf
              key={leaf.name}
              leaf={leaf}
              branchId={branchUpdate.id}
              onCheckedChecked={handleCheck}
            ></Leaf>
          ))}
        </div>
      </span>
    </>
  );
};

export default Branch;
