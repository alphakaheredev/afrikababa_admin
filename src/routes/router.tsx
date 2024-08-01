import { createBrowserRouter, Navigate } from "react-router-dom";
import { adminPaths, authPaths } from "./paths";
import App from "@/App";
import AdminLayout from "@/pages/admin/Layout/Layout";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Register from "@/pages/auth/Register.tsx/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword/ForgotPassword";
import ResetPassword from "@/pages/auth/ForgotPassword/ResetPassword";

export const adminRoutes = [
  {
    path: "/admin",
    element: <Navigate to={adminPaths.dashboard} />,
  },
  {
    path: adminPaths.dashboard,
    element: <Dashboard />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: authPaths.register,
    element: <Register />,
  },
  {
    path: authPaths.forgotPassword,
    element: <ForgotPassword />,
  },
  {
    path: authPaths.resetPassword,
    element: <ResetPassword />,
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: adminRoutes,
  },
]);
