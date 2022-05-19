import React, { useState, useEffect } from 'react';
import Leaf from './Leaf/Leaf.jsx';

const Branch = ({ name, id }) => {
  const [state, setState] = useState(true);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetch(`/api/tree/branch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setState(data.results.done);
        setLeaves(data.results.leaves.map((leaf) => leaf));
      });
  }, [state]);

  return (
    <>
      <div>
        {name}&nbsp;&nbsp;&nbsp;
        <span
          onClick={() => {
            setState(!state);
            fetch(`/api/tree/branch/${id}/leaf/${id}`, {
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
        <div className="leaf">
          {leaves.map((leaf) => (
            <Leaf key={leaf.name} name={leaf.name} id={leaf.id}></Leaf>
          ))}
        </div>
      </div>
    </>
  );
};

export default Branch;
