import { ButtonDelete, ButtonEdit } from "@/components/ui/button";
import Table, { Column } from "@/components/ui/Table";
import productImg from "@/assets/images/admin/computer.png";

interface InventoryItem {
  id: number;
  productName: string;
  quantity: number;
  quantitySold: number;
  image: string;
}

const inventoryData: InventoryItem[] = [
  {
    id: 1001,
    productName: "Audi",
    quantity: 100,
    quantitySold: 100,
    image: "/path/to/audi.jpg",
  },
  {
    id: 1002,
    productName: "Mercedes",
    quantity: 29,
    quantitySold: 29,
    image: "/path/to/mercedes.jpg",
  },
  {
    id: 1003,
    productName: "Hyundai",
    quantity: 30,
    quantitySold: 30,
    image: "/path/to/hyundai.jpg",
  },
  {
    id: 1004,
    productName: "Moto électrique",
    quantity: 200,
    quantitySold: 200,
    image: "/path/to/electric_bike.jpg",
  },
  {
    id: 1005,
    productName: "Moto",
    quantity: 109,
    quantitySold: 109,
    image: "/path/to/motorbike.jpg",
  },
  {
    id: 1006,
    productName: "Roger Rover",
    quantity: 3,
    quantitySold: 2,
    image: "/path/to/roger_rover.jpg",
  },
  {
    id: 1007,
    productName: "Nissan",
    quantity: 80,
    quantitySold: 80,
    image: "/path/to/nissan.jpg",
  },
  {
    id: 1008,
    productName: "Camion benne",
    quantity: 12,
    quantitySold: 12,
    image: "/path/to/dump_truck.jpg",
  },
  {
    id: 1009,
    productName: "BMW",
    quantity: 90,
    quantitySold: 90,
    image: "/path/to/bmw.jpg",
  },
  {
    id: 1010,
    productName: "Tricycle",
    quantity: 300,
    quantitySold: 120,
    image: "/path/to/tricycle.jpg",
  },
  {
    id: 1011,
    productName: "Moto Honda",
    quantity: 2000,
    quantitySold: 500,
    image: "/path/to/honda_bike.jpg",
  },
  {
    id: 1012,
    productName: "Suzuki",
    quantity: 1700,
    quantitySold: 200,
    image: "/path/to/suzuki.jpg",
  },
];

const InventoryTable = () => {
  const productNameFormatter = (cell: string) => (
    <div className="flex items-center gap-2">
      <img
        src={productImg}
        alt="Product"
        className="w-10 h-6 object-cover rounded"
      />
      <span>{cell}</span>
    </div>
  );

  const actionFormatter = () => (
    <div className="flex space-x-2">
      <ButtonEdit />
      <ButtonDelete />
    </div>
  );

  const columns: Column<InventoryItem>[] = [
    {
      header: "Identifiant",
      name: "id",
      formatter: (value: number) => `#ID-${value}`,
    },
    {
      header: "Produits",
      name: "productName",
      formatter: productNameFormatter,
    },
    { header: "Quantité", name: "quantity" },
    { header: "Quantité vendue", name: "quantitySold" },
    { header: "Action", name: "id", formatter: actionFormatter },
  ];

  return <Table<InventoryItem> data={inventoryData} columns={columns} />;
};

export default InventoryTable;
