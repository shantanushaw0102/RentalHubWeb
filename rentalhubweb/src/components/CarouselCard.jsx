import React from "react";
import { Link } from "react-router-dom";

function RentItems(props) {
  return (
    <div key={props.id} className="card">
      <Link to={`/product/${props.id}`}>
        <img className="product-image" src={props.img} alt="image" />
      </Link>
      <h2>{props.name}</h2>
      <p className="product-price"> ₹ {props.price}</p>
      <p className="product-desc">{props.desc.substring(0, 120)}</p>
    </div>
  );
}

function NewArrivedItems(props) {
  return (
    <div key={props.id} className="card">
      <Link to={`/product/${props.id}`}>
        <img className="product-image" src={props.img} alt="image" />
      </Link>
      <h2>{props.name}</h2>
      <p className="product-price"> ₹ {props.price}</p>
      <p className="product-desc">{props.desc.substring(0, 120)}</p>
    </div>
  );
}

export { RentItems, NewArrivedItems };
