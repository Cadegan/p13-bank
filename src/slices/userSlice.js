import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails, userLogin } from "./userActions";

const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : sessionStorage.getItem("token");

const initialState = {
  userToken,
  loading: false,
  userData: null,
  status: null,
};

const userSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token"); // delete token from storage
      state.loading = false;
      state.userData = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userData = payload;
      state.userToken = payload.userToken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    //get user details
    [getUserDetails.pending]: (state) => {
      state.loading = true;
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userData = payload;
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
