import React, { useState, useEffect } from 'react';
import Branch from './Branch/Branch.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import '../style-responsivity.css';

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
      <div className="container">
        <header>
          <div id="logo" className="tree__logo">
            <Link to="/">
              <img src="img/logo-nerd-sloth.png" alt="" />
            </Link>
          </div>
          <Navigation />
        </header>
        <main>
          <h1 id="tree__title">Tvůj Geek strom</h1>
          <div className="tree" id="tree">
            <div className="tree__treetop"></div>
            <div className="tree__core">
              <div className="tree__trunk">
                <div className="tree__branches">
                  <span className="tree__branch--left tree__branch--left1">
                    <div className="tree__treetop--left tree__treetop--left1"></div>
                  </span>
                  <span className="tree__branch--right tree__branch--right1">
                    <div className="tree__treetop--right tree__treetop--right1"></div>
                  </span>
                  <span className="tree__branch--left tree__branch--left2">
                    <div className="tree__treetop--left tree__treetop--left2"></div>
                  </span>
                  <span className="tree__branch--right tree__branch--right2">
                    <div className="tree__treetop--right tree__treetop--right2"></div>
                  </span>
                  <span className="tree__branch--left tree__branch--left3">
                    <div className="tree__treetop--left tree__treetop--left3"></div>
                  </span>
                  <span className="tree__branch--right tree__branch--right3">
                    <div className="tree__treetop--right tree__treetop--right3"></div>
                  </span>
                  <span className="tree__branch--left tree__branch--left4">
                    <div className="tree__treetop--left tree__treetop--left4"></div>
                  </span>
                  <span className="tree__branch--right tree__branch--right4">
                    <div className="tree__treetop--right tree__treetop--right4"></div>
                  </span>
                  <span className="tree__branch--left tree__branch--left5">
                    <div className="tree__treetop--left tree__treetop--left5"></div>
                  </span>
                  <span className="tree__branch--right tree__branch--right5">
                    <div className="tree__treetop--right tree__treetop--right5"></div>
                  </span>
                  <span className="tree__branch--left tree__branch--left6">
                    <div className="tree__treetop--left tree__treetop--left6"></div>
                  </span>
                  <span className="tree__branch--right tree__branch--right6">
                    <div className="tree__treetop--right tree__treetop--right6"></div>
                  </span>
                  <span className="tree__branch--left tree__branch--left7">
                    <div className="tree__treetop--left tree__treetop--left7"></div>
                  </span>
                  <span className="tree__branch--right tree__branch--right7">
                    <div className="tree__treetop--right tree__treetop--right7"></div>
                  </span>
                  <span className="tree__branch--left tree__branch--left8">
                    <div className="tree__treetop--left tree__treetop--left8"></div>
                  </span>
                  <span className="tree__branch--right tree__branch--right8">
                    <div className="tree__treetop--right tree__treetop--right8"></div>
                  </span>
                  <span className="tree__branch--left tree__branch--left9">
                    <div className="tree__treetop--left tree__treetop--left9"></div>
                  </span>
                  <span className="tree__branch--right tree__branch--right9">
                    <div className="tree__treetop--right tree__treetop--right9"></div>
                  </span>
                  <span className="tree__branch--left tree__branch--left10">
                    <div className="tree__treetop--left tree__treetop--left10"></div>
                  </span>
                  <span className="tree__branch--right tree__branch--right10">
                    <div className="tree__treetop--right tree__treetop--right10"></div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
      {/* branches */}
      <div>
        {branches.map((branch) => (
          <Branch key={branch.id} name={branch.name} id={branch.id}></Branch>
        ))}
      </div>
    </>
  );
};

export default Tree;
