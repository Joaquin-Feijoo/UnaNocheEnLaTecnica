import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import OriginPage from "../pages/OriginPage";
import VideogamePage from "../pages/VideogamePage";
import ImagesPage from "../pages/ImagesPage";
import "../styles/PageTransitions.css";

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    document.querySelector(".fade-container").classList.add("fade");
    setTimeout(
      () => document.querySelector(".fade-container").classList.remove("fade"),
      500
    );
  }, [location]);

  return (
    <div className="fade-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Origin" element={<OriginPage />} />
        <Route path="/Images" element={<ImagesPage />} />
        <Route path="/Videogame" element={<VideogamePage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
