import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./userActions";

const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

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
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
