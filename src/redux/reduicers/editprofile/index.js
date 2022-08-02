import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../../api/api";

export const editProfilApi = createApi({
  reducerPath: "editProfileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api,
  }),
  endpoints: (builder) => ({
    editProfile: builder.mutation({
      query: (body) => {
        console.log("object", body);
        return {
          url: "/edit",
          method: "POST",
          body: body,
        };
      },
    }),
  }),
});

export const { useEditProfileMutation } = editProfilApi;
