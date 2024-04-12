import React, { useRef, useState } from "react";
import "./RentOut.css";
import axios from "axios";

const RentOut = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [brand, setBrand] = useState();
  const [model, setModel] = useState();
  const [location, setLocation] = useState();
  const [year, setYear] = useState();
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
  const [image, setImage] = useState();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("category", category);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("brand", brand);
    formData.append("model", model);
    formData.append("location", location);
    formData.append("year", year);
    formData.append("price", price);
    formData.append("desc", desc);
    formData.append("image", image);

    axios
      .post("http://localhost:5000/userproduct", formData)
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("Succeeded");
          setSuccessMessageVisible(true);
          setTimeout(() => {
            setSuccessMessageVisible(false);
            window.location.reload(true); // Reload the window after hiding success message
          }, 5000);

          // Reset all state variables
          setUsername("");
          setEmail("");
          setPhone("");
          setAddress("");
          setCategory("");
          setName("");
          setType("");
          setBrand("");
          setModel("");
          setLocation("");
          setYear("");
          setPrice("");
          setDesc("");
          setImage(null);
        } else {
          console.log("failed");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="ro-outer-container">
        <div className="ro-container">
          <div className="ro-heading">
            <h1>RentOut your Product</h1>
          </div>

          <div className="ro-username">
            <label htmlFor="username" className="ro-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              className="ro-input"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="ro-email">
            <label htmlFor="email" className="ro-label">
              Email Id
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="ro-input"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="ro-phone">
            <label htmlFor="phone" className="ro-label">
              phone no.
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your email"
              className="ro-input"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="ro-address">
            <label htmlFor="address" className="ro-label">
              address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="ro-input"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="ro-category">
            <label htmlFor="category" className="ro-label">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter Category name"
              className="ro-input"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="ro-pname">
            <label htmlFor="pname" className="ro-label">
              Product Name
            </label>
            <input
              type="text"
              name="pname"
              placeholder="Enter Product name"
              className="ro-input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="ro-type">
            <label htmlFor="type" className="ro-label">
              Product Type
            </label>
            <input
              type="text"
              name="type"
              placeholder="Enter Product type"
              className="ro-input"
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="ro-brand">
            <label htmlFor="brand" className="ro-label">
              Product Brand
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Enter brand name"
              className="ro-input"
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="ro-model">
            <label htmlFor="model" className="ro-label">
              Product Model
            </label>
            <input
              type="text"
              name="model"
              placeholder="Enter model name"
              className="ro-input"
              onChange={(e) => setModel(e.target.value)}
            />
          </div>

          <div className="ro-location">
            <label htmlFor="location" className="ro-label">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              className="ro-input"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="ro-year">
            <label htmlFor="year" className="ro-label">
              Purchasing Year
            </label>
            <input
              type="text"
              name="year"
              placeholder="Enter Purchasing year"
              className="ro-input"
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="ro-price">
            <label htmlFor="price" className="ro-label">
              Rent Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="Enter rent price"
              className="ro-input"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="ro-description">
            <label htmlFor="description" className="ro-label">
              Product Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter Product description"
              className="ro-input"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div className="ro-image">
            <label htmlFor="uploadimage" className="ro-label">
              Upload Image
            </label>
            <input
              type="file"
              name="uploadimage"
              className="ro-file-input"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="ro-button">
            <button className="apf-submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      {successMessageVisible && (
        <div className="success-message">Message sent successfully!</div>
      )}
    </>
  );
};

export default RentOut;
