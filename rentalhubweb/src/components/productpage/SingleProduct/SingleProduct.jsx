import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./singleProduct.css";
import { FaBackward } from "react-icons/fa";
import axios from "axios";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import ChatForm from "../ProductComponents/ChatForm";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/display")
      .then((res) => setData(res.data.rows))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Filter product by id
    const filterProduct = data.filter((item) => item.id == id);
    if (filterProduct.length > 0) {
      setProduct(filterProduct[0]);
      // Filter related products by category (using the filtered product directly)
      const filterCategory = data.filter((item) => item.p_category === filterProduct[0].category);
      setRelatedProduct(filterCategory);
    }
  }, [id, data]);

  const [showChatForm, setShowChatForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => {
        if (res.data.Status === "Success") {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          setMessage(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const openChatForm = () => {
    if (isLoggedIn) {
      setShowChatForm(true);
    } else {
      alert("Please login first");
    }
  };

  const closeChatForm = () => {
    setShowChatForm(false);
  };


  return (
    <>
      <div className="pm-container ">
        <h1 className="p-heading">
          <span>Product detail</span>
        </h1>
        <div className="product-container">
          <div className="product-img">
            <img src={`http://localhost:5000/images/${product.p_image}`}alt="" />
          </div>
          <div className="product-des">
            <h1 className="p-name">{product.p_name}</h1>
            <h3 className="p-brand">brand : {product.p_brand} </h3>
            <h4 className="p-model">model : {product.p_model}</h4>
            <h4 className="p-type">type : {product.p_type}</h4>
            <h4 className="p-year">year : {product.p_year}</h4>
            <p className="p-desc">
              <span>description :</span> {product.p_description}
            </p>
            <p className="p-renter">
              <span>Renter : </span>
              {product.p_seller}
            </p>
            <h4 className="p-location">location : {product.p_location}</h4>
            <h2 className="p-price">rent Price : {product.p_price} per day</h2>
            <Link to="/products">
              <FaBackward title="back to product" className="back-button" />
            </Link>

            <IoChatbubbleEllipsesOutline
            className="sp-icon"
            title="Chat"
            onClick={showChatForm ? closeChatForm : openChatForm}
          />
          {showChatForm && <ChatForm />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
