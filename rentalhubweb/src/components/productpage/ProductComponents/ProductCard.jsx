import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import ChatForm from "./ChatForm";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

const ProductCard = ({
  id,
  name,
  img,
  price,
  model,
  reviews,
  brand,
  seller,
  type,
}) => {
  const [showChatForm, setShowChatForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => {
        if (res.data.Status === "Success") {
          setIsLoggedIn(true);
          //setName(res.data.name);
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
    <div className="pc" id={id}>
      <Link to={`/product/${id}`}>
        <img src={img} alt="image" className="pc-img" />
      </Link>

      <div className="pc-details">
        <h3 className="pc-title">
          Title : <span>{name}</span>
        </h3>
        <h3 className="pc-brand">
          Brand : <span>{brand}</span>
        </h3>
        <h3 className="pc-model">
          Model : <span>{model}</span>
        </h3>
        <h3 className="pc-type">
          Type : <span>{type}</span>
        </h3>

        <h3 className="pc-reviews">
          Ratings :
          <span>
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
          </span>
          <span className="pc-total-reviews">{reviews}</span>
        </h3>

        <h3 className="pc-price">
          Rent Price : <span>{price}</span>
        </h3>

        <div className="pc-seller-detail">
          <h3 className="pc-seller">
            Renter : <span>{seller}</span>
          </h3>

          <IoChatbubbleEllipsesOutline
            className="bag-icon"
            title="Chat"
            onClick={showChatForm ? closeChatForm : openChatForm}
          />
          {showChatForm && <ChatForm />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
