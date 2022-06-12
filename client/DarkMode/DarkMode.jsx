import React, { useEffect, useState } from 'react';
import './DarkMode.scss';

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
      <img
        className="dark-mode__icon"
        src={require('./img/icon--sun.svg')}
        alt="Ikonka sluníčka u dark-modu"
      />
      {/* <span id="sun" className="dark-mode__icon">
         ☼ 
      </span> */}
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={darkmodeChecked}
          onChange={toggleTheme}
        />
        <div className="slider round"></div>
      </label>
      {/* <span id="moon" className="dark-mode__icon">
         ☽ 
         </span> */}
      <img
        className="dark-mode__icon"
        src={require('./img/icon--moon.svg')}
        alt="Ikonka měsíčku u dark-modu"
      />
    </div>
  );
};

export default DarkMode;
