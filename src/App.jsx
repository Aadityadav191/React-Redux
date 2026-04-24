import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Academics from "./Pages/Academics";
import Achievements from "./Pages/Achievements";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/achievements" element={<Achievements />} />

        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
