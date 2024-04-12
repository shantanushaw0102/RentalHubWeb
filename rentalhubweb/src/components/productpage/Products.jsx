import React, { useState ,useEffect} from "react";
import ProductNav from "./ProductNavigation/ProductNav";
import ProductItem from "./ProductsItem/ProductItem";
import Recommended from "./Recommended/Recommended";
import SideBar from "./ProductSideBar/SideBar";
import products from "../../database/ProductItem";
import "./product.css";
import ProductCard from "./ProductComponents/ProductCard";
import axios from "axios";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/display")
      .then((res) => setData(res.data.rows))
      .catch((err) => console.log(err));
  }, []);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = data.filter(
    (product) => product.p_name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ p_category, p_color, p_company, p_newPrice, p_title, p_name, p_type }) =>
          p_category === selected ||
          p_color === selected ||
          p_company === selected ||
          p_newPrice === selected ||
          p_title === selected ||
          p_name === selected ||
          p_type === selected
      );
    }

    return filteredProducts.map(
      ({ id, p_image, p_name, p_reviews, p_price, p_brand, p_model, p_seller, p_type }) => (
        <ProductCard
          key={id}
          id={id}
          img={`http://localhost:5000/images/${p_image}`}
          name={p_name}
         
          reviews={p_reviews}
          price={p_price}
          brand={p_brand}
          model = {p_model}
          seller={p_seller}
          type={p_type}
        />
      )
    );
  }

  const result = filteredData(data, selectedCategory, query);

  return (
    <div className = "main-product-container">
      <SideBar handleChange = {handleChange} />
      <ProductNav query = {query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <ProductItem result={result} />
    </div>
  );
};

export default Products;
