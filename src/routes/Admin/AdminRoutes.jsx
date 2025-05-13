import React from "react";
import { Navigate } from "react-router-dom";
import { Layout } from "../../layout/layout";

export const AdminRoutes = () => {
  return [
    {
      path: "/admin",
      element: <Navigate to={"/admin"} />,
    },
    {
      path: "/admin/layout",
      element: <Layout />,
    },
  ];
};
