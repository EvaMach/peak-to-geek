import React from 'react';
import './Home.scss';
import '../style.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainHeader from '../MainHeader/MainHeader.jsx';

const Home = () => {
  return (
    <>
      <div className="main-page">
        <MainHeader />
        <div className="main-page__container">
          <main className="main-page__main">
            <div className="left-side main-page__left-side">
              <h1 id="main-page__title">Peak to Geek</h1>
              <div className="main-page__info">
                <p className="main-page__text">
                  Sleduj svůj progress napříč IT společně s komunitou stejně
                  motivovaných nadšenců
                </p>
                <Link to="/login" id="main-page__signup-link">
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    id="main-page__signup-button"
                  >
                    Přidej se!
                  </motion.button>
                </Link>
              </div>
            </div>
            <div className="main-page__tree">
              <img
                className="tree__image"
                src={require('./img/tree.svg')}
                alt="Stromeček na hlavní stránce"
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
