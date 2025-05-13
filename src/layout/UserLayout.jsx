import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Layout } from "./layout";

export const UserLayout = () => {
  return (
    <div>
      <Layout />
    </div>
  );
};
