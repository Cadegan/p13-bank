import axios from "axios";
import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { getToken, setToken } from "../utils/functions";

// v4
export const userLogin = createAsyncThunk("auth/login", async (credentials) => {
  const { email, password } = credentials;
  try {
    const response = await axios({
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      url: "http://localhost:3001/api/v1/user/login",
      data: {
        email: email,
        password: password,
      },
    });
    setToken(response.data.body.token);
    return response.data;
  } catch (err) {
    // removeToken();
    return isRejectedWithValue(400);
  }
});

export const getUserDetails = createAsyncThunk(
  "auth/fetchUserData",
  async () => {
    try {
      const accessToken = getToken();
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/api/v1/user/profile",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return { ...response.data, accessToken };
    } catch (err) {
      // removeToken();
      return isRejectedWithValue(400);
    }
  }
);

export const updateUserData = createAsyncThunk(
  "auth/updateUserData",
  async (identity) => {
    const { firstName, lastName } = identity;
    try {
      const accessToken = getToken();
      const response = await axios({
        method: "put",
        url: "http://localhost:3001/api/v1/user/profile",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          firstName: firstName,
          lastName: lastName,
        },
      });
      return { ...response.data };
    } catch (err) {
      // removeToken();
      return isRejectedWithValue(400);
    }
  }
);

// export const signOut = createAsyncThunk("authorization/signOut", async () => {
//   removeToken();
// });

// // v3
// export const userLogin = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const response = await axios.post(
//         "http://localhost:3001/api/v1/user/login",
//         { email, password },
//         config
//       );
//       setToken(response.data.body.token);
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const getUserDetails = createAsyncThunk(
//   "auth/getUserDetails",
//   async (arg, { getState, rejectWithValue }) => {
//     try {
//       // const { user } = getState();
//       const accessToken = getToken();

//       const config = {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       };
//       const { response } = await axios.get(
//         "http://localhost:3001/api/v1/user/profile",
//         config
//       );
//       return { ...response.data.body, accessToken };
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
