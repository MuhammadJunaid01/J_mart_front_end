import { createSlice, current } from "@reduxjs/toolkit";

export const quickVeiwSlice = createSlice({
  name: "quickVeiw",
  initialState: {
    quickVeiw: false,
    product: undefined,
  },
  reducers: {
    quickVeiw: (state, action) => {
      const currentState = current(state);
      state.quickVeiw = !state.quickVeiw;
      state.product = action.payload;
    },
  },
});

export const { quickVeiw } = quickVeiwSlice.actions;
export default quickVeiwSlice.reducer;
