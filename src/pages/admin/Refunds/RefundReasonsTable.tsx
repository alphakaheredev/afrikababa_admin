import Table, { Column } from "@/components/ui/Table";
import { ButtonDelete } from "@/components/ui/button";

interface RefundReason {
  id: string;
  name: string;
  reason: string;
}

const refundReasonsData: RefundReason[] = [
  {
    id: "01",
    name: "Produit non conforme à la description",
    reason: "produit-non-conforme-à-la-description",
  },
  {
    id: "02",
    name: "Mauvais article expédié",
    reason: "mauvais article expédié",
  },
  { id: "03", name: "Article endommagé", reason: "article endommagé" },
  { id: "04", name: "Commande annulée", reason: "commande annulée" },
  { id: "05", name: "Livraison tardive", reason: "livraison tardive" },
  {
    id: "06",
    name: "Article non nécessaire",
    reason: "article-non-nécessaire",
  },
  { id: "07", name: "Changement d'avis", reason: "changé d'avis" },
  { id: "08", name: "Autres", reason: "autres" },
];

const RefundReasonsTable = () => {
  const actionFormatter = () => <ButtonDelete />;

  const columns: Column<RefundReason>[] = [
    {
      header: "Identifiant",
      name: "id",
      formatter: (value: string) => `#ID: ${value}`,
    },
    { header: "Nom", name: "name" },
    { header: "Motifs", name: "reason" },
    { header: "Action", name: "id", formatter: actionFormatter },
  ];

  return <Table<RefundReason> data={refundReasonsData} columns={columns} />;
};

export default RefundReasonsTable;
