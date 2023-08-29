import React from "react";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <Hero />
      <div className="home-content">
        <div className="intro">
          <h2>Protecting Our Future: GuardianCare</h2>
          <h3>Ending Domestic Violence Against Children</h3>
          <span className="txt">
            <p>
              Welcome to guardianCare, where every child's safety and well-being
              matter most. We are dedicated to eradicating domestic violence
              against children and creating a world where they can thrive, free
              from fear and harm.
            </p>
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;
