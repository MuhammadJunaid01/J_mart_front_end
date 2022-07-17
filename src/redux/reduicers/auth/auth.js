import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApi = createApi({
  reducerPath: "taskapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
    tagTypes: ["users"],
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => `users`,
    }),
    addUser: builder.mutation({
      query: (body) => {
        console.log("add user body", body);
        return {
          url: "http://localhost:5000/register",
          body: body,
          method: "POST",
        };
      },
    }),
    loginUser: builder.mutation({
      query: (body) => {
        console.log("login user body", body);
        return {
          url: "http://localhost:5000/login",
          body: body,
          method: "POST",
        };
      },
    }),
    createOffer: builder.mutation({
      query: (body) => {
        console.log("add user body", body);
        return {
          url: "http://localhost:5000/addProduct",
          body: body,
          method: "POST",
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useAddUserMutation,
  useCreateOfferMutation,
  useLoginUserMutation,
} = taskApi;
