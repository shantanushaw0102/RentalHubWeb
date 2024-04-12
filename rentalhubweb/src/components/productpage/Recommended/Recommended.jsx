import React from "react";
import "./Recommended.css";
import RecommendedButton from "../ProductComponents/RecommendedButton";
const Recommended = ({ handleClick }) => {
  return (
    <div>
      <h2 className="rec-title">Recommended Products</h2>
      <div className="rec-flex">
      <RecommendedButton
          onClickHandler={handleClick}
          value=""
          title="All Products"
        />
        <RecommendedButton
          onClickHandler={handleClick}
          value="electric"
          title="Electric Vehicle"
        />
         <RecommendedButton
          onClickHandler={handleClick}
          value="petrol"
          title="Petrol Vehicle"
        />
        <RecommendedButton
          onClickHandler={handleClick}
          value="tata punch"
          title="Tata Punch"
        />
        <RecommendedButton
          onClickHandler={handleClick}
          value="pg room"
          title="Pg room"
        />
        <RecommendedButton
          onClickHandler={handleClick}
          value="drone"
          title="Drone"
        />
       
      </div>
    </div>
  );
};

export default Recommended;
