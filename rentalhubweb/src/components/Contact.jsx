import React from "react";
import "../styles/contact.css";
import UserContact from "./UserContact/UserContact";

const Contact = () => {
  return (
    <>
      <div className="heading">
        <h2 className="contact">Contact Us</h2>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2545.134465068469!2d85.81833726753607!3d20.355190827050315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a1909f9c4a66c69%3A0x50f0ab7f7a9de9d4!2sKing&#39;s%20Palace%2014%20(KP14)%2C%20Chandaka%20Industrial%20Estate%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha!3m2!1d20.3552095!2d85.819448!4m5!1s0x3a1909f9c4a66c69%3A0x50f0ab7f7a9de9d4!2sKing&#39;s%20Palace%2014%20(KP14)%2C%20Chandaka%20Industrial%20Estate%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha!3m2!1d20.3552095!2d85.819448!5e0!3m2!1sen!2sin!4v1707423468671!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        ></iframe>
      </div>
      <h1 className="cf-heading">Send your Quires & FeedBack</h1>
      <UserContact />
    </>
  );
};

export default Contact;
