import React from "react";
import "./CartItemComponent.css";
function CartItemComponent() {
  return (
    <div className="cart-Item">
      <div className="movie-image">
        <img
          src={
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_500x749.jpg?v=1620048742"
          }
        ></img>
      </div>
      <div className="order-details">
        <h4>Movie Name</h4>
        <div className="quantity-item">
          <p>+</p>
          {"123"}
          <p>-</p>
        </div>
        <p>123$</p>
      </div>
    </div>
  );
}

export default CartItemComponent;
