import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Table, { Column } from "@/components/ui/Table";
import { InputSearch } from "@/components/ui/input";

interface Review {
  id: string;
  review: string;
  description: string;
  startDate: string;
  endDate: string;
}

const reviewsData: Review[] = [
  {
    id: "01",
    review: "Excellent!!",
    description: "Aujourd'hui du 08/08...",
    startDate: "il y a 1 jour",
    endDate: "il y a 1 jour",
  },
  {
    id: "02",
    review: "Désoolé pour le retard de...",
    description: "Nous sommes désolés...",
    startDate: "il y a 2 ans",
    endDate: "il y a 2 ans",
  },
  {
    id: "03",
    review: "Grande vente !!!",
    description: "Du 15 avril 2023 au...",
    startDate: "il y a 4 ans",
    endDate: "il y a 4 jours",
  },
  // Additional data can be added here
];

const actionFormatter = (_cell: null, row: Review) => (
  <div className="flex space-x-2">
    <button
      onClick={() => console.log("Edit", row)}
      className="text-blue-500 hover:underline"
    >
      <FaEdit />
    </button>
    <button
      onClick={() => console.log("Delete", row)}
      className="text-red-500 hover:underline"
    >
      <FaTrashAlt />
    </button>
  </div>
);

const Reviews = () => {
  const columns: Column<Review>[] = [
    {
      header: "Identifiant",
      name: "id",
      formatter: (value: string) => `#ID: ${value}`,
    },
    { header: "Avis", name: "review" },
    { header: "Description", name: "description" },
    { header: "A compter de", name: "startDate" },
    { header: "Expire le", name: "endDate" },
    { header: "Action", name: "id", formatter: actionFormatter },
  ];

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-dark font-semibold">Avis de magasin</h3>
        <div className="flex items-center justify-end gap-3 lg:w-2/3">
          <InputSearch placeholder="Recherchez par avis" />
        </div>
      </div>
      <Table<Review> data={reviewsData} columns={columns} />
    </>
  );
};

export default Reviews;
