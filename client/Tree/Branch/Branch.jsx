import React, { useState } from 'react';
import Leaf from './Leaf/Leaf.jsx';
import { motion } from 'framer-motion';
import './Branch.scss';

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
      <div
        className={
          branchUpdate.id % 2 === 0
            ? `tree__treetop tree__treetop--right`
            : `tree__treetop tree__treetop--left`
        }
      >
        {branchStateCheck() ? (
          <>
            <motion.div
              initial={{ opacit: 0, y: [-1000] }}
              animate={{
                opacity: 1,
                y: [-1000, -40],
              }}
              transition={{ duration: 1 }}
            >
              <img
                className="tree__branch--sloth"
                src={require('./img/tree-sloth.svg')}
                alt="Lenochodík na větvičce pro splněné kurzy"
              />
            </motion.div>
            <div className="tree__branch--active" ref={activeBranchRef}></div>
          </>
        ) : null}
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
            token={token}
          ></Leaf>
        ))}
      </div>
    </span>
  );
};

export default Branch;
