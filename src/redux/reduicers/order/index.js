import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://j-mart-gt4t.onrender.com",
    // baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => {
        return {
          url: "/payment",
          body: data,
          method: "POST",
        };
      },
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
