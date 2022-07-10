import { createSlice, current } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    openCategory: false,
  },
  reducers: {
    category: (state) => {
      state.openCategory = !state.openCategory;
    },
  },
});
export const { category } = categorySlice.actions;
export default categorySlice.reducer;
