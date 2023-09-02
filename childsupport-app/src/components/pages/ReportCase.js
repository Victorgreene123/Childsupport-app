import React from "react";
import "./ReportCase.css";
import { Link } from "react-router-dom";

function ReportCase() {
  return (
    <>
      <div className="report-container">
        <div className="report-intro">
          <h1>Report Domestic Abuse</h1>
          <p>
            If you suspect or witness any form of domestic abuse, it's crucial
            to take action. Domestic abuse can have devastating consequences on
            individuals and families. By reporting it, you can help protect
            those in need. Domestic abuse includes physical violence, emotional
            abuse, financial control, and more. It's our collective
            responsibility to ensure the safety and well-being of everyone in
            our community. Don't stay silent; report any form of domestic abuse
            now.
          </p>
        </div>
        <div className="why-report">
          <div>
            <h2>Why Reporting Domestic Abuse is Important</h2>
            <ul>
              <li>
                Domestic abuse can have severe physical and psychological
                effects on victims, including children.
              </li>
              <li>
                Reporting can help victims access the support and protection
                they need.
              </li>
              <li>It can prevent the escalation of abuse and save lives.</li>
              <li>
                Domestic abuse often impacts children, and reporting can provide
                a safer environment for them.
              </li>
              <li>
                Reporting sends a message that abuse will not be tolerated in
                our community.
              </li>
            </ul>
          </div>
          <div className="no-violence">
            <img
              src={process.env.PUBLIC_URL + "/no-violence.jpg"}
              alt="no violence"
            />
          </div>
        </div>
        <div className="report-form">
          <form>
            <h2>Report Case</h2>
            <label for="full-name">Name</label>
            <input
              type="text"
              id="full-name"
              name="name"
              placeholder="Enter your full name"
              required
            />
            <label for="UserEmail">Email</label>
            <input
              type="email"
              id="UserEmail"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label for="UserPhone">Phone Number</label>
            <input
              type="phone"
              id="UserPhone"
              name="phone"
              placeholder="Enter your full name"
              required
            />
            <label for="abuse-type">Type of Abuse</label>
            <select id="abuse-type" name="abuse-type" required>
              <option value="physical">Physical Abuse</option>
              <option value="emotional">Emotional Abuse</option>
              <option value="financial">Financial Control</option>
            </select>
            <label for="abuse-description">Description of Abuse</label>
            <textarea
              id="abuse-description"
              name="abuse-description"
              rows="10"
              cols="40"
              required
              placeholder="Tell us about the incedent"
            ></textarea>
            <p>
              Your information is safe with us and will be shared only with the
              proper authorities for investigation and support.
            </p>
            <Link className="report-submit-link" to="/signup">
              <button type="button" id="report-submit">
                Sign in to submit report
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
export default ReportCase;
