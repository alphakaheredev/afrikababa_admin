import Table, { Column } from "@/components/ui/Table";
import { orders } from "./data";
import { ButtonDelete } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getInitialsOfName } from "@/lib/utils";

interface Order {
  trackingNumber: string;
  client: string;
  email: string;
  products: number;
  orderDate: string;
  total: string;
  status: string;
}

const OrdersTable = () => {
  const statusFormatter = (cell: string) => {
    switch (cell) {
      case "Annulé":
        return <Badge className="bg-red-500">{cell}</Badge>;
      case "En cours":
        return <Badge className="bg-teal-500">{cell}</Badge>;
      case "Livré":
        return <Badge className="bg-th-primary">{cell}</Badge>;
      default:
        return <Badge>{cell}</Badge>;
    }
  };

  const clientFormatter = (cell: string, row: Order) => {
    return (
      <div className="flex items-center gap-3">
        <span className="w-7 h-7 rounded-full flex items-center justify-center bg-[#C3FF97] text-[#306708] font-medium text-sm">
          {getInitialsOfName(cell)}
        </span>
        <div>
          <h5 className="text-dark font-semibold">{cell}</h5>
          <p>{row.email}</p>
        </div>
      </div>
    );
  };

  const columns: Column<Order>[] = [
    { header: "Numéro de suivi", name: "trackingNumber" },
    { header: "Client", name: "client", formatter: clientFormatter },
    { header: "Produits", name: "products" },
    { header: "Date de commande", name: "orderDate" },
    { header: "Total", name: "total" },
    {
      header: "Statut",
      name: "status",
      formatter: statusFormatter,
    },
    {
      header: "Action",
      name: "actions",
      formatter: () => <ButtonDelete />,
    },
  ];

  return <Table<Order> data={orders} columns={columns} />;
};

export default OrdersTable;
