import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <>
      <div className="hero-container">
        <video
          src={process.env.PUBLIC_URL + "/videos/family.mp4"}
          autoPlay
          loop
          muted
        />
        <div className="business-name">
          <h1>GuardianCare</h1>
          <p>Empowering Futures, Erasing Fear...</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
