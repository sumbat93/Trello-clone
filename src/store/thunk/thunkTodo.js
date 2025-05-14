import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosInstance } from "../../api/axiosInstance";

export const getTodo = createAsyncThunk(
  "todo/getTodo",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/todos");
      toast.success("Данные успешно получены");
      return data;
    } catch (error) {
      return rejectWithValue(toast.error("Не удалось получить данные!"));
    }
  }
);

export const postTodo = createAsyncThunk(
  "todo/postTodo",
  async ({ title }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.post("/todos", {
        title,
        description: [],
      });
      dispatch(getTodo());
      toast.success("Список добавлен");
      return response.data;
    } catch (error) {
      return rejectWithValue(toast.error("Ошибка при добавлении списка"));
    }
  }
);

export const addDescriptionToTodo = createAsyncThunk(
  "todo/addDescriptionToTodo",
  async ({ todoId, description }, { rejectWithValue, dispatch, getState }) => {
    try {
      const todo = getState().todo.todos.find((t) => t.id === todoId);

      if (!todo) {
        return rejectWithValue(toast.error("Список жок"));
      }

      const updatedDescription = [
        ...(todo.description || []),
        { id: Date.now(), description },
      ];

      await axiosInstance.patch(`/todos/${todoId}`, {
        description: updatedDescription,
        title: todo.title,
      });

      dispatch(getTodo());
      toast.success("Карточка кошулду");
    } catch (error) {
      return rejectWithValue(toast.error("Ошибка чыкты , изде бол"));
    }
  }
);

export const deleteTitle = createAsyncThunk(
  "todo/deleteTitle",
  async (todoId, { rejectWithValue, dispatch, getState }) => {
    try {
      const todo = getState().todo.todos.find((t) => t.id === todoId);

      if (!todo) {
        return rejectWithValue(toast.error("Задача жокко"));
      }

      await axiosInstance.patch(`/todos/${todoId}`, {
        title: "",
        description: todo.description,
      });

      dispatch(getTodo());
      toast.success("Заголовок удален");
    } catch (error) {
      return rejectWithValue(toast.error("Ошибка при удалении заголовка"));
    }
  }
);

export const deleteDescription = createAsyncThunk(
  "todo/deleteDescription",
  async (
    { todoId, descriptionId },
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      const todo = getState().todo.todos.find((t) => t.id === todoId);

      if (!todo) {
        return rejectWithValue(toast.error("Задача не найдена"));
      }

      const updatedDescription = todo.description.filter(
        (desc) => desc.id !== descriptionId
      );

      await axiosInstance.patch(`/todos/${todoId}`, {
        description: updatedDescription,
        title: todo.title,
      });

      dispatch(getTodo());
      toast.success("Описание удалено");
    } catch (error) {
      return rejectWithValue(toast.error("Ошибка при удалении описания"));
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, updatedData }, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.patch(`/todos/${id}`, updatedData);
      dispatch(getTodo());
      toast.success("Задача обновлена");
    } catch (error) {
      return rejectWithValue(toast.error("Ошибка при обновлении задачи"));
    }
  }
);
