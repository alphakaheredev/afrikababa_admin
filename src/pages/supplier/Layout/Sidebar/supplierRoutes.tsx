import { supplierPaths } from "@/routes/paths";
import { BsGrid } from "react-icons/bs";
import {
	IconCartCheck,
	IconExchange,
	IconProduct,
} from "@/components/common/Icons";
import { FiSettings } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";

export const routes = [
	{
		category: "",
		items: [
			{
				label: "Dashboard",
				icon: <BsGrid fontSize={22} />,
				path: supplierPaths.dashboard,
			},
		],
	},
	{
		category: "PRODUCT MANAGEMENT",
		items: [
			{
				label: "Products",
				icon: <IconProduct />,
				path: supplierPaths.products,
			},
		],
	},
	{
		category: "ORDER MANAGEMENT",
		items: [
			{
				label: "Orders",
				icon: <IconCartCheck />,
				path: supplierPaths.orders,
			},
			{
				label: "Withdrawal requests",
				icon: <IconExchange />,
				path: supplierPaths.withdrawalRequests,
			},
		],
	},
	{
		category: "FUNCTIONALITY MANAGEMENT",
		items: [
			{
				label: "Chat",
				icon: <FaRegEnvelope fontSize={22} />,
				path: supplierPaths.chat,
			},
		],
	},
	{
		category: "SITE ADMINISTRATION",
		items: [
			{
				label: "Settings",
				icon: <FiSettings fontSize={22} />,
				path: supplierPaths.settings,
			},
		],
	},
];
