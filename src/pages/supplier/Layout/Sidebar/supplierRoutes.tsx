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
				label: "Tableau de bord",
				icon: <BsGrid fontSize={22} />,
				path: supplierPaths.dashboard,
			},
		],
	},
	{
		category: "GESTION PRODUITS",
		items: [
			{
				label: "Produits",
				icon: <IconProduct />,
				path: supplierPaths.products,
			},
		],
	},
	{
		category: "GESTION DES COMMANDES",
		items: [
			{
				label: "Commandes",
				icon: <IconCartCheck />,
				path: supplierPaths.orders,
			},
			{
				label: "Transactions",
				icon: <IconExchange />,
				path: supplierPaths.transactions,
			},
		],
	},
	{
		category: "GESTION DES FONCTIONNALITÉS",
		items: [
			{
				label: "Messages",
				icon: <FaRegEnvelope fontSize={22} />,
				path: supplierPaths.chat,
			},
		],
	},
	{
		category: "ADMINISTRATION DU SITE",
		items: [
			{
				label: "Paramètres",
				icon: <FiSettings fontSize={22} />,
				path: supplierPaths.settings,
			},
		],
	},
];
