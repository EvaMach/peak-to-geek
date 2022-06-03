import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Info from './Info/Info.jsx';
import Login from './Login/Login.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Tree from './Tree/Tree.jsx';
import Courses from './Courses/Courses.jsx';
import Nelca from './Info/Nelca/Nelca.jsx';
import Evca from './Info/Evca/Evca.jsx';
import About from './Info/About/About.jsx';

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="info" element={<Info />}>
        <Route path="/info" element={<About />} />
        <Route path="/info/nelca" element={<Nelca />} />
        <Route path="/info/evca" element={<Evca />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="tree" element={<Tree />} />
      <Route path="courses" element={<Courses />} />
    </Routes>
  </BrowserRouter>,
);
