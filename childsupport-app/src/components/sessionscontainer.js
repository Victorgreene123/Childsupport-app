import { Link } from "react-router-dom";
import "../App";
import "../index.css";
import React from "react";
// import Sectionlink from "./sectionlink";
import { memo } from "react";
import "./dashboard.css";

export default memo(function SessionsContainer() {
  return (
    <>
      <div className="sessionsavailable-container">
        <h5 className="statname">
          {" "}
          <span className="bullet"> &#9702;</span>Available Therapy Sessions
        </h5>
        <table className="sessions-table">
          {/* <thead className='sessions-table-head'>
        <tr>
          <td>Title</td>
          <td>Host</td>
          <td>Availability</td>
          <td>Time</td>
          <td>Join</td>
        </tr>
    </thead> */}
          <tbody className="sessions-table-body">
            <tr>
              <td>Building your confidence</td>
              <td>John Doe</td>

              <td className="Live">LIVE</td>
              <td>
                {" "}
                <Link className="join">Join</Link>
              </td>
            </tr>

            <tr>
              <td>Building your confidence</td>
              <td>John Doe</td>

              <td className="Live">LIVE</td>
              <td>
                <Link className="join">Join</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
});
