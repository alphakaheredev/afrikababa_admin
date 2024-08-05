import { ButtonDelete, ButtonEdit } from "@/components/ui/button";
import Table, { Column } from "@/components/ui/Table";
import diamond from "@/assets/images/admin/diamond.png";
import { Switch } from "@/components/ui/switch";

interface Manufacturer {
  id: number;
  name: string;
  productsCount: number;
  icon: string;
  approved: boolean;
}

const manufacturersData: Manufacturer[] = [
  {
    id: 1001,
    name: "Publication de Tom",
    productsCount: 10,
    icon: "/path/to/icon1.jpg",
    approved: true,
  },
  {
    id: 1002,
    name: "Super Force",
    productsCount: 2,
    icon: "/path/to/icon2.jpg",
    approved: false,
  },
  {
    id: 1003,
    name: "Super Force",
    productsCount: 90,
    icon: "/path/to/icon3.jpg",
    approved: true,
  },
  {
    id: 1004,
    name: "Vision XRT",
    productsCount: 100,
    icon: "/path/to/icon4.jpg",
    approved: false,
  },
  {
    id: 1005,
    name: "Manu Tech",
    productsCount: 87,
    icon: "/path/to/icon5.jpg",
    approved: true,
  },
  {
    id: 1006,
    name: "Publication de Tom",
    productsCount: 12,
    icon: "/path/to/icon6.jpg",
    approved: false,
  },
  {
    id: 1007,
    name: "Super Force",
    productsCount: 8,
    icon: "/path/to/icon7.jpg",
    approved: true,
  },
  {
    id: 1008,
    name: "Super Force",
    productsCount: 23,
    icon: "/path/to/icon8.jpg",
    approved: false,
  },
  {
    id: 1009,
    name: "Vision XRT",
    productsCount: 0,
    icon: "/path/to/icon9.jpg",
    approved: true,
  },
  {
    id: 1010,
    name: "Manu Tech",
    productsCount: 34,
    icon: "/path/to/icon10.jpg",
    approved: false,
  },
  {
    id: 1011,
    name: "Innovateq",
    productsCount: 21,
    icon: "/path/to/icon11.jpg",
    approved: true,
  },
  {
    id: 1012,
    name: "Super Force",
    productsCount: 18,
    icon: "/path/to/icon12.jpg",
    approved: false,
  },
];

const ManufacturersTable = () => {
  const nameFormatter = (cell: string) => (
    <div className="flex items-center space-x-2">
      <div className="bg-slate-200 w-10 h-10 rounded-full flex items-center justify-center">
        <img
          src={diamond}
          alt="Icon"
          className="w-6 h-6 object-cover rounded"
        />
      </div>
      <span>{cell}</span>
    </div>
  );

  const approvalFormatter = () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
    </div>
  );

  const actionFormatter = () => (
    <div className="flex space-x-2">
      <ButtonEdit />
      <ButtonDelete />
    </div>
  );

  const columns: Column<Manufacturer>[] = [
    {
      header: "Identifiant",
      name: "id",
      formatter: (value: number) => `#ID-${value}`,
    },
    {
      header: "Nom",
      name: "name",
      formatter: nameFormatter,
    },
    { header: "Des produits", name: "productsCount" },
    {
      header: "Action d'approbation",
      name: "approved",
      formatter: approvalFormatter,
    },
    { header: "Action", name: "id", formatter: actionFormatter },
  ];

  return <Table<Manufacturer> data={manufacturersData} columns={columns} />;
};

export default ManufacturersTable;
