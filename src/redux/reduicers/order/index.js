import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:500",
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => {
        return {
          url: "http://localhost:5000/order",
          body: data,
          method: "POST",
        };
      },
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
