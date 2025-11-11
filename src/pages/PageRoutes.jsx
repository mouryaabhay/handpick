import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home/home";
import AboutPage from "./about/about";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
