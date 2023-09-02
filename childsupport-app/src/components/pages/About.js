import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about__container">
        <div className="intro">
          <h1>Who we are.</h1>
          <div className="image__contanier">
            <img
              src={process.env.PUBLIC_URL + "/about.png"}
              alt="people"
              className="about-img"
            />
          </div>
        </div>
        <div className="text-content">
          <span className="text">
            <p className="bold">
              Welcome to our app, a compassionate and empowering platform
              dedicated to child care support, facilitating child donations,
              addressing domestic abuse, offering therapeutic services, and
              enabling donations to orphanages.
            </p>
          </span>
        </div>
        <div className="text-content">
          <span className="text">
            <h2>Our Mission</h2>
            <p>
              {" "}
              Our mission is to create a nuturing and sfe enviroment for
              children and families in need. with the aid of our app, we aim to
              make a positive imapact on the lives of those facing challenging
              circumastances, promoting healing growth and support.
            </p>
          </span>
          <img
            src={process.env.PUBLIC_URL + "/mission.png"}
            className="description-img"
            alt="misson"
          />
        </div>
        <div className="text-content">
          <span className="text">
            <h2>Child Care Support</h2>
            <p>
              {" "}
              We understand the importance of comprehensive child care, and our
              app is designed to offer a wealth of resourses, advice, and
              guidance to parents and caretakers. From expert tips on child
              developement to age-appropriate activites. we're here to help you
              navigate the wonderful journey of parenthood.
            </p>
          </span>
          <img
            src={process.env.PUBLIC_URL + "/childcare.png"}
            className="description-img"
            alt="childcare"
          />
        </div>
        <div className="text-content">
          <span className="text">
            <h2>Domestic Abuse</h2>
            <p>
              {" "}
              We are commited to breaking the cycle of domestic abuse. Our app
              provides a confidential and supportive space for users to access
              information, resourses, and connect with professionals who can
              offer guidance and assistance. Everyone deserves to live a life
              free from fear and violence.
            </p>
          </span>
          <img
            src={process.env.PUBLIC_URL + "/abuse.png"}
            className="description-img"
            alt="Domestic Abuse"
          />
        </div>
        <div className="text-content">
          <span className="text">
            <h2>Therapeutic Services</h2>
            <p>
              {" "}
              Mental and emotional well-being are crucial for both childern and
              adults. Our app connects users with licensed therapists who
              specialize i supporting individuals, couples and families. Whether
              you're seeking help for yourself or a loved one, our therapy
              services are here to provide guidance and healing.
            </p>
          </span>
          <img
            src={process.env.PUBLIC_URL + "/therapy.png"}
            className="description-img therapy"
            alt="therapy"
          />
        </div>
        <div className="text-content">
          <span className="text">
            <p className="bold">
              {" "}
              Join us in creating a world where every child is cherished,
              supported, and given the opportunity to thrive. Together, we can
              make a lasting impact on the lives of those who need it most.
              Thank you for being a part of our caring community.
            </p>
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
