import React from "react";
import "./ProductItem.css";


const ProductItem = ({result}) => {
  return (
    <>
      <section className="pcard-container">
       {result}
      </section>
    </>
  );
};

export default ProductItem;
