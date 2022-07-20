import { createSlice, current } from "@reduxjs/toolkit";

export const trackerSlice = createSlice({
  name: "tracker",
  initialState: JSON.parse(localStorage.getItem("trackingDataStore")) || {
    trackingData: [],
  },
  reducers: {
    traking: (state, action) => {
      const currentState = current(state);
      console.log("tracking data", action.payload);
      const check = state.trackingData.find((item) => {
        return item.id === action.payload.id;
      });
      if (check) {
        return state;
      } else {
        state?.trackingData?.push(action.payload);
        localStorage.setItem("trackingDataStore", JSON.stringify(state));
      }
      console.log("state before", currentState);
      //   currentState.trackingData.push(action.payload);
    },
    getTrackerData: (state) => {},
  },
});
export const { traking, getTrackerData } = trackerSlice.actions;
export default trackerSlice.reducer;
