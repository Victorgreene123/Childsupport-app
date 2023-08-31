import "./Navbar.css";
import React, { useState } from "react";

import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav>
        <Link to="/" className="navbar-logo">
          {" "}
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="logo"
            className="logo"
          />
        </Link>

        <div className="nav-items-container">
          <ul
            className={click ? "navbar-container active" : "navbar-container"}
            onClick={handleClick}
          >
            <li>
              <Link to="/" className="active1 nav-links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-links">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/report-case" className="nav-links">
                Report case
              </Link>
            </li>
            <li>
              <button className="sign-in">
                <Link to="/signup" className="nav-link-btn">
                  Sign up
                </Link>
              </button>
            </li>
          </ul>
        </div>
        <div className="mobile">
          <i
            className={click ? "fas fa-bars" : "fas fa-times"}
            onClick={handleClick}
          ></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
