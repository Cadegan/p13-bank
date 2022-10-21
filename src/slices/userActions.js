import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// v3
export const userLogin = createAsyncThunk(
  "authorization/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { response } = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password },
        config
      );
      localStorage.setItem("userToken", response.data.body.token);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "authorization/fetchUserData",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(
        "http://localhost:3001/api/v1//user/profile",
        config
      );
      return { data };
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// // v2
// export const userLogin = createAsyncThunk(
//   "authorization/login",
//   async (loginInformations) => {
//     const { email, password } = loginInformations;
//     try {
//       const response = await axios({
//         headers: {
//           "Content-Type": "application/json",
//         },
//         method: "POST",
//         url: "http://localhost:3001/api/v1/user/login",
//         data: {
//           email: email,
//           password: password,
//         },
//       });
//       localStorage.setItem("userToken", response.data.body.token);
//       return response.data;
//     } catch (error) {
//       return isRejectedWithValue(400);
//     }
//   }
// );

// import { createSlice } from "@reduxjs/toolkit";

// const selectUser = (state) => state.freelances;

// const initialState = {
//   status: "void",
//   data: null,
//   error: null,
// };

// export default function fetchOrUpdateUsers()

// import axios from "axios";
// const url = "http://localhost:3001/api/v1/";

// export const userLogin = async (email, password) => {
//   try {
//     const response = await axios.post(url + "user/login", {
//       email,
//       password,
//     });
//     return response.data.body.token;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getUserProfile = async () => {
//   const response = await axios.post(
//     url + "user/profile",
//     {},
//     {
//       headers: { Authorization: "Bearer" + localStorage.getItem("token") },
//     }
//   );
//   return response.data.body;
// };

// export const updateUserProfile = async (firstName, lastName) => {
//   const response = await axios.put(
//     url + "user/profile",
//     {
//       firstName,
//       lastName,
//     },
//     {
//       headers: { Authorization: "Bearer " + localStorage.getItem("token") },
//     }
//   );
//   return response.data.body;
// };

// export const logout = () => {
//   localStorage.removeItem("user/profile");
// };
