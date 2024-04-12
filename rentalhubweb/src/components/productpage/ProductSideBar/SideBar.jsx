import React from "react";
import "./SideBar.css";
import Category from "./Category/Category";


const SideBar = ({handleChange}) => {
  return (
    <section className="sidebar">
      <div className="sidebar-con">
        <Category handleChange = {handleChange}/>
        
      </div>
    </section>
  );
};

export default SideBar;
