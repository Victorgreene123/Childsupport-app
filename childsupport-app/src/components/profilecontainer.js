// import { Link } from "react-router-dom";
import "../App";
import "../index.css";
import React from "react";

export default function Profile() {
  return (
    <>
      <div className="profile-container">
        <div className="profilehead">
          <div className="img-name">
            <img
              className="profilepic profilepic-big"
              src={process.env.PUBLIC_URL + "/profile.png"}
              alt="profile"
            />
            <h2 className="name">John Doe</h2>
          </div>

          <div className="peersandmentors">
            <p className="followers">
              7 <br></br>
              <span className="profdetails">Peers</span>
            </p>
            <p className="followers">
              78 <br></br> <span className="profdetails">Peers</span>
            </p>
            <p className="following">
              34 <br></br>
              <span className="profdetails">Peers</span>
            </p>
          </div>
        </div>
        <div className="profilebody">
          <p className="bio">Bio</p>
        </div>
      </div>
    </>
  );
}
