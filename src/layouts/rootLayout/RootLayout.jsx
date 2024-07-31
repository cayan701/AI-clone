import React from "react";
import "./rootLayout.css";

import { Link, Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src="/logo.png" alt="" />
          <span>StarkGPT</span>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
