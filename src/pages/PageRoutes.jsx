import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

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
