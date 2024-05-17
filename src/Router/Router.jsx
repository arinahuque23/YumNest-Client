// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MainLayout from "./MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Component/Login/Login";
import Registration from "../Component/Registration/Registration";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default Router;
