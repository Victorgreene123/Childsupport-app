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
        <div className="more-features">
          <h2>More features</h2>
          <p>Read all about it</p>
          <ul>
            <li>
              <strong>certified therapists</strong>: Our team consists of
              experienced and certified therapists who specialize in child
              psychology and trauma. They are dedicated to providing the highest
              quality care and support to your child.
            </li>
            <li>
              <strong>Scholarship Program</strong>: We offer a scholarship
              program to support the educational needs of children affected by
              domestic violence. This program includes financial assistance for
              school-related expenses and educational resources.
            </li>
            <li>
              <strong>Donations</strong>: Your generous donations help us
              continue our mission. Contributions from caring individuals like
              you enable us to expand our services, reach more children, and
              create a safer world for them.
            </li>
            <li>
              <strong>Interaction with Peers and Mentors</strong>: Your child
              can connect with other children who have faced similar challenges
              and experienced healing. Our mentorship program fosters a
              supportive community where children can share, learn, and grow
              together.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
