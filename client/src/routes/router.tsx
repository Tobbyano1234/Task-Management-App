import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { Login } from "../pages/Login";
import UserRegistrationForm from "../pages/Registration";

export const router = createBrowserRouter([
  // { path: "/resetpassword", element: <UserRegistrationForm /> },
  // { path: "/fogotpassword", element: <UserRegistrationForm /> },
  { path: "/registration", element: <UserRegistrationForm /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
]);
