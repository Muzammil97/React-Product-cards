import React from "react";
import ProductList from "./Component/ProductList/ProductList";
import products from "./Component/Data/data";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;