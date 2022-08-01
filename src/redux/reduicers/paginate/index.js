import { createSlice } from "@reduxjs/toolkit";

export const paginateSlice = createSlice({
  name: "paginate",
  initialState: {
    paginatedData: [],
  },
  reducers: {
    paginate: (state, action) => {
      state.paginatedData = action.payload;
    },
  },
});

export const { paginate } = paginateSlice.actions;
export default paginateSlice.reducer;
