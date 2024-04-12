import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./productpage/Products";
import Contact from "./Contact";
import Header from "./Header";
import AdminLogin from "./LoginFrom/AdminLogin";
import AdminRegister from "./LoginFrom/AdminRegister";
import UserLogin from "./LoginFrom/UserLogin";
import UserRegister from "./LoginFrom/UserRegister";
import AddProductForm from "./AddProduct/AddProductForm";
import RentOut from "./AddProduct/RentOut";
import Footer from "./Footer";
import ErrorPage from "./ErrorPage";
import SingleProduct from "./productpage/SingleProduct/SingleProduct";
import "../styles/globalstyle.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/userregister" element={<UserRegister />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/addproduct" element={<AddProductForm />} />
        <Route path="/rentout" element={<RentOut />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
