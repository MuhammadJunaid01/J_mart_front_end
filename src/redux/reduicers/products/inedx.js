import {
  createApi,
  CreateApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    allProducts: (state, action) => {
      state.products = action.payload;
      return state;
    },
  },
});

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/allProducts",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
export const { allProducts } = productsSlice.actions;
export default productsSlice.reducer;
