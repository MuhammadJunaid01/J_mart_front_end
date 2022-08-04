import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shrouded-reaches-11492.herokuapp.com/",
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
