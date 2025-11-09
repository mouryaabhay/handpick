import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Home";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
