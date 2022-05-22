import React, { useState, useEffect } from 'react';
import Leaf from './Leaf/Leaf.jsx';

const Branch = ({ name, id, branchDone, leaves }) => {
  const [done, setDone] = useState(branchDone);

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
            setDone(!done);
            fetch(`/api/tree/branch/${id}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                done: !done,
              }),
            });
          }}
          className={
            id % 2 === 0
              ? `tree__treetop tree__treetop--right`
              : `tree__treetop tree__treetop--left`
          }
        >
          <p>{name}</p>
        </div>
      </span>
      {/* <div className="leaf">
        {leaves.map((leaf) => (
          <Leaf key={leaf.name} name={leaf.name} id={leaf.id}></Leaf>
        ))}
      </div> */}
    </>
  );
};

export default Branch;
