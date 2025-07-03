import React from "react";
import { NavBar } from "./Navigation/NavBar";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
