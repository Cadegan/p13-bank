import { configureStore } from "@reduxjs/toolkit";
import authorization from "../slices/userSlice";

const store = configureStore({
  reducer: {
    auth: authorization,
  },
});

export default store;
