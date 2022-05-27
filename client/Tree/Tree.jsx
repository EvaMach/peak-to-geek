import React, { useState, useEffect, useRef } from 'react';
import '../style-responsivity.css';
import Branch from './Branch/Branch.jsx';
import Navigation from '../Navigation/Navigation.jsx';

const Tree = () => {
  const [branches, setBranches] = useState([]);
  const activeBranch = useRef(null);

  const scrollToBottom = () => {
    activeBranch.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    fetch('./api/tree')
      .then((response) => response.json())
      .then((data) => {
        setBranches(data.results.branches.map((branch) => branch));
      });
  }, []);

  return (
    <>
      <div className="container">
        <Navigation />
        <main>
          <h1 id="tree__title">Tvůj Geek strom</h1>
          <div className="tree" id="tree">
            <div className="tree__treetop">Portfolio</div>
            <div className="tree__core">
              <div className="tree__trunk">
                <div className="tree__branches">
                  {branches.map((branch) => (
                    <Branch key={branch.id} initialBranch={branch}></Branch>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div ref={activeBranch}></div>
        </main>
      </div>
    </>
  );
};

export default Tree;
