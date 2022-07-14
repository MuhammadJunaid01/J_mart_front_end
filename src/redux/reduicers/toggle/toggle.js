import { createSlice, current } from "@reduxjs/toolkit";

export const timeOutofferDataSlice = createSlice({
  name: "drawer",
  initialState: {
    timeOut: false,
  },
  reducers: {
    timeOutOffer: (state) => {
      const currentState = current(state);
      currentState.timeOut = false;
    },
  },
});

export const { timeOutOffer } = timeOutofferDataSlice.actions;
export default timeOutofferDataSlice.reducer;
