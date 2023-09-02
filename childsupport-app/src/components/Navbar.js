import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home"); // Initialize with the default active link (e.g., "home")

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const [click, setClick] = useState(true);


  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
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
          <ul className="navbar-container">
            <li>
              <Link
                to="/"
                className={
                  activeLink === "home" ? "active1 nav-links" : "nav-links"
                }
                onClick={() => handleLinkClick("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={
                  activeLink === "about" ? "active1 nav-links" : "nav-links"
                }
                onClick={() => handleLinkClick("about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={
                  activeLink === "contact" ? "active1 nav-links" : "nav-links"
                }
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/report-case"
                className={
                  activeLink === "report" ? "active1 nav-links" : "nav-links"
                }
                onClick={() => handleLinkClick("report")}
              >
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
      </nav>
    </>
  );
}

export default Navbar;
