import { createSlice } from "@reduxjs/toolkit";
import {
  deleteDescription,
  deleteTitle,
  getTodo,
  postTodo,
  updateTodo,
} from "../thunk/thunkTodo";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    info: {},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = "";
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(postTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(postTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTitle.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTitle.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(deleteTitle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteDescription.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteDescription.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(deleteDescription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTodo.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
