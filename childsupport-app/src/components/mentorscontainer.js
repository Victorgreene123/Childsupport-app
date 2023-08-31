// import { Link } from 'react-router-dom';
import "../App";
import "../index.css";
import React from "react";
import Custombutton from "./custombutton";

export default function Mentors() {
  return (
    <>
      <>
        <div className="mentorscontainer">
          <h2 className="page-heading">Peers</h2>
          <div className="mentors">
            <div className="mentor">
              <img
                src={process.env.PUBLIC_URL + "/profile.png"}
                className="profilepic"
                alt="profile"
              />
              <div className="mentor-text-details">
                <h4 className="mentorname">John Doe</h4>
                <Custombutton
                  default="Remove Peer"
                  other="Add Peer"
                ></Custombutton>
              </div>
            </div>

            <div className="mentor">
              <img
                src={process.env.PUBLIC_URL + "/profile.png"}
                className="profilepic"
                alt="profile"
              />
              <div className="mentor-text-details" onClick={console.log("me")}>
                <h4 className="mentorname">John Doe</h4>
                <Custombutton
                  default="Remove Peer"
                  other="Add Peer"
                ></Custombutton>
                {/* <button onClick={(e) => console.log("Button Clicked")}></button> */}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
