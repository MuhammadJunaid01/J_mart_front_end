import { createSlice, current } from "@reduxjs/toolkit";

export const timeOutofferDataSlice = createSlice({
  name: "drawer",
  initialState: {
    timeOut: false,
    dark: false,
  },
  reducers: {
    timeOutOffer: (state) => {
      const currentState = current(state);
      currentState.timeOut = false;
    },
    dashboardToggle: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { timeOutOffer, dashboardToggle } = timeOutofferDataSlice.actions;
export default timeOutofferDataSlice.reducer;
