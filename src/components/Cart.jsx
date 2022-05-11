import React from "react";
import useAuth from "../hooks/useAuth";
const Cart = () => {
  const { price, quantity } = useAuth();
  return (
    <div>
      <h1>{price}</h1>
      <h1>{quantity}</h1>
    </div>
  );
};

export default Cart;
