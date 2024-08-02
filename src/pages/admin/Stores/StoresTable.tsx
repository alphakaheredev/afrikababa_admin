import { Badge } from "@/components/ui/badge";
import { ButtonDelete } from "@/components/ui/button";
import Table, { Column } from "@/components/ui/Table";

interface Store {
  id: number;
  name: string;
  products: number;
  orders: number;
  owner: string;
  status: string;
}

const stores: Store[] = [
  {
    id: 1014,
    name: "Meubles",
    products: 10,
    orders: 3,
    owner: "Innovateq",
    status: "Inactif",
  },
  {
    id: 1015,
    name: "Véhicule et transport",
    products: 7,
    orders: 0,
    owner: "Innovateq",
    status: "Actif",
  },
  {
    id: 1016,
    name: "Machine de construction",
    products: 2,
    orders: 12,
    owner: "Innovateq",
    status: "Actif",
  },
  {
    id: 1017,
    name: "Santé et beauté",
    products: 120,
    orders: 50,
    owner: "Innovateq",
    status: "Actif",
  },
  {
    id: 1018,
    name: "Pièces automobiles",
    products: 10,
    orders: 1,
    owner: "Innovateq",
    status: "Inactif",
  },
  {
    id: 1019,
    name: "Énergie renouvelable",
    products: 7,
    orders: 0,
    owner: "Innovateq",
    status: "Actif",
  },
  {
    id: 1020,
    name: "Mode",
    products: 2,
    orders: 12,
    owner: "Innovateq",
    status: "Actif",
  },
  {
    id: 1021,
    name: "Maison et bureau",
    products: 120,
    orders: 50,
    owner: "Innovateq",
    status: "Actif",
  },
  {
    id: 1022,
    name: "Environnement",
    products: 10,
    orders: 1,
    owner: "Innovateq",
    status: "Inactif",
  },
  {
    id: 1023,
    name: "Cadeaux et artisanat",
    products: 2,
    orders: 12,
    owner: "Innovateq",
    status: "Actif",
  },
  {
    id: 1024,
    name: "Soins personnels",
    products: 120,
    orders: 50,
    owner: "Innovateq",
    status: "Actif",
  },
  {
    id: 1025,
    name: "Fournitures scolaires",
    products: 10,
    orders: 1,
    owner: "Innovateq",
    status: "Inactif",
  },
];

const StoresTable = () => {
  const statusFormatter = (cell: string) => {
    let colorClass = "";

    switch (cell) {
      case "Actif":
        colorClass = "bg-green-500 text-white";
        break;
      case "Inactif":
        colorClass = "bg-orange-500 text-white";
        break;
      default:
        colorClass = "bg-gray-500 text-white";
    }

    return <Badge className={`${colorClass}`}>{cell}</Badge>;
  };

  const actionFormatter = () => {
    return <ButtonDelete />;
  };

  const nameBoutiqueFormatter = (value: string) => {
    return (
      <div className="flex items-center gap-2">
        <div className="bg-dark w-10 h-10 rounded-full flex justify-center items-center p-2">
          <img src="https://placehold.jp/20x20.png" alt="icon" />
        </div>
        <p>{value}</p>
      </div>
    );
  };

  const columns: Column<Store>[] = [
    {
      header: "Identifiant",
      name: "id",
      formatter: (value: number) => `#ID-${value}`,
    },
    { header: "Boutique", name: "name", formatter: nameBoutiqueFormatter },
    { header: "Produits", name: "products" },
    { header: "Commande", name: "orders" },
    { header: "Nom du propriétaire", name: "owner" },
    { header: "Statut", name: "status", formatter: statusFormatter },
    { header: "Action", name: "id", formatter: actionFormatter },
  ];

  return <Table<Store> data={stores} columns={columns} />;
};

export default StoresTable;
