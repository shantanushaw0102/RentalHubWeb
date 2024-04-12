import React from "react";
import "./ProductNav.css";
import { FaRegBell } from "react-icons/fa";
import { HiOutlineChat } from "react-icons/hi";
import { Link } from "react-router-dom";

const ProductNav = ({ handleInputChange, query }) => {
  return (
    <>
      <nav className="p-nav">
        <div className="pnav-container">
          <span className="p-search-title">Search</span>
          <input
            className="p-search"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="find car,rooms,electronics..."
          />
        </div>
        <div className="icon-container">
          <a href="#">
            <FaRegBell className="p-icons" title="Notifications" />
          </a>

          <Link to="/contact">
            <HiOutlineChat className="p-icons" title="Contact Us" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default ProductNav;
