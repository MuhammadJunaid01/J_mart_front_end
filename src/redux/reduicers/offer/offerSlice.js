import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { timerHelper } from "../../helper/timerHelper";
export const offerSlice = createSlice({
  name: "offerSlice",
  initialState: {
    days: 0,
    hours: 0,
    minutes: 0,
    secounds: 0,
  },

  reducers: {
    offerTime: (state, action) => {
      // if (action.payload === undefined) {
      //   return;
      // }
      // console.log("act", action.payload);
      // const data = action.payload;
      // data.forEach((element) => {
      //   const res = timerHelper(element.expireDate);
      //   console.log("result");
      // });
      // const dest = new Date("july 20, 2022 10:00:00").getTime();
      // const test = new Date(Number(action?.payload)).getTime();
      // console.log("timer helper result", res);
    },
  },
});
export const offerApi = createApi({
  reducerPath: "offerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getAllOffer: builder.query({
      query: () => "offer",
    }),
  }),
});
export const { offerTime } = offerSlice.actions;
export default offerSlice.reducer;
export const { useGetAllOfferQuery } = offerApi;
