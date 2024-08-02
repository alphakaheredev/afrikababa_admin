import { ButtonDelete, ButtonEdit } from "@/components/ui/button";
import Table, { Column } from "@/components/ui/Table";
import noImg from "@/assets/images/admin/no-image.png";
import icon from "@/assets/images/admin/diamond.png";

interface Category {
  id: number;
  productName: string;
  icon: string;
  group: string;
}

const categoriesData: Category[] = [
  {
    id: 1001,
    productName: "Montre-bracelet de luxe de qualité supérieure",
    icon: "/path/to/icon1.jpg",
    group: "Montre pour homme",
  },
  {
    id: 1002,
    productName: "Foulard bandana personnalisé à faible quantité",
    icon: "/path/to/icon2.jpg",
    group: "Écharpe pour femme",
  },
  {
    id: 1003,
    productName: "Écharpe arabe en coton Shemagh Desert",
    icon: "/path/to/icon3.jpg",
    group: "Écharpe pour femme",
  },
  {
    id: 1004,
    productName: "Écharpe Keffieh Palestine Arafat Carré Coton",
    icon: "/path/to/icon4.jpg",
    group: "Écharpe pour femme",
  },
  {
    id: 1005,
    productName: "Montre intelligente IOS Android Hommes",
    icon: "/path/to/icon5.jpg",
    group: "Montre pour homme",
  },
  {
    id: 1006,
    productName: "Montre intelligente ZL02 de style de vie simple",
    icon: "/path/to/icon6.jpg",
    group: "Montre pour homme",
  },
  {
    id: 1007,
    productName: "Vente chaude hiver Moyen-Orient armé 100% coton",
    icon: "/path/to/icon7.jpg",
    group: "Bijoux, lunettes et montres",
  },
  {
    id: 1008,
    productName: "MS-2092 2024 Écharpe Malaisie Femmes Musulmanes Jersey",
    icon: "/path/to/icon8.jpg",
    group: "Bijoux, lunettes et montres",
  },
  {
    id: 1009,
    productName: "Bonnet rond Foulards musulmans Accessoire",
    icon: "/path/to/icon9.jpg",
    group: "Bijoux, lunettes et montres",
  },
  {
    id: 1010,
    productName: "Couleurs Fabriqué Hommes Shemagh Écharpe Arabe",
    icon: "/path/to/icon10.jpg",
    group: "Bijoux, lunettes et montres",
  },
  {
    id: 1011,
    productName:
      "Vente en gros 45*155 polyester coton lin voile filles fantaisie",
    icon: "/path/to/icon11.jpg",
    group: "Bijoux, lunettes et montres",
  },
  {
    id: 1012,
    productName: "Bagues rondes épaisses en acier inoxydable plaqué or",
    icon: "/path/to/icon12.jpg",
    group: "Bijoux, lunettes et montres",
  },
];

const CategoriesTable = () => {
  const iconFormatter = () => (
    <img src={icon} alt="Icon" className="w-6 h-6 object-cover rounded" />
  );

  const categoryNameFormatter = () => (
    <div className="flex items-center gap-2">
      <img src={noImg} alt="Product" className="object-contain rounded" />
      <span>Montre pour homme</span>
    </div>
  );

  const actionFormatter = () => (
    <div className="flex space-x-2">
      <ButtonEdit />
      <ButtonDelete />
    </div>
  );

  const columns: Column<Category>[] = [
    {
      header: "Identifiant",
      name: "id",
      formatter: (value: number) => `#ID-${value}`,
    },
    {
      header: "Produits",
      name: "productName",
      formatter: categoryNameFormatter,
    },
    { header: "Icône", name: "icon", formatter: iconFormatter },
    { header: "Groupe", name: "group" },
    { header: "Action", name: "id", formatter: actionFormatter },
  ];

  return <Table<Category> data={categoriesData} columns={columns} />;
};

export default CategoriesTable;
