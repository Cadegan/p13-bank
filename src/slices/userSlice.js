import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails, userLogin, updateUserDetails } from "./userActions";

const initialState = {
  token: null,
  loading: false,
  userData: null,
  success: null,
  error: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeToken: (state) => {
      localStorage.removeItem("token"); // delete token from storage
      localStorage.setItem("rememberMe", false);
      state.loading = false;
      state.userData = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
    },
    [userLogin.fulfilled]: (state, action) => {
      const { body, status } = action.payload;
      state.loading = false;
      state.status = action.payload ? status : 400;
      state.userData = body;
      state.token = body.token;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    //get user details
    [getUserDetails.pending]: (state) => {
      state.loading = true;
    },
    [getUserDetails.fulfilled]: (state, action) => {
      const { accessToken, body } = action.payload;
      state.loading = false;
      state.userData = body;
      state.token = accessToken;
    },
    [getUserDetails.rejected]: (state, action) => {
      state.loading = false;
      state.userData = {};
      state.token = null;
    },
    // Udate user details
    [updateUserDetails.pending]: (state) => {
      state.loading = true;
    },
    [updateUserDetails.fulfilled]: (state, action) => {
      const { body } = action.payload;
      // console.log(action.payload.body);
      state.loading = false;
      state.userData.firstName = body.firstName;
      state.userData.lastName = body.lastName;
    },
  },
});

export const { removeToken } = userSlice.actions;
export default userSlice.reducer;
