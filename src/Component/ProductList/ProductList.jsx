import React from "react";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-category">Category: {product.category}</p>
          <div className="product-rating">
            <span>Rating:</span>
            <span>{product.rating.rate} / 5</span>
            <span>({product.rating.count} reviews)</span>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;