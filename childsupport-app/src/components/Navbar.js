import "./Navbar.css";
import React, { useState } from "react";

function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav>
        <a href="index.html" className="navbar-logo">
          {" "}
          Logo.
        </a>
        <div className="nav-items-container">
          <ul
            className={click ? "navbar-container active" : "navbar-container"}
            onClick={handleClick}
          >
            <li>
              <a href="index.html" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
            <li>
              <a href="index.html">Contact us</a>
            </li>
            <li>
              <a href="index.html">Report case</a>
            </li>
            <li>
              <button className="sign-in">Sign up</button>
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
