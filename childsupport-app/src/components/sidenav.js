import { Link } from "react-router-dom";
import "../App";
import "../index.css";
import React from "react";
import Sectionlink from "./sectionlink";
import "./dashboard.css";

export default function Sidenav() {
  return (
    <div className="sidenav">
      <div className="block1">
        <ul className="sections">
          <h3 className="section-heading">NAVIGATION</h3>
          <Sectionlink></Sectionlink>
          <h3 className="section-heading">ACTIONS</h3>

          <Link className="sections-link" id="settings">
            <span className="sectionlinkholder">
              <img
                className="sectionlinkicon"
                src={process.env.PUBLIC_URL + "/settings.png"}
                alt="settings"
              />
              <span className="sectionlinkname">Settings</span>
            </span>
          </Link>
          {/* {process.env.PUBLIC_URL + "/settings.png"} */}
        </ul>
      </div>
      <div className="aside">
        {/* <div className='profile'>
      
         <div className='pic'>
          <img src='images/children.png'  className='profilepic'></img>
         </div>
         <div className='details'>
           <h4 className='username'>Tim Jacky</h4>
           <p className='useremail'>victorokereafor888888888888@gmail.com</p>
         
       </div>
     </div> */}
        <Link className="sections-link logout">
          {" "}
          <span className="sectionlinkholder">
            <img
              src={process.env.PUBLIC_URL + "/logout.png"}
              alt="logout"
              className="sectionlinkicon"
            />
            <span className="sectionlinkname logoutname"> Log out </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
