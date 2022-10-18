import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk(
  "authorization/login",
  async (loginInformations) => {
    const { email, password } = loginInformations;
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
      localStorage.setItem("userToken", response.data.body.token);
      return response.data;
    } catch (error) {
      return isRejectedWithValue(400);
    }
  }
);

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