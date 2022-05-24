import React, { useEffect, useState } from "react";

const useHooks = () => {
  let [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [open, setOpen] = useState(true);

  let localCart = JSON.parse(localStorage.getItem("cart"));

  //adding new item

  const addTocart = async (item, quantity) => {
    console.log(item);
    let cartCopy = [...cart];
    let { id } = item;
    //look for item in cart array
    let existingItem = cart.find((cartItem) => cartItem.id === id);
    //if item already exists
    if (existingItem) {
      existingItem.quantity = +parseInt(1);
      existingItem.sum = item.price; //update item
      existingItem.total = existingItem.sum + item.price; //update item
      existingItem.quantity = existingItem.quantity + 1;
      alert("exeee");
      // cartCopy.push(existingItem);
    } else {
      //if item doesn't exist, simply add it
      cartCopy.push(item);
    }

    //update app state
    setCart(cartCopy);
    console.log("exis", existingItem);
    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
    // setItems(t);
  };
  const updateItem = (itemID, amount) => {};
  const removeItem = (itemID) => {};
  useEffect(() => {
    if (localCart) setCart(localCart);
  }, []);
  useEffect(() => {
    setCartValue(JSON.parse(localStorage.getItem("cart")));
  }, [cart]);
  let total = [...(cartTotal || "")];
  let sum = 0;
  for (const key in cartValue) {
    const element = cartValue[key];
    sum = sum + element.price;
    total.push(sum);
  }
  // setCart(sum);
  const check = () => {
    setOpen((open) => !open);
    console.log("open", open);
  };
  return {
    addTocart,
    updateItem,
    removeItem,
    check,
    open,
    setOpen,
  };
};

export default useHooks;
