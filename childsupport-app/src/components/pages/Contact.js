import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ym8903s",
        "template_0obgtky",
        form.current,
        "qkme7xxXYwEDPl1XA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Your message has been sent successfully.");
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
          setMessage("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <>
      {messageSent ? (
        <div className="alertBox">
          <p>{message}</p>
        </div>
      ) : (
        <div className="contact-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <p>
              <span className="h1">Get in touch</span>
              Please fill out the quick form and we will be intouch with
              lightning speed
            </p>
            <input type="text" name="user_name" placeholder="Full name" />
            <input
              type="email"
              name="user_email"
              placeholder="Your email adress"
            />
            <textarea name="message" placeholder="Message" />
            <input type="submit" value="Send" />
          </form>
          <div className="contact-column">
            <div className="contact-cols">
              <h2>Connect with us:</h2>
              <p>
                For support or any questions, Email us at
                <Link className="gmail"> guardiancare.org@gmail.com</Link>
              </p>
            </div>
            <div className="contact-cols">
              <h2>Socials: </h2>
              <strong>@guardiancare.org</strong>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
