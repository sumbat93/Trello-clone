import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://1c0ebc90c5f8c30e.mokky.dev",
  timeout: 8000,
  headers: { Accept: "application/json" },
});
