import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <Hero />
      <div className="home-content">
        <div className="intro2">
          <h2>Breaking the Silence</h2>
          <h3>Shaping a Safe Tomorrow</h3>
          <span className="txt">
            <p>
              In a world where silence can be deafening, guardianCare stands as
              a beacon of hope. We are dedicated to shaping a safer tomorrow for
              the silent victims of domestic violence – our children.
            </p>
          </span>
        </div>
        <div className="features">
          <div className="feature">
            <img
              src={process.env.PUBLIC_URL + "/free-icon.svg"}
              alt="free icon"
            />
            <h1>Completely Free</h1>
            <p>Access all our services without any cost.</p>
          </div>
          <div className="feature">
            <img
              src={process.env.PUBLIC_URL + "/live.svg"}
              alt="Live therapy icon"
            />
            <h1>Live therapy session</h1>
            <p>Connect with certified therapists for real-time support.</p>
          </div>
          <div className="feature">
            <img
              src={process.env.PUBLIC_URL + "/newspaper-icon.svg"}
              alt="newspaper icons"
            />
            <h1>Daily and Monthly Reports</h1>
            <p>Receive detailed insights into your child's progress.</p>
          </div>
        </div>
        <div className="why-us">
          <h2>Why guardianCare?</h2>
          <p>
            We understand the importance of creating a safe and nurturing
            environment for children. With guardianCare, you get all the support
            you need in one place. Learn more about us and our mission to
            protect and empower children.
          </p>
          <button className="learn-more">
            <Link to="/about" className="more-link">
              Learn more <i className="fas fa-arrow-right"></i>
            </Link>
          </button>
        </div>
        {"hh"}
      </div>
    </>
  );
}

export default Home;
