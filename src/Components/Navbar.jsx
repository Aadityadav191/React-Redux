import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top shadow-sm py-3">
      <div className="container">
        
        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          🌿 AKSHARAA 
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-lg-3 text-center">
            
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-semibold" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-semibold" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-semibold" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-semibold" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/academics"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-semibold" : "nav-link"
                }
              >
                Academics
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/achievements"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-semibold" : "nav-link"
                }
              >
                Our Achievements
              </NavLink>
            </li>
  
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex gap-2">
            <button className="btn btn-outline-light px-3">
              Login
            </button>
            <button className="btn btn-light text-success fw-semibold px-3">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;