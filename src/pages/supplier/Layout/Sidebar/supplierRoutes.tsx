import { supplierPaths } from "@/routes/paths";
import { BsGrid } from "react-icons/bs";
import {
  IconCartCheck,
  IconExchange,
  IconGridPlus,
  IconHandHolding,
  IconProduct,
} from "@/components/common/Icons";
import { FiGift, FiSettings, FiUsers } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { HiOutlineStar } from "react-icons/hi";

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
      {
        label: "Catégories",
        icon: <IconGridPlus />,
        path: supplierPaths.categories,
      },
    ],
  },
  {
    category: "GESTION DES COMMANDES",
    items: [
      {
        label: "Remboursements",
        icon: <IconHandHolding />,
        path: supplierPaths.refunds,
      },
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
    category: "GESTION DES UTILISATEURS",
    items: [
      {
        label: "Clients",
        icon: <FiUsers fontSize={22} />,
        path: supplierPaths.customers,
      },
    ],
  },
  {
    category: "GESTION PROMOTIONNELLE",
    items: [
      {
        label: "Bons de réduction",
        icon: <FiGift fontSize={22} />,
        path: supplierPaths.discounts,
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
      {
        label: "Avis de magasin",
        icon: <HiOutlineStar fontSize={24} />,
        path: supplierPaths.reviews,
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
