import React from "react";
import "./AddProductForm.css";
import { useState } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [brand, setBrand] = useState();
  const [model, setModel] = useState();
  const [seller, setSeller] = useState();
  const [location, setLocation] = useState();
  const [year, setYear] = useState();
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
  const [review, setReview] = useState();
  const [comments, setComments] = useState();
  const [image, setImage] = useState();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("category", category);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("brand", brand);
    formData.append("model", model);
    formData.append("seller", seller);
    formData.append("location", location);
    formData.append("year", year);
    formData.append("price", price);
    formData.append("desc", desc);
    formData.append("review", review);
    formData.append("comments", comments);
    formData.append("image", image);
  
    axios
      .post("http://localhost:5000/upload", formData)
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("Succeeded");
          setSuccessMessageVisible(true);
          setTimeout(() => {
            setSuccessMessageVisible(false);
            window.location.reload(true); // Reload the window after hiding success message
          }, 5000);
         
          // Reset all state variables
          setCategory("");
          setName("");
          setType("");
          setBrand("");
          setModel("");
          setSeller("");
          setLocation("");
          setYear("");
          setPrice("");
          setDesc("");
          setReview("");
          setComments("");
          setImage(null);
        } else {
          console.log("failed");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="addform-outer-container">
        <div className="addform-conatiner">
          <div className="apf-heading">
            <h1>Add Product Details</h1>
          </div>
          <div className="apf-category">
            <label htmlFor="category" className="apf-label">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter Category name"
              className="apf-input"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="apf-name">
            <label htmlFor="productName" className="apf-label">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              placeholder="Enter Product name"
              className="apf-input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="apf-type">
            <label htmlFor="type" className="apf-label">
              Product Type
            </label>
            <input
              type="text"
              name="type"
              placeholder="Enter Product type"
              className="apf-input"
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="apf-brand">
            <label htmlFor="brand" className="apf-label">
              Product Brand
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Enter brand name"
              className="apf-input"
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="apf-model">
            <label htmlFor="model" className="apf-label">
              Product Model
            </label>
            <input
              type="text"
              name="model"
              placeholder="Enter model name"
              className="apf-input"
              onChange={(e) => setModel(e.target.value)}
            />
          </div>

          <div className="apf-seller">
            <label htmlFor="seller" className="apf-label">
              Seller Name
            </label>
            <input
              type="text"
              name="seller"
              placeholder="Enter Seller name"
              className="apf-input"
              onChange={(e) => setSeller(e.target.value)}
            />
          </div>
          <div className="apf-location">
            <label htmlFor="location" className="apf-label">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              className="apf-input"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="apf-year">
            <label htmlFor="year" className="apf-label">
              Purchasing Year
            </label>
            <input
              type="text"
              name="year"
              placeholder="Enter Purchasing year"
              className="apf-input"
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="apf-price">
            <label htmlFor="price" className="apf-label">
              Rent Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="Enter rent price"
              className="apf-input"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="apf-description">
            <label htmlFor="description" className="apf-label">
              Product Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter Product description"
              className="apf-input"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="apf-reviews">
            <label htmlFor="reviews" className="apf-label">
              Product Reviews
            </label>
            <input
              type="text"
              name="reviews"
              placeholder="Enter Product reviews"
              className="apf-input"
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className="apf-comments">
            <label htmlFor="comments" className="apf-label">
              User Comments
            </label>
            <input
              type="text"
              name="comments"
              placeholder="Enter comments"
              className="apf-input"
              onChange={(e) => setComments(e.target.value)}
            />
          </div>

          <div className="apf-image">
            <label htmlFor="uploadimage" className="apf-label">
              Upload Image
            </label>
            <input
              type="file"
              name="uploadimage"
              className="apf-file-input"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="apf-button">
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

export default AddProductForm;
