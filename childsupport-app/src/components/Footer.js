import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="row2">
        <div className="col2">
          <Link to="/" className="navbar-logo">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="logo"
              className="logo2"
            />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            in velit sint, perspiciatis debitis veritatis vero sequi est tempora
            deserunt aut magni vel dolorum necessitatibus. Corporis voluptatibus
            dolor fugit. Quibusdam.
          </p>
        </div>
        <div className="col2">
          <h3>
            Office
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>address</p>
          <p>address</p>
          <p>address</p>
          <p>address</p>
          <p className="email-id">guardiancare@gmail.com</p>
          <h4>phone number</h4>
          <h4>phone number</h4>
        </div>

        <div className="col2">
          <h3>
            Links
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <Link to="/" className="active nav-links">
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
          </ul>
        </div>

        <div className="col2">
          <h3>
            Newsletter
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form action="#">
            <i className="far fa-envelope"></i>

            <input
              type="email"
              placeholder="Enter your email address"
              required
            />

            <button type="submit">
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-whatsapp"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        GuardianCare &copy; 2023 - All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
