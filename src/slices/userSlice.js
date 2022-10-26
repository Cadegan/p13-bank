import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails, userLogin } from "./userActions";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : sessionStorage.getItem("token");

const initialState = {
  token,
  loading: false,
  userData: null,
  status: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
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
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userData = payload;
      state.token = payload.token;
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
      // state.userData = payload;
      state.userData = payload.userData;
      state.token = payload.token;
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

//     //get user details
//     [getUserDetails.pending]: (state) => {
//       state.loading = true;
//     },
//     [getUserDetails.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       // state.userData = payload;
//       state.userData = payload.userData;
//       state.token = payload.token;
//     },
//     [getUserDetails.rejected]: (state, { payload }) => {
//       state.loading = false;
//     },
//   },
// });

// export const { logout } = userSlice.actions;
// export default userSlice.reducer;
