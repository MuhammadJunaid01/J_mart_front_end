import { createSlice, current } from "@reduxjs/toolkit";

export const quickVeiwSlice = createSlice({
  name: "quickVeiw",
  initialState: {
    quickVeiw: false,
  },
  reducers: {
    quickVeiw: (state) => {
      const currentState = current(state);
      state.quickVeiw = !state.quickVeiw;
      console.log("hello quick veiw");
    },
  },
});

export const { quickVeiw } = quickVeiwSlice.actions;
export default quickVeiwSlice.reducer;
