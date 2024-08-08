import { createBrowserRouter, Navigate } from "react-router-dom";
import { adminPaths, authPaths } from "./paths";
import App from "@/App";
import AdminLayout from "@/pages/admin/Layout/Layout";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Register from "@/pages/auth/Register.tsx/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword/ForgotPassword";
import ResetPassword from "@/pages/auth/ForgotPassword/ResetPassword";
import Shops from "@/pages/admin/Shops/Shops";
import Stores from "@/pages/admin/Stores/Stores";
import Products from "@/pages/admin/Products/Products";
import ProductOutOfStock from "@/pages/admin/Products/ProductOutOfStock";
import EditCategory from "@/pages/admin/Categories/EditCategory";
import AddCategory from "@/pages/admin/Categories/AddCategory";
import Categories from "@/pages/admin/Categories/Categories";
import Inventory from "@/pages/admin/Inventory/Inventory";
import Manufacturers from "@/pages/admin/Manufacturers/Manufacturers";
import AddManufacturer from "@/pages/admin/Manufacturers/AddManufacturer";
import EditManufacturer from "@/pages/admin/Manufacturers/EditManufacturer";
import CreateShop from "@/pages/admin/Shops/CreateShop";
import AddProduct from "@/pages/admin/Products/AddProduct";
import Shippings from "@/pages/admin/Shipping/Shippings";
import AddShippingPrice from "@/pages/admin/Shipping/AddShippingPrice";
import Refunds from "@/pages/admin/Refunds/Refunds";
import AddNewRefundReason from "@/pages/admin/Refunds/AddNewRefundReason";
import Orders from "@/pages/admin/Orders/Orders";
import DetailOrder from "@/pages/admin/Orders/DetailOrder";
import Transactions from "@/pages/admin/Transactions/Transactions";
import AdminsList from "@/pages/admin/Admins/AdminsList";
import Customers from "@/pages/admin/Customers/Customers";
import ViewTemplate from "@/pages/admin/View/ViewTemplate";
import Faq from "@/pages/admin/Faq/Faq";
import AddDiscountCoupon from "@/pages/admin/Discount/AddDiscountCoupon";
import Chat from "@/pages/admin/Chat/Chat";
import Terme from "@/pages/admin/Conditions.tsx/Terme";
import Discounts from "@/pages/admin/Discount/Discount";
import Reviews from "@/pages/admin/Reviews/Reviews";
import Settings from "@/pages/admin/Settings/Settings";

export const adminRoutes = [
  {
    path: "/admin",
    element: <Navigate to={adminPaths.dashboard} />,
  },
  {
    path: adminPaths.dashboard,
    element: <Dashboard />,
  },
  {
    path: adminPaths.boutique,
    element: <Shops />,
  },
  {
    path: adminPaths.createBoutique,
    element: <CreateShop />,
  },
  {
    path: adminPaths.store,
    element: <Stores />,
  },
  {
    path: adminPaths.products,
    element: <Products />,
  },
  {
    path: adminPaths.addProduct,
    element: <AddProduct />,
  },
  {
    path: adminPaths.productOutOfStock,
    element: <ProductOutOfStock />,
  },
  {
    path: adminPaths.inventory,
    element: <Inventory />,
  },
  {
    path: adminPaths.categories,
    element: <Categories />,
  },
  {
    path: adminPaths.addCategory,
    element: <AddCategory />,
  },
  {
    path: adminPaths.editCategory,
    element: <EditCategory />,
  },
  {
    path: adminPaths.manufacturers,
    element: <Manufacturers />,
  },
  {
    path: adminPaths.addManufacturer,
    element: <AddManufacturer />,
  },
  {
    path: adminPaths.editManufacturer,
    element: <EditManufacturer />,
  },
  {
    path: adminPaths.shipping,
    element: <Shippings />,
  },
  {
    path: adminPaths.addShippingPrice,
    element: <AddShippingPrice />,
  },
  {
    path: adminPaths.refunds,
    element: <Refunds />,
  },
  {
    path: adminPaths.addRefund,
    element: <AddNewRefundReason />,
  },
  {
    path: adminPaths.orders,
    element: <Orders />,
  },
  {
    path: adminPaths.detailOrder,
    element: <DetailOrder />,
  },
  {
    path: adminPaths.transactions,
    element: <Transactions />,
  },
  {
    path: adminPaths.admins,
    element: <AdminsList />,
  },
  {
    path: adminPaths.customers,
    element: <Customers />,
  },
  {
    path: adminPaths.group,
    element: <ViewTemplate />,
  },
  {
    path: adminPaths.faq,
    element: <Faq />,
  },
  {
    path: adminPaths.conditions,
    element: <Terme />,
  },
  {
    path: adminPaths.discounts,
    element: <Discounts />,
  },
  {
    path: adminPaths.addDiscount,
    element: <AddDiscountCoupon />,
  },
  {
    path: adminPaths.chat,
    element: <Chat />,
  },
  {
    path: adminPaths.reviews,
    element: <Reviews />,
  },
  {
    path: adminPaths.settings,
    element: <Settings />,
  },
];

export const manufactureRoutes = [
  {
    path: "/fabricant",
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
