import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    // const cart = JSON.parse(localStorage.getItem("cartItems"));
    // setCartItems(cart);
    let sum = 0;
    if (cartItems) {
      for (const total of cartItems) {
        console.log(total.price * total.cartTotalQuantity);
        sum = sum + total.price * total.cartTotalQuantity;
      }
    }
  }, [cart.cartItems]);
  return (
    <div>
      <h1>cart items {cartItems?.length}</h1>
      {/* {cartItems.map((item, index) => (
        <div key={index}>
          <h1>hello</h1>
        </div>
      ))} */}
    </div>
  );
};

export default Cart;
