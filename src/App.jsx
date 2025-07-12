import React from "react";
import { NavBar } from "./navigation/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { Profile } from "./pages/Profile";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
