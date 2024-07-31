import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Homepage } from "./routes/homepage/Homepage.jsx";
import { Dashboard } from "./routes/dashboardPage/Dashboard.jsx";
import { Chatpage } from "./routes/chatpage/Chatpage.jsx";
import { RootLayout } from "./layouts/rootLayout/RootLayout.jsx";
import { DashboardLayout } from "./layouts/dashboardLayout/DashboardLayout.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chatpage />,
          },
        ],
      },
    ],
  },

  // {
  //   path: "/",
  //   element: <Homepage />,
  // },
  // {
  //   path: "/dashboard",
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <Dashboard />,
  //     },
  //     {
  //       path: "/dashboard/chats/:id",
  //       element: <Chatpage />,
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
