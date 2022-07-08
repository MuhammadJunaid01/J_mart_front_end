import { configureStore } from "@reduxjs/toolkit";
import cart from "../reduicers/cart/cart";
import drawer from "../reduicers/drawer";

export const store = configureStore({
  reducer: {
    cart: cart,
    draw: drawer,
  },
});
