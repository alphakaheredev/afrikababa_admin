import { createBrowserRouter, Navigate } from "react-router-dom";
import { adminPaths, authPaths, supplierPaths } from "./paths";
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
import AddProduct from "@/pages/admin/Products/AddProduct";
import Shippings from "@/pages/admin/Shipping/Shippings";
import AddShippingPrice from "@/pages/admin/Shipping/AddShippingPrice";
import Refunds from "@/pages/admin/Refunds/Refunds";
import AddNewRefundReason from "@/pages/admin/Refunds/AddNewRefundReason";
import Orders from "@/pages/admin/Orders/Orders";
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
import SupplierLayout from "@/pages/supplier/Layout/Layout";
import SupplierDashboard from "@/pages/supplier/Dashboard/SupplierDashboard";
import SettingsSupplier from "@/pages/supplier/Settings/SettingsSupplier";
import { ProtectedRoute, RedirectAuthRoute } from "./routerUtils";
import Profil from "@/pages/admin/Profil/Profil";
import ShippingCosts from "@/pages/admin/Shipping/ShippingCosts";
import ConditionForm from "@/pages/admin/Settings/TabsContent/Condition/ConditionForm";
import DetailProduct from "@/pages/admin/Products/DetailProduct";
import ShopDetail from "@/pages/admin/Shops/ShopDetail";
import WindrawRequest from "@/pages/admin/Windraw/WindrawRequest";
import OrderDetail from "@/pages/admin/Orders/OrderDetail";
import DetailOrder from "@/pages/admin/Orders/DetailOrder";
import CreateShop from "@/pages/supplier/shop/CreateShop";

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
		path: adminPaths.shippingCosts,
		element: <ShippingCosts />,
	},
	{
		path: adminPaths.addShippingCost,
		element: <AddShippingPrice />,
	},
	{
		path: adminPaths.editShippingCost,
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
		element: <OrderDetail />,
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
	{
		path: adminPaths.profil,
		element: <Profil />,
	},
	{
		path: adminPaths.addCondition,
		element: <ConditionForm />,
	},
	{
		path: adminPaths.editCondition,
		element: <ConditionForm />,
	},
	{
		path: adminPaths.productDetail,
		element: <DetailProduct />,
	},
	{
		path: adminPaths.shopDetail,
		element: <ShopDetail />,
	},
	{
		path: adminPaths.detailOrder,
		element: <OrderDetail />,
	},
	{
		path: adminPaths.withdrawRequests,
		element: <WindrawRequest />,
	},
];

export const supplierRoutes = [
	{
		path: "/fournisseur",
		element: <Navigate to={supplierPaths.dashboard} />,
	},
	{
		path: supplierPaths.dashboard,
		element: <SupplierDashboard />,
	},
	{
		path: supplierPaths.createBoutique,
		element: <CreateShop />,
	},
	{
		path: supplierPaths.products,
		element: <Products />,
	},
	{
		path: supplierPaths.addProduct,
		element: <AddProduct />,
	},
	{
		path: supplierPaths.productOutOfStock,
		element: <ProductOutOfStock />,
	},
	{
		path: supplierPaths.categories,
		element: <Categories />,
	},
	{
		path: supplierPaths.addCategory,
		element: <AddCategory />,
	},
	{
		path: supplierPaths.editCategory,
		element: <EditCategory />,
	},
	{
		path: supplierPaths.refunds,
		element: <Refunds />,
	},
	{
		path: supplierPaths.orders,
		element: <Orders />,
	},
	{
		path: supplierPaths.detailOrder,
		element: <DetailOrder />,
	},
	{
		path: supplierPaths.transactions,
		element: <Transactions />,
	},
	{
		path: supplierPaths.customers,
		element: <Customers />,
	},
	{
		path: supplierPaths.discounts,
		element: <Discounts />,
	},
	{
		path: supplierPaths.addDiscount,
		element: <AddDiscountCoupon />,
	},
	{
		path: supplierPaths.chat,
		element: <Chat />,
	},
	{
		path: supplierPaths.reviews,
		element: <Reviews />,
	},
	{
		path: supplierPaths.settings,
		element: <SettingsSupplier />,
	},
];

export const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<RedirectAuthRoute>
				<App />
			</RedirectAuthRoute>
		),
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
		element: (
			<ProtectedRoute>
				<AdminLayout />
			</ProtectedRoute>
		),
		children: adminRoutes,
	},
	{
		path: "fournisseur",
		element: (
			<ProtectedRoute>
				<SupplierLayout />
			</ProtectedRoute>
		),
		children: supplierRoutes,
	},
]);
