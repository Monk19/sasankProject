import React, { useState } from "react";
import CartItemComponent from "../CartItemComponent/CartItemComponent";
import "./CartOverLayComponent.css";
function CartOverLayComponent({ disp, dispOn }) {
  return (
    <div style={{ display: dispOn ? "none" : "block" }}>
      <div className="bing-bucket-overlay">
        <div>
          <h1>Binge Cart</h1>
          <div className="cart-items">
            <CartItemComponent />
          </div>
          <button
            onClick={(e) => {
              disp();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartOverLayComponent;
