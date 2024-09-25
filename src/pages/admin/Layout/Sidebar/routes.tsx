import { adminPaths } from "@/routes/paths";
import { BsGrid } from "react-icons/bs";
import { MdOutlineStorefront } from "react-icons/md";
import {
	IconBuilding,
	IconCartCheck,
	IconExchange,
	// IconFaq,
	IconGridPlus,
	IconHandHolding,
	IconProduct,
} from "@/components/common/Icons";
import { FiSettings, FiTruck, FiUser, FiUsers } from "react-icons/fi";
// import { FaRegEnvelope } from "react-icons/fa6";
// import { HiOutlineStar } from "react-icons/hi";
// import { IoDocumentTextOutline } from "react-icons/io5";

export const routes = [
	{
		category: "PRINCIPAL",
		items: [
			{
				label: "Tableau de bord",
				icon: <BsGrid fontSize={22} />,
				path: adminPaths.dashboard,
			},
		],
	},
	{
		category: "GESTION BOUTIQUE",
		items: [
			// {
			//   label: "Magasins",
			//   icon: <BiShoppingBag fontSize={22} />,
			//   path: adminPaths.store,
			// },
			{
				label: "Boutiques",
				icon: <MdOutlineStorefront fontSize={22} />,
				path: adminPaths.boutique,
			},
		],
	},
	{
		category: "GESTION PRODUITS",
		items: [
			{
				label: "Produits",
				icon: <IconProduct />,
				path: adminPaths.products,
			},
			// {
			// 	label: "Inventaire",
			// 	icon: <IconBox />,
			// 	path: adminPaths.inventory,
			// },
			{
				label: "Catégories",
				icon: <IconGridPlus />,
				path: adminPaths.categories,
			},
		],
	},
	{
		category: "GESTION DES COMMANDES",
		items: [
			{
				label: "Expéditions",
				icon: <FiTruck fontSize={22} />,
				path: adminPaths.shipping,
			},
			{
				label: "Remboursements",
				icon: <IconHandHolding />,
				path: adminPaths.refunds,
			},
			{
				label: "Commandes",
				icon: <IconCartCheck />,
				path: adminPaths.orders,
			},
			{
				label: "Transactions",
				icon: <IconExchange />,
				path: adminPaths.transactions,
			},
		],
	},
	{
		category: "GESTION DES UTILISATEURS",
		items: [
			{
				label: "Administrateurs",
				icon: <FiUser fontSize={22} />,
				path: adminPaths.admins,
			},
			{
				label: "Fabricants",
				icon: <IconBuilding />,
				path: adminPaths.manufacturers,
			},
			{
				label: "Clients",
				icon: <FiUsers fontSize={22} />,
				path: adminPaths.customers,
			},
		],
	},
	// {
	// 	category: "PERSONNALISATION PAGE",
	// 	items: [
	// 		{
	// 			label: "Pages / Groupes",
	// 			icon: <IconDoc />,
	// 			path: adminPaths.group,
	// 		},
	// 		{
	// 			label: "FAQ",
	// 			icon: <IconFaq />,
	// 			path: adminPaths.faq,
	// 		},
	// 		{
	// 			label: "Termes et conditions",
	// 			icon: <IoDocumentTextOutline />,
	// 			path: adminPaths.conditions,
	// 		},
	// 	],
	// },
	// {
	// 	category: "GESTION PROMOTIONNELLE",
	// 	items: [
	// 		{
	// 			label: "Bons de réduction",
	// 			icon: <FiGift fontSize={22} />,
	// 			path: adminPaths.discounts,
	// 		},
	// 	],
	// },
	// {
	// 	category: "GESTION DES FONCTIONNALITÉS",
	// 	items: [
	// 		{
	// 			label: "Messages",
	// 			icon: <FaRegEnvelope fontSize={22} />,
	// 			path: adminPaths.chat,
	// 		},
	// 		{
	// 			label: "Avis de magasin",
	// 			icon: <HiOutlineStar fontSize={24} />,
	// 			path: adminPaths.reviews,
	// 		},
	// 	],
	// },
	{
		category: "ADMINISTRATION DU SITE",
		items: [
			{
				label: "Paramètres",
				icon: <FiSettings fontSize={22} />,
				path: adminPaths.settings,
			},
		],
	},
];
