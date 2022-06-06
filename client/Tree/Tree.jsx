import React, { useState, useEffect, useRef } from 'react';
import './Tree.css';
import Branch from './Branch/Branch.jsx';
import NavigationHeader from '../NavigationHeader/NavigationHeader.jsx';
import Footer from '../Footer/Footer.jsx';

const Tree = () => {
  const activeBranch = useRef(null);
  const token = window.localStorage.getItem('token');
  if (token === null) {
    window.location = '/login';
  }

  const [branches, setBranches] = useState([]);

  useEffect(() => {
    fetch('./api/tree', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBranches(data.results.map((branch) => branch));
      });
  }, []);

  const scrollToBranch = () => {
    activeBranch.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (branches.length > 0) {
      scrollToBranch();
    }
  }, [branches]);

  return (
    <>
      <div className="container__topbar">
        <NavigationHeader />
      </div>
      <div className="container">
        <main>
          <h1 id="tree__title">Tvůj Geek strom</h1>
          <div className="tree" id="tree">
            <div className="tree__treetop" id="tree__treetop">
              Portfolio
            </div>
            <div className="tree__core">
              <div className="tree__trunk">
                <div className="tree__branches">
                  {branches.map((branch) => (
                    <Branch
                      key={branch.id}
                      initialBranch={branch}
                      token={token}
                      activeBranchRef={activeBranch}
                    ></Branch>
                  ))}
                </div>
              </div>
            </div>
            <div className="bushes">
              <img src={require('./img/bushes.svg')} alt="Křoví" />
            </div>
          </div>
          <div ref={activeBranch}></div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Tree;
