import { configureStore } from "@reduxjs/toolkit";
import cart from "../features/cart/cart";
import counterReducer from "../features/counter/counterSlice";
import { userSlice } from "../features/authentication/auth";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cart,
    user: userSlice.reducer,
  },
});
