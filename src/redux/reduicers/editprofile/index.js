import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userProfileEditApi = createApi({
  reducerPath: "userProfileEditApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
    prepareHeaders: (headers, { getState }) => {
      const { currentUser } = getState();
      if (currentUser) {
        const token = currentUser.user.token;
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    userProfileEdit: builder.mutation({
      query: (body) => {
        console.log("object", body);
        return {
          url: "editProfile",
          method: "PUT",
          body: body,
        };
      },
    }),
  }),
});

export const { useUserProfileEditMutation } = userProfileEditApi;
