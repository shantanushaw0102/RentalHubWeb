import React, { useState } from "react";
import axios from "axios";

const ChatForm = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const [model, setModel] = useState();
  const [message, setMessage] = useState();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleSubmit = () => {
    const formData = {
      username: username,
      email: email,
      phone: phone,
      name: name,
      brand: brand,
      model: model,
      message: message,
    };

    axios
      .post("http://localhost:5000/userchat", formData)
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("Succeeded");
          setSuccessMessageVisible(true);
          setTimeout(() => {
            setSuccessMessageVisible(false);
            setUsername("");
            setEmail("");
            setPhone("");
            setName("");
            setBrand("");
            setModel("");
            setMessage("");
            window.location.reload(true); // Reload the window after hiding success message
          }, 5000);
        } else {
          console.log("Failed");
        }
      })
      .catch((err) => console.log(err));
  };

  
  return (
    <>
      <div className="chatform-container chat-form">
        <form className="chatform-form" onSubmit={handleSubmit}>
          <div className="chatform-inputs">
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone.No"
              autoComplete="off"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              name="pname"
              placeholder="Product name"
              autoComplete="off"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="brand"
              placeholder="Product brand"
              autoComplete="off"
              required
              onChange={(e) => setBrand(e.target.value)}
            />

            <input
              type="text"
              name="model"
              placeholder="Product model"
              autoComplete="off"
              required
              onChange={(e) => setModel(e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Enter your Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input type="submit" value="Submit" className="chatform-submit" />
          </div>
        </form>
      </div>
      {successMessageVisible && (
        <div className="success-message">Message sent successfully!</div>
      )}
    </>
  );
};

export default ChatForm;
