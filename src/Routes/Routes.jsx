import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Signup from "../Pages/Signup";

 export const router = createBrowserRouter([
    {
      path: "/",
      Component: Mainlayout,
      children:[
        { index: true, Component: Home },
        { path: "login", Component: Login },
        { path: "register", Component: Register },
        { path: "signup", Component: Signup },
      ]
    },
  ]);