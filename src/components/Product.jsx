import React from "react";
import "./Products.css";

export default function Product() {
  // Product data
  const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$15" },
    { id: 3, name: "Product 3", price: "$20" },
    { id: 4, name: "Product 4", price: "$25" },
    { id: 5, name: "Product 5", price: "$30" },
    { id: 6, name: "Product 6", price: "$35" },
  ];

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <button className="add-cart-btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

  