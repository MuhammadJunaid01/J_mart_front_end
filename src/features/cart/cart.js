import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    async addToCart(state, action) {
      let storage = JSON.parse(localStorage.getItem("cartItems"));

      const itemindex = storage.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemindex >= 0) {
        state.cartItems[itemindex] = {
          ...state.cartItems[itemindex],
          cartTotalQuantity: state.cartItems[itemindex].cartTotalQuantity + 1,
        };
        alert("if block redux");
      } else {
        const tempProduct = { ...action.payload, cartTotalQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("product added to cart", {
          position: "bottom-left",
        });
        alert("else block redux");
      }
      console.log("storage", storage[1]);

      console.log("djshjdchjd", storage);
      let storeData = [{ name: "junaid" }, state.cartItems];
      console.log("store updte date", storeData);
      localStorage.setItem("cartItems", JSON.stringify(storeData));
    },
    // decreaseCart(state, action) {
    //   const itemIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (state.cartItems[itemIndex].cartTotalQuantity > 1) {
    //     state.cartItems[itemIndex].cartTotalQuantity -= 1;
    //     toast.info("Decrease product quantity", {
    //       position: "bottom-left",
    //     });
    //   } else if (state.cartItems[itemIndex].cartTotalQuantity === 1) {
    //     const nextCartItem = state.cartItems.filter(
    //       (item) => item.id !== action.payload.id
    //     );
    //     state.cartItems = nextCartItem;
    //     toast.error("product remove from Cart", {
    //       position: "bottom-left",
    //     });
    //     localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    //   }
    // },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
