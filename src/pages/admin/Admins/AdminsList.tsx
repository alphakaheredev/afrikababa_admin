import Table, { Column } from "@/components/ui/Table";
import { Badge } from "@/components/ui/badge";
import { ButtonDelete } from "@/components/ui/button";

interface Admin {
  id: string;
  name: string;
  email: string;
  roles: string[];
  status: string;
}

const adminsData: Admin[] = [
  {
    id: "01",
    name: "Admin démo",
    email: "demo@innovalteq.sn",
    roles: ["Propriétaire du magasin", "Client"],
    status: "Actif",
  },
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

const actionFormatter = () => <ButtonDelete />;

const AdminsList = () => {
  const columns: Column<Admin>[] = [
    {
      header: "Identifiant",
      name: "id",
      formatter: (value: string) => `#ID: ${value}`,
    },
    {
      header: "Nom",
      name: "name",
      formatter: (value: string, row: Admin) => (
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

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-dark font-semibold">Administrateurs</h3>
      </div>
      <Table<Admin> data={adminsData} columns={columns} />
    </>
  );
};

export default AdminsList;
