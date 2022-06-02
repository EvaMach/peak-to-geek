import React, { useState, useEffect, useRef } from 'react';
import './Tree.css';
import '../style.css';
import Branch from './Branch/Branch.jsx';
import NavigationHeader from '../NavigationHeader/NavigationHeader.jsx';
import Footer from '../Footer/Footer.jsx';

const Tree = () => {
  const token = window.localStorage.getItem('token');
  if (token === null) {
    window.location = '/login';
  }

  const [branches, setBranches] = useState([]);
  const activeBranch = useRef(null);

  // const scrollToBottom = () => {
  //   activeBranch.current.scrollIntoView({ behavior: 'smooth' });
  // };

  // useEffect(() => {
  //   scrollToBottom();
  // }, []);

  useEffect(() => {
    fetch('./api/tree')
      .then((response) => response.json())
      .then((data) => {
        setBranches(data.results.branches.map((branch) => branch));
      });
  }, []);

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
                    ></Branch>
                  ))}
                </div>
              </div>
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
