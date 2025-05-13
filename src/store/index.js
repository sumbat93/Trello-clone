import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "./Slice/todoSlice";
import { authSlice } from "./Slice/authSlice";

export const store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
});
