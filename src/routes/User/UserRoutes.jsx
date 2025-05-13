import React from "react";
import { Navigate } from "react-router-dom";
import { Layout } from "../../layout/layout";

export const UserRoutes = () => {
  return [
    {
      path: "/user",
      element: <Navigate to={"/user"} />,
    },
    {
      path: "/user/layout",
      element: <Layout />,
    },
  ];
};
