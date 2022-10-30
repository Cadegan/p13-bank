import { configureStore } from "@reduxjs/toolkit";
import authorization from "../slices/userSlice";

/* Creating a store with the reducer. */
const store = configureStore({
  reducer: {
    auth: authorization,
  },
});

export default store;
