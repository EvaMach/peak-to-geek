import React from 'react';
import './DarkMode.css';

const DarkMode = () => {
  const setDark = () => {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  };
  const setLight = () => {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  };

  const toggleTheme = (e) => (e.target.checked ? setDark() : setLight());

  return (
    <div className="toggle-theme-wrapper">
      {/* <span>☀️</span> */}
      <label className="toggle-theme" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={toggleTheme} />
        <div className="slider round"></div>
      </label>
      {/* <span>🌒</span> */}
    </div>
  );
};

export default DarkMode;
