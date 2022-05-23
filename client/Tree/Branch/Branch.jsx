import React, { useState, useEffect } from 'react';

import Leaf from './Leaf/Leaf.jsx';

const Branch = ({ name, id, branchDone, leaves }) => {
  const [state, setState] = useState(branchDone);

  return (
    <>
      <span
        className={
          id % 2 === 0
            ? `tree__branch--${id} tree__branch--right`
            : `tree__branch--${id} tree__branch--left`
        }
      >
        <div
          onClick={() => {
            setState(!state);
            fetch(`/api/tree/branch/${id}/`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                done: !state,
              }),
            });
            console.log(state);
          }}
          className={
            id % 2 === 0
              ? `tree__treetop tree__treetop--right`
              : `tree__treetop tree__treetop--left`
          }
        >
          <p>{name}</p>
        </div>
        <div>
          {leaves.map((leaf) => (
            <Leaf
              key={leaf.name}
              name={leaf.name}
              branchId={id}
              id={leaf.id}
              leafState={leaf.done}
            ></Leaf>
          ))}
        </div>
      </span>
    </>
  );
};

export default Branch;
