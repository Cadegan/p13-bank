import { configureStore } from "@reduxjs/toolkit";
import authorization from "../slices/userSlice";

const store = configureStore({
  reducer: {
    authorization: authorization,
  },
});

export default store;
