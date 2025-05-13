import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Layout } from "./layout";

export const AdminLayout = () => {
  return (
    <div>
      <Layout />
    </div>
  );
};
