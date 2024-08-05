import { ButtonDelete, ButtonEdit } from "@/components/ui/button";
import Table, { Column } from "@/components/ui/Table";

interface ShippingMethod {
  id: string;
  name: string;
  price: string;
  global: boolean;
  priceType: string;
}

const shippingData: ShippingMethod[] = [
  {
    id: "01",
    name: "Happy livraison",
    price: "150.000F",
    global: true,
    priceType: "Fixe",
  },
];

const ShippingTable = () => {
  const globalFormatter = (global: boolean) => (global ? "Oui" : "Non");

  const actionFormatter = () => (
    <div className="flex space-x-2">
      <ButtonEdit />
      <ButtonDelete />
    </div>
  );

  const columns: Column<ShippingMethod>[] = [
    {
      header: "Identifiant",
      name: "id",
      formatter: (value: string) => `#ID: ${value}`,
    },
    { header: "Nom", name: "name" },
    { header: "Prix", name: "price" },
    { header: "Mondial", name: "global", formatter: globalFormatter },
    { header: "Type de prix", name: "priceType" },
    { header: "Action", name: "id", formatter: actionFormatter },
  ];

  return <Table<ShippingMethod> data={shippingData} columns={columns} />;
};

export default ShippingTable;
