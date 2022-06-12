import React, { useEffect, useState } from 'react';
import './DarkMode.css';

const DarkMode = () => {
  const [darkmodeChecked, setDarkmodeChecked] = useState(
    localStorage.getItem('theme') === 'dark',
  );

  useEffect(() => {
    localStorage.setItem('theme', darkmodeChecked ? 'dark' : null);
    document.documentElement.setAttribute(
      'data-theme',
      darkmodeChecked ? 'dark' : 'light',
    );
  }, [darkmodeChecked]);

  const toggleTheme = () => setDarkmodeChecked(!darkmodeChecked);

  return (
    <div className="toggle-theme--wrapper">
      <span className="dark-mode__icon">☼</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={darkmodeChecked}
          onChange={toggleTheme}
        />
        <div className="slider round"></div>
      </label>
      <span id="moon" className="dark-mode__icon">
        ☽
      </span>
    </div>
  );
};

export default DarkMode;
