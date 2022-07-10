import { configureStore } from "@reduxjs/toolkit";
import cart from "../reduicers/cart/cart";
import category from "../reduicers/category";
import drawer from "../reduicers/drawer";
import tracker from "../reduicers/tracker";

export const store = configureStore({
  reducer: {
    cart: cart,
    draw: drawer,
    category: category,
    traker: tracker,
  },
});
