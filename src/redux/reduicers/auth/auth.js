import { createSlice, current } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
  },
  reducers: {
    allUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const currentUserSlice = createSlice({
  name: "user/getCurrentUser/getCurrentUser",
  initialState: {
    user: undefined,
    isValidate: true,
  },
  reducers: {
    getCurrentUser: (state, actions) => {
      const user = JSON.parse(localStorage.getItem("user"));
      state.user = user;
      state.isValidate = true;

      const token = user?.token;
      const { exp } = jwt_decode(token);
      const expirationTime = exp * 1000 - 6000;
      if (Date.now() >= expirationTime) {
        state.isValidate = false;
        toast.warn("your token is expire! Please login again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return state;
    },
    updateUser: (state, actions) => {
      console.log("hello user redux", actions.payload);
      const user = actions.payload;
      localStorage.setItem("user", JSON.stringify(user));
      return state;
    },
  },
});

export const taskApi = createApi({
  reducerPath: "taskapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shrouded-reaches-11492.herokuapp.com/",
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
          url: "/register",
          body: body,
          method: "POST",
        };
      },
    }),
    loginUser: builder.mutation({
      query: (body) => {
        // console.log("login user body", body);
        return {
          url: "/login",
          body: body,
          method: "POST",
        };
      },
    }),
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),
    createOffer: builder.mutation({
      query: (body) => {
        console.log("add user body", body);
        return {
          url: "/addProduct",
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
  useGetAllUsersQuery,
} = taskApi;

export const { getCurrentUser, updateUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
export const { allUsers } = userSlice.actions;
export const usersSlice = userSlice.reducer;
