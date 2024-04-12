import React, { useState } from "react";
import "./UserContact.css";
import axios from "axios";

const UserContact = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [comments, setComments] = useState();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleSubmit = () => {
    const formData = {
      username: username,
      email: email,
      phone: phone,
      comments: comments,
    };

    axios
      .post("http://localhost:5000/feedback", formData)
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("Succeeded");
          setSuccessMessageVisible(true);
          setTimeout(() => {
            setSuccessMessageVisible(false);
            setUsername("");
            setEmail("");
            setPhone("");
            setComments("");
            window.location.reload(true);
          }, 5000);
        } else {
          console.log("Failed");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="cf-container">
        <div className="half left cf">
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            name="phone"
            placeholder="phone.No"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className=" message half right cf">
          <textarea
            name="comments"
            placeholder="Enter your comments & queries......"
            cols="30"
            rows="10"
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div>
        <button className="cf-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      

      {successMessageVisible && (
        <div className="success-message">Message sent successfully!</div>
      )}
    </>
  );
};

export default UserContact;
