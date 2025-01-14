import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'
function Navbar(){
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Wash clean
        </NavLink>
        

        <div className="navbar-links">
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className="nav-link">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
            <NavLink to="/register" className="btn">
              Register
            </NavLink>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
