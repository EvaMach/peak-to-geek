import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import InfoPage from './pages/InfoPage/InfoPage';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import TreePage from './pages/TreePage/TreePage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import Nelca from './pages/InfoPage/Nelca/Nelca';
import Evca from './pages/InfoPage/Evca/Evca';
import About from './pages/InfoPage/About/About';
import './style.scss';
import './DarkMode/DarkMode.scss';

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="info" element={<InfoPage />}>
        <Route path="/info" element={<About />} />
        <Route exact path="/info/about" element={<About />} />
        <Route path="/info/nelca" element={<Nelca />} />
        <Route path="/info/evca" element={<Evca />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="tree" element={<TreePage />} />
      <Route path="courses" element={<CoursesPage />} />
    </Routes>
  </BrowserRouter>,
);
