import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (totalAmount) {
      const total = totalAmount.reduce((prev, next) => {
        return prev + next;
      }, 0);

      setTotalPrice(total);
    }
  }, [cartItems]);

  return (
    <div>
      <h1>hello cart</h1>
      {cartItems?.map((item, index) => (
        <div key={index}>
          <h1>{item.id}</h1>
          <img
            style={{ height: "120px", width: "160px" }}
            src={item.img}
            alt=""
          />
        </div>
      ))}
      <h1>total price:{totalPrice}</h1>
    </div>
  );
};

export default Cart;
