import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Tree from './Tree';

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <>
      <Tree></Tree>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
