import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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

export const bestSaleProductsSlice = createSlice({
  name: "bestSale",
  initialState: {
    bestSale: [],
  },
  reducers: {
    getBestSaleProducts: (state, action) => {
      state.bestSale = action.payload;
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
    reviewProducts: builder.mutation({
      query: (data) => {
        return {
          url: "/review",
          body: data,
          method: "POST",
        };
      },
    }),
    getBestSaleProducts: builder.query({
      query: () => "/bestSaleProducts",
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useReviewProductsMutation,
  useGetBestSaleProductsQuery,
} = productsApi;
export const { allProducts } = productsSlice.actions;
export default productsSlice.reducer;
export const { getBestSaleProducts } = bestSaleProductsSlice.actions;
export const bestSaleProductsSliceReducer = bestSaleProductsSlice.reducer;
