import { Badge } from "@/components/ui/badge";
import Table, { Column } from "@/components/ui/Table";

interface Transaction {
  trackingNumber: string;
  productPrice: string;
  deliveryFee: string;
  paymentGateway: string;
  paymentStatus: string;
}

const transactionsData: Transaction[] = [
  {
    trackingNumber: "20240207303639",
    productPrice: "10.000F",
    deliveryFee: "1.000F",
    paymentGateway: "Espèces",
    paymentStatus: "Paiement réussi",
  },
  {
    trackingNumber: "20231105350999",
    productPrice: "200.000F",
    deliveryFee: "20.000F",
    paymentGateway: "Espèces",
    paymentStatus: "Paiement réussi",
  },
  {
    trackingNumber: "20231103599394",
    productPrice: "2.000F",
    deliveryFee: "500F",
    paymentGateway: "Paiement application mobile happy pay",
    paymentStatus: "Paiement réussi",
  },
  // Additional data can be added here
];

const paymentStatusFormatter = (status: string) => {
  let statusClass = "";

  switch (status) {
    case "Paiement réussi":
      statusClass = "text-green-500";
      break;
    case "Paiement en attente":
      statusClass = "text-yellow-500";
      break;
    case "Paiement échoué":
      statusClass = "text-red-500";
      break;
    default:
      statusClass = "text-gray-500";
  }

  return <Badge className={statusClass}>{status}</Badge>;
};

const TransactionsTable = () => {
  const columns: Column<Transaction>[] = [
    { header: "Numéro de suivi", name: "trackingNumber" },
    { header: "Prix du produit", name: "productPrice" },
    { header: "Frais de livraison", name: "deliveryFee" },
    { header: "Passerelle de paiement", name: "paymentGateway" },
    {
      header: "Statut de paiement",
      name: "paymentStatus",
      formatter: paymentStatusFormatter,
    },
  ];

  return <Table<Transaction> data={transactionsData} columns={columns} />;
};

export default TransactionsTable;
