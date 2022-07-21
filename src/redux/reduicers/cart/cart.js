import { createSlice, current } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cartItems")) || {
    cartItems: [],
    quantity: 0,
    totalAmount: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const currentState = current(state);
      const isExist = currentState?.cartItems?.find(
        (item) => item._id === action.payload._id
      );
      // console.log("check", isExist);
      if (isExist) {
        state.cartItems = state.cartItems.map((item) => {
          if (item._id === action.payload._id) {
            state.quantity = state.quantity + 1;
            const update = {
              ...item,
              quantity: item.quantity + 1,
            };
            localStorage.setItem("cartItems", JSON.stringify(state));
            return update;
          } else {
            console.log("check item", item);
            return item;
          }
        });
      } else {
        const update = {
          ...action.payload,
          quantity: 1,
        };
        const updatedState = {
          ...(state.quantity = state.quantity + 1),
          ...update,
        };
        localStorage.setItem("cartItems", JSON.stringify(state));
        state?.cartItems?.push(updatedState);
      }
      state.totalAmount = state?.cartItems?.map((item) => {
        return item.quantity * item.Price;
      });
    },
    inceaseById: (state, action) => {
      const currentState = current(state);
      state.cartItems = state?.cartItems?.map((item) => {
        if (action.payload === item._id) {
          state.quantity = state.quantity + 1;
          const update = {
            ...item,
            quantity: item.quantity + 1,
          };
          localStorage.setItem("cartItems", JSON.stringify(state));
          return update;
        } else {
          return item;
        }
      });
    },
    decreseById: (state, action) => {
      const currentState = current(state);
      state.cartItems = state.cartItems.map((item) => {
        if (item._id === action.payload._id) {
          if (action.payload.quantity > 1) {
            state.quantity = state.quantity - 1;
            const update = {
              ...item,
              quantity: item.quantity - 1,
            };
            localStorage.setItem("cartItems", JSON.stringify(state));
            return update;
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
    },
    deleteById: (state, action) => {
      // console.log(action.payload);
      const currentState = current(state);

      const check = currentState.cartItems.includes(action.payload);
      if (check) {
        currentState.cartItems.map((item, index, arr) => {
          if (action.payload._id === item._id) {
            state.cartItems.splice(index, 1);
            localStorage.setItem("cartItems", JSON.stringify(state));
          }
        });
      }
    },
    getTotal: (state) => {
      const currentState = current(state);

      const test = currentState.cartItems.map((element) => {
        return element.quantity * element.price;
      });
      const total = test.reduce((prev, next) => {
        return prev + next;
      }, 0);
    },
  },
});
export const {
  addToCart,
  totalPrice,
  inceaseById,
  decreseById,
  deleteById,
  getTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
