import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { ModalProvider } from "./context/ModalContext.jsx";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ModalProvider>
  </StrictMode>
);
