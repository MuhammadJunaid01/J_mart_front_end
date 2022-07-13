import { configureStore } from "@reduxjs/toolkit";
import cart from "../reduicers/cart/cart";
import category from "../reduicers/category";
import drawer from "../reduicers/drawer";
import tracker from "../reduicers/tracker";
import { setupListeners } from "@reduxjs/toolkit/query";
import { taskApi } from "../reduicers/auth/auth";
import offerSlice, { offerApi } from "../reduicers/offer/offerSlice";

export const store = configureStore({
  reducer: {
    cart: cart,
    draw: drawer,
    category: category,
    traker: tracker,
    offer: offerSlice,
    [taskApi.reducerPath]: taskApi.reducer,
    [offerApi.reducerPath]: offerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(offerApi.middleware),

  // getDefaultMiddleware().concat(offerApi.middleware),
});
setupListeners(store.dispatch);
