import React, { useState, useEffect } from 'react';

import Leaf from './Leaf/Leaf.jsx';

const Branch = ({ branchName, branchId, apiBranchState, leaves }) => {
  const [branchDone, setBranchDone] = useState(apiBranchState);

  useEffect(() => {
    setBranchDone(leaves.every((i) => i.done === true));
  }, leaves);

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
          className={
            branchId % 2 === 0
              ? `tree__treetop tree__treetop--right`
              : `tree__treetop tree__treetop--left`
          }
        >
          {branchDone ? (
            <img src={require('./img/sloth.svg')} alt="lenochodik" />
          ) : null}
          <p>{branchName}</p>&nbsp;&nbsp;
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
