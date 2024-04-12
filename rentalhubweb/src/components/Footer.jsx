import React from "react";
import "../styles/Footer.css";
import BrandImage from "./BrandImage";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { IoCall, IoHeartHalf } from "react-icons/io5";
import { FaTwitter, FaLinkedin, FaGooglePlay ,FaRegCopyright } from "react-icons/fa";
const Footer = () => {

const year = new Date().getFullYear();

  return (
    <>
      <div className="footer-container">
        <div className="f-co-grid">
          <div className="f-co-img">
            <BrandImage />
            <p>Rentorama , suggesting a wide and comprehensive view of rental options.</p>
          </div> 
          <div className="f-contents">
            <h3 className="f-co-heading">UseFul Links</h3>
            <ul className="f-co-contents">
              <li>
                <p>
                  <NavLink to="/">Home</NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink to="/about">About</NavLink>
                </p>
              </li>
              <li>
                <p>
                  <NavLink to="/products">Products</NavLink>
                </p>
              </li>

              <li>
                <p>
                  <NavLink to="/login">Login</NavLink>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="f-co-heading">Follow Us</h3>
            <p className="f-co-social-btns">
              <a href="#">
                <FaTwitter className="f-co-icon" />
              </a>
              <a href="#">
                <FaLinkedin className="f-co-icon" />
              </a>
              <a href="#">
                <FaGooglePlay className="f-co-icon" />
              </a>
            </p>

            <button className="sub-btns">Subscribe</button>
            <form
              className="f-co-subscribe"
              action="https://formspree.io/f/mleyzlwl"
              method="POST"
            >
              <input
                className="f-co-input-sub"
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />
            </form>
          </div>
          <div>
            <h3 className="f-co-heading">Contact Us</h3>

            <p>Kp-14 hostel , Kiit campus - 12 ,</p>
            <p> Chandaka Industrial Estate, Patia,</p>
            <p>Bhubaneswar, Odisha 751024</p>
            <p>
              <MdEmail className="f-co-icon" /> rentorama123@gmail.com
            </p>
            <p>
              <IoCall className="f-co-icon" /> +91 9078524029
            </p>
          </div>
          <div>
            <h3 className="f-co-heading">Help</h3>
            <p className="f-co-contents">
              <NavLink to="/contact">Contact Us</NavLink>
            </p>
            <p className="f-co-contents">
              <a href="#">FAQs</a>
            </p>
            <p className="f-co-contents">
              <a href="#">Accessibility</a>
            </p>
          </div>
        </div>
      </div>
      <div className="f-copyright">
        <p><FaRegCopyright className="copyright-icon" /> Copyright {year} Rentorama - All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
