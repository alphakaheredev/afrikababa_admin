import { Badge } from "@/components/ui/badge";
import Table, { Column } from "@/components/ui/Table";
import productImg from "@/assets/images/admin/computer.png";
import { ButtonDelete, ButtonEdit } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  stockStatus: string;
  shop: string;
  type: string;
}

const products: Product[] = [
  {
    id: 101,
    name: "Laptop",
    category: "Electronics",
    price: "1500F",
    stockStatus: "In Stock",
    shop: "TechShop",
    type: "Hybride",
  },
  {
    id: 102,
    name: "Smartphone",
    category: "Mobile",
    price: "800F",
    stockStatus: "Out of Stock",
    shop: "TechShop",
    type: "électrique",
  },
  {
    id: 103,
    name: "Headphones",
    category: "Audio",
    price: "200F",
    stockStatus: "Low Stock",
    shop: "TechShop",
    type: "Hybride",
  },
  {
    id: 104,
    name: "Monitor",
    category: "Electronics",
    price: "300F",
    stockStatus: "Low Stock",
    shop: "TechShop",
    type: "Hybride",
  },
  {
    id: 105,
    name: "Keyboard",
    category: "Accessories",
    price: "100F",
    stockStatus: "Low Stock",
    shop: "Vision XR",
    type: "Hybride",
  },
];

const ProductsTable = () => {
  const stockStatusFormatter = (cell: string) => {
    let colorClass = "";

    switch (cell) {
      case "In Stock":
        colorClass = "bg-th-primary";
        break;
      case "Out of Stock":
        colorClass = "bg-red-500";
        break;
      case "Low Stock":
        colorClass = "bg-[#FB8885]";
        break;
      default:
        colorClass = "bg-dark";
    }

    return <Badge className={colorClass}>{cell}</Badge>;
  };

  const nameProductFormatter = (cell: string) => {
    return (
      <div className="flex items-center gap-2">
        <img src={productImg} alt={cell} className="w-10 object-contain" />
        <span>{cell}</span>
      </div>
    );
  };

  const actionFormatter = () => (
    <div className="flex items-center gap-2">
      <ButtonEdit />
      <ButtonDelete />
    </div>
  );

  const columns: Column<Product>[] = [
    { header: "Identifiant", name: "id" },
    { header: "Produit", name: "name", formatter: nameProductFormatter },
    { header: "Catégories", name: "category" },
    { header: "Boutique", name: "shop" },
    { header: "Type de produits", name: "type" },
    { header: "Prix unitaire", name: "price" },
    {
      header: "Etat de stock",
      name: "stockStatus",
      formatter: stockStatusFormatter,
    },
    { header: "Actions", name: "actions", formatter: actionFormatter },
  ];

  return <Table<Product> data={products} columns={columns} />;
};

export default ProductsTable;
