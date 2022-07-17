import React from "react";
import { useSelector, useDispatch } from "react-redux";
const DashBoardOrders = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log("cart items", cartItems);
  return (
    <div>
      <h1>hello dashoboard orders</h1>
    </div>
  );
};

export default DashBoardOrders;
