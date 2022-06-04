import React, { useState, useEffect, useRef } from 'react';
import Leaf from './Leaf/Leaf.jsx';
import { motion } from 'framer-motion';
import './Branch.css';

const Branch = ({ initialBranch, token, activeBranchRef }) => {
  const [branchUpdate, setBranchUpdate] = useState(initialBranch);
  const leaves = branchUpdate.leaves.map((leaf) => leaf.checkboxes);

  const branchStateCheck = () =>
    leaves.every((checkboxes) =>
      checkboxes.every((checkbox) => checkbox.done === true),
    );

  const handleCheck = (itemId, branchId, leafId) => {
    fetch('api/user-tree/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        branchId,
        leafId,
        itemId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setBranchUpdate(data.results);
      });
  };

  return (
    <span
      className={
        branchUpdate.id % 2 === 0
          ? `tree__branch--${branchUpdate.id} tree__branch tree__branch--right`
          : `tree__branch--${branchUpdate.id} tree__branch tree__branch--left`
      }
    >
      {branchStateCheck() ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: [1000], x: [-50] }}
            animate={{
              opacity: 1,
              y: [0, -200],
              x: [-50, 0, -50, 0, -50, 40, 100],
            }}
            transition={{ duration: 7 }}
          >
            <img src={require('./img/sloth.svg')} alt="lenochodik" />
          </motion.div>
          <div className="tree__branch--active" ref={activeBranchRef}></div>
        </>
      ) : null}
      <div
        className={
          branchUpdate.id % 2 === 0
            ? `tree__treetop tree__treetop--right`
            : `tree__treetop tree__treetop--left`
        }
      >
        <p>{branchUpdate.name}</p>
      </div>
      <div
        className={
          branchUpdate.id % 2 === 0 ? 'leaves' : ' leaves leaves--left'
        }
      >
        {branchUpdate.leaves.map((leaf) => (
          <Leaf
            key={leaf.name}
            initialLeaf={leaf}
            branchId={branchUpdate.id}
            onChecked={handleCheck}
          ></Leaf>
        ))}
      </div>
    </span>
  );
};

export default Branch;
