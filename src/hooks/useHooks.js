import React, { useEffect, useState } from "react";

const useHooks = () => {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  let storage;
  const t = {
    ...storage,
    price: price,
    quan: quantity,
  };
  const addToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(t));
  };
  const cart = async (price, quantity) => {
    setPrice((prev) => prev + price);
    setQuantity((prev) => prev + 1);

    storage = localStorage.getItem("cart");
  };
  // useEffect(() => {
  //   addToLocalStorage();
  // }, []);
  setTimeout(() => {
    addToLocalStorage();
  }, 1000);
  return {
    price,
    setPrice,
    cart,
    quantity,
    setQuantity,
  };
};

export default useHooks;
