import { configureStore } from "@reduxjs/toolkit";
import cart from "../reduicers/cart/cart";
import category from "../reduicers/category";
import drawer from "../reduicers/drawer";
import tracker from "../reduicers/tracker";
import { setupListeners } from "@reduxjs/toolkit/query";
import currentUser, { taskApi, usersSlice } from "../reduicers/auth/auth";
import offerSlice, { offerApi } from "../reduicers/offer/offerSlice";
import timeOut from "../reduicers/toggle/toggle";
import { orderApi } from "../reduicers/order";
import productsSlice, {
  bestSaleProductsSliceReducer,
  productsApi,
} from "../reduicers/products/inedx";
import quickVeiwSlice from "../reduicers/quickVeiw/quickVeiw";
import paginate from "../reduicers/paginate";
import { userProfileEditApi } from "../reduicers/editprofile";

export const store = configureStore({
  reducer: {
    cart: cart,
    draw: drawer,
    category: category,
    traker: tracker,
    offer: offerSlice,
    bestSale: bestSaleProductsSliceReducer,
    currentUser: currentUser,
    products: productsSlice,
    timeOut: timeOut,
    paginate: paginate,
    quickVeiw: quickVeiwSlice,
    user: usersSlice,
    [taskApi.reducerPath]: taskApi.reducer,
    [offerApi.reducerPath]: offerApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [userProfileEditApi.reducerPath]: userProfileEditApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(offerApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(orderApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),

  // getDefaultMiddleware().concat(offerApi.middleware),
});
setupListeners(store.dispatch);
