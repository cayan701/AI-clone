import React from "react";
import "./dashboardLayout.css";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div>
      <div className="menu">MENU</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
