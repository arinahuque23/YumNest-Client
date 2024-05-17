// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MainLayout from "./MainLayout";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
            {
              path: "/",
              errorElement:<ErrorPage></ErrorPage>,
              element: <MainLayout></MainLayout>,
              children: [{
                        path: "/",
                        element : <Home></Home>,
              }]
            },
          ]);

export default Router;