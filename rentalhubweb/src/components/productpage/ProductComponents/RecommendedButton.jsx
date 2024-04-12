import React from "react";

const RecommendedButton = ({ onClickHandler, value, title }) => {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className="rec-btns"
    >{title}</button>
  );
};

export default RecommendedButton;
