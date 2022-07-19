import { createSlice, current } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import jwt_decode from "jwt-decode";

export const currentUserSlice = createSlice({
  name: "user/getCurrentUser/getCurrentUser",
  initialState: {
    user: undefined,
    isValidate: true,
  },
  reducers: {
    getCurrentUser: (state) => {
      const user = JSON.parse(localStorage.getItem("user"));
      state.user = user;
      const token = user.data.token;
      const { exp } = jwt_decode(token);
      const expirationTime = exp * 1000 - 6000;
      if (Date.now() >= expirationTime) {
        //write expiration code
        //localstorage remove item user
        //history push('/login)
      }
      return state;
    },
  },
});

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

export const { getCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
