import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
// import SignupPage from '../pages/SignupPage';
import AdminHomePage from '../pages/admin/AdminHomePage';
import CategoryPage from '../pages/CategoryPage';
import HotelPage from '../pages/HotelPage';

const RouteMap = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminHomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/signup" element={<SignupPage />} /> */}
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/hotels/:id" element={<HotelPage />} />
    </Routes>
  );
}

export default RouteMap