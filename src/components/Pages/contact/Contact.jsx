import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      
      <div className="contact-page">
        <h1 className="contact-page-title">Contact Us</h1>
        <div className="contact-form">
          <input type="text" placeholder="Name" className="contact-input" />
          <input type="email" placeholder="Email" className="contact-input" />
          <textarea placeholder="Message" className="contact-textarea" />
          <button className="contact-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
