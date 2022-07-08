import { createSlice, current } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    openDrawerBox: false,
  },
  reducers: {
    openDrawer: (state) => {
      const currentState = current(state);
      state.openDrawerBox = !state.openDrawerBox;
    },
  },
});

export const { openDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
