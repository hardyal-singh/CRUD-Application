import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import todoSlice from "./todoSlice";

export const Store = configureStore({
  reducer: { user: userSlice, todo: todoSlice },
});
