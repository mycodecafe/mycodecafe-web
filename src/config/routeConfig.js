import React from "react";
import Home from '../pages/Home'
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import NotFound from "../pages/NotFound";


export const routes = [
    { path: '/', element: <Home />, isPublic: true },
    { path: '/signup', element: <Signup />, isPublic: true },
    { path: '/login', element: <Login />, isPublic: true },
    { path: '*', element: <NotFound /> },
  ];
  