import { configureStore } from "@reduxjs/toolkit";

import Posts from "./postSlice";
const store = configureStore({
  reducer: { Posts },
});
export default store;
