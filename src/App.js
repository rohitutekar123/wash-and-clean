import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import HomePage from "./components/Home.js";
import Services from "./components/Service.js";
import Login from "./components/login.js";
import Register from "./components/register.js";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
