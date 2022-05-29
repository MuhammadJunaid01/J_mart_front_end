import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: "",
};
export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ name, email, password }, thunkApi) => {
    try {
      const response = await axios.post("http://localhost:5000/", {
        name,
        email,
        password,
      });
      let data = await response.json();
      console.log("data", data);
    } catch (error) {}
  }
);
export const userSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    email: "",
    password: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.email;
      state.username = payload.name;
      state.password = payload.password;
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
  },
});
export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;
