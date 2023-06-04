import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/Signup/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from './pages/Profile/Profile'

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/",
        element: <Profile />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
