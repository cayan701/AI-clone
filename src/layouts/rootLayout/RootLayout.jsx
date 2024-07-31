import React from "react";
import "./rootLayout.css";

import { Link, Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>StarkGPT</span>
        </Link>
        <div className="user">USER</div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
