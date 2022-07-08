import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    quantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload.id);
      const currentState = current(state);

      const isExist = currentState.cartItems.find(
        (item) => item.id === action.payload.id
      );
      // console.log("check", isExist);
      if (isExist) {
        console.log("hello you are true");
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      } else {
        console.log("hello you are false");
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.totalAmount = state.cartItems.map((item) => {
        return item.quantity * item.price;
      });
    },
    getTotal: (state) => {},
  },
});
export const { addToCart, totalPrice, getTotal } = cartSlice.actions;
export default cartSlice.reducer;
