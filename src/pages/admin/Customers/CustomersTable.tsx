import { FaCheckCircle, FaBan } from "react-icons/fa";
import Table, { Column } from "@/components/ui/Table";
import { Badge } from "@/components/ui/badge";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

interface Client {
  id: string;
  name: string;
  email: string;
  roles: string[];
  status: string;
}

const clientsData: Client[] = [
  {
    id: "01",
    name: "Admin démo",
    email: "demo@innovalteq.sn",
    roles: ["Client"],
    status: "Actif",
  },
  {
    id: "02",
    name: "User example",
    email: "user@example.com",
    roles: ["Client"],
    status: "Inactif",
  },
  // Additional data can be added here
];

const rolesFormatter = (roles: string[]) => (
  <div className="flex flex-wrap space-x-2">
    {roles.map((role, index) => (
      <span
        key={index}
        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
      >
        {role}
      </span>
    ))}
  </div>
);

const statusFormatter = (status: string) => {
  const statusClass = status === "Actif" ? "bg-green-500" : "bg-red-500";
  return <Badge className={statusClass}>{status}</Badge>;
};

const handleStatus = () => {
  Swal.fire({
    title: `<p>Bloquer ce client</p>`,
    text: "Etes-vous sûr de vouloir bloquer ce client ?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Bloquer",
    cancelButtonText: "Annulé",
    confirmButtonColor: "#d33",
    reverseButtons: true,
    customClass: {
      confirmButton: "custom-confirm-button-class",
      cancelButton: "custom-cancel-button-class",
    },
  }).then(() => {
    toast.success("Client bloqué avec succès");
  });
};
const actionFormatter = (_cell: null, row: Client) => (
  <div className="flex space-x-2" onClick={handleStatus}>
    {row.status === "Actif" ? (
      <button
        onClick={() => console.log("Block", row)}
        className="text-red-500 hover:underline"
      >
        <FaBan fontSize={20} />
      </button>
    ) : (
      <button
        onClick={() => console.log("Unblock", row)}
        className="text-green-500 hover:underline"
      >
        <FaCheckCircle fontSize={20} />
      </button>
    )}
  </div>
);

const CustomersTable = () => {
  const columns: Column<Client>[] = [
    {
      header: "Identifiant",
      name: "id",
      formatter: (value: string) => `#ID: ${value}`,
    },
    {
      header: "Nom",
      name: "name",
      formatter: (value: string, row: Client) => (
        <div className="flex items-center space-x-3">
          <img
            src="/path/to/avatar.jpg"
            alt={value}
            className="w-8 h-8 rounded-full"
          />
          <div className="text-dark">
            <div>{value}</div>
            <div>{row.email}</div>
          </div>
        </div>
      ),
    },
    { header: "Autorisations", name: "roles", formatter: rolesFormatter },
    { header: "Statut", name: "status", formatter: statusFormatter },
    { header: "Action", name: "id", formatter: actionFormatter },
  ];

  return <Table<Client> data={clientsData} columns={columns} />;
};

export default CustomersTable;
