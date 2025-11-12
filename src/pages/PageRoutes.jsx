import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home/home.jsx";
import AboutPage from "@/pages/about/about.jsx";

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
