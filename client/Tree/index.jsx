import React, { useState, useEffect } from 'react';
import Branch from './Branch';

const Tree = () => {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    fetch('./api/tree')
      .then((response) => response.json())
      .then((data) => {
        setBranches(data.results.branches.map((branch) => branch));
      });
  }, []);

  return (
    <>
      <div>Tvůj Geek strom</div>
      <div>
        {branches.map((branch) => (
          <Branch key={branch.id} name={branch.name} id={branch.id}></Branch>
        ))}
      </div>
    </>
  );
};

export default Tree;
