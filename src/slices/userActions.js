import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, setToken } from "../utils/functions";

// v4
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password },
        config
      );

      // store user's token in local storage
      setToken(response.data.body.token);

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
  "auth/fetchUserData",
  async (arg, { rejectWithValue }) => {
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
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
