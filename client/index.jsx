import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Navigation from './Navigation/Navigation.jsx';
import Login from './Login/Login.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Tree from './Tree/Tree.jsx';
import Courses from './Courses/Courses.jsx';

const App = () => {
  return (
    <div id="app">
      <Home />
      <Login />
      <Navigation />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/tree" element={<Tree />}></Route>
      <Route path="/courses" element={<Courses />}></Route>
    </Routes>
  </BrowserRouter>,
);
