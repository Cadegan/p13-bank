import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails, userLogin } from "./userActions";

// const token = localStorage.getItem("token")
//   ? localStorage.getItem("token")
//   : sessionStorage.getItem("token");

const initialState = {
  token: null,
  loading: false,
  userData: null,
  status: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeToken: (state) => {
      localStorage.removeItem("token"); // delete token from storage
      // localStorage.clear();
      localStorage.setItem("rememberMe", false);
      state.loading = false;
      state.userData = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, action) => {
      const { body, status } = action.payload;
      state.loading = false;
      state.status = action.payload ? status : 400;
      state.token = body.token;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    //get user details
    [getUserDetails.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserDetails.fulfilled]: (state, action) => {
      const { accessToken, body } = action.payload;
      state.loading = false;
      // state.userData = payload;
      state.userData = body;
      state.token = accessToken;
    },
    [getUserDetails.rejected]: (state, action) => {
      state.loading = false;
      state.userData = {};
      state.token = null;
    },
  },
});

export const { removeToken } = userSlice.actions;
export default userSlice.reducer;
