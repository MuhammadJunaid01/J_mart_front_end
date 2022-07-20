import { createSlice, current } from "@reduxjs/toolkit";

export const trackerSlice = createSlice({
  name: "tracker",
  initialState: JSON.parse(localStorage.getItem("trackingDataStore")) || {
    trackingData: [],
  },
  reducers: {
    traking: (state, action) => {
      const currentState = current(state);
      const check = state.trackingData.find((item) => {
        return item._id === action.payload._id;
      });
      if (check) {
        return state;
      } else {
        state?.trackingData?.push(action.payload);
        localStorage.setItem("trackingDataStore", JSON.stringify(state));
      }
      //   currentState.trackingData.push(action.payload);
    },
    getTrackerData: (state) => {},
  },
});
export const { traking, getTrackerData } = trackerSlice.actions;
export default trackerSlice.reducer;
