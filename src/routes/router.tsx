import { createBrowserRouter } from "react-router-dom";
import { adminPaths } from "./paths";
import App from "@/App";
import AdminLayout from "@/pages/admin/Layout/Layout";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";

export const adminRoutes = [
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
    path: "admin",
    element: <AdminLayout />,
    children: adminRoutes,
  },
]);
