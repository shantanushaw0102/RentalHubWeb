import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const BrandImage = () => {
  return (
    <div>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
    </div>
  );
};

export default BrandImage;
