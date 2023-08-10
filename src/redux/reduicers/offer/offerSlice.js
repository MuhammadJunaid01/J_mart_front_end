import { createSlice, current } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { timerHelper } from "../../helper/timerHelper";
export const offerSlice = createSlice({
  name: "offerSlice",
  initialState: {
    value: "",
  },

  reducers: {
    dateAndTimePicker: (state, action) => {
      const currentState = current(state);
      state.value = action.payload;
    },
  },
});
export const offerApi = createApi({
  reducerPath: "offerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://j-mart-gt4t.onrender.com",
  }),
  endpoints: (builder) => ({
    getAllOffer: builder.query({
      query: () => "/offer",
    }),
    updateProducts: builder.mutation({
      query: (data) => {
        return {
          url: "/update",
          body: data,
          method: "PUT",
        };
      },
    }),
  }),
});
export const { dateAndTimePicker } = offerSlice.actions;
export default offerSlice.reducer;
export const { useGetAllOfferQuery, useUpdateProductsMutation } = offerApi;
