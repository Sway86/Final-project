import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              TOP
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/trello"
              className={window.location.pathname === "/trello" ? "nav-link active" : "nav-link"}
            >
              Main Page
            </Link>

            {/* <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link> }
            </li>  */}

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
