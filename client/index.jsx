import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import InfoPage from './pages/InfoPage/InfoPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage/DashboardPage.jsx';
import TreePage from './pages/TreePage/TreePage.jsx';
import CoursesPage from './pages/CoursesPage/CoursesPage.jsx';
import Nelca from './pages/InfoPage/Nelca/Nelca.jsx';
import Evca from './pages/InfoPage/Evca/Evca.jsx';
import About from './pages/InfoPage/About/About.jsx';
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
