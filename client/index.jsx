import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Info from './Info/Info.jsx';
import Navigation from './Navigation/Navigation.jsx';
import Login from './Login/Login.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Tree from './Tree/Tree.jsx';
import Courses from './Courses/Courses.jsx';

const App = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <Home />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="info" element={<Info />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="tree" element={<Tree />} />
      <Route path="courses" element={<Courses />} />
    </Routes>
  </BrowserRouter>,
);
