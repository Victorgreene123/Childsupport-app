import "../App";
import "../index.css";
import "./dashboard.css";
import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import Sidenav from "./sidenav";
// import Statistics from "./statistics";
// import Sessionscontainer from "./sessionscontainer";

export default function Dashboard() {
  return (
    <>
      <div className="container2">
        <div className="general-row">
          <Sidenav></Sidenav>
          <div className="right">
            <div className="middle">
              <Outlet />
            </div>
            <div className="extra">
              <Link to="/dashboard/me">
                <img
                  src={process.env.PUBLIC_URL + "/profile.png"}
                  className="img"
                  alt="profile"
                />
              </Link>
              <img
                src={process.env.PUBLIC_URL + "/bell.svg"}
                className="img"
                alt="bell"
              />

              <img
                src={process.env.PUBLIC_URL + "/emergency.png"}
                className="img"
                alt="emergency"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
