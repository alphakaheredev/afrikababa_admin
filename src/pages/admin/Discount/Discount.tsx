import Table, { Column } from "@/components/ui/Table";
import { Fragment } from "react/jsx-runtime";
import { InputSearch } from "@/components/ui/input";
import {
  ButtonAddLink,
  ButtonDelete,
  ButtonEdit,
} from "@/components/ui/button";
import { adminPaths } from "@/routes/paths";
import { addAdminPrefix } from "@/lib/utils";

interface Coupon {
  id: string;
  code: string;
  amount: string;
  activationDate: string;
  expirationDate: string;
  status: string;
}

const couponsData: Coupon[] = [
  {
    id: "01",
    code: "4 OFF",
    amount: "4.000F",
    activationDate: "il y a 3 mois",
    expirationDate: "il y a 3 mois",
    status: "Approuvé",
  },
  {
    id: "02",
    code: "5 DE RÉDUCTION",
    amount: "4.000F",
    activationDate: "il y a 4 mois",
    expirationDate: "il y a 4 mois",
    status: "Désapprouvé",
  },
  {
    id: "03",
    code: "OFF6",
    amount: "15.000F",
    activationDate: "il y a 1 mois",
    expirationDate: "il y a 1 mois",
    status: "Approuvé",
  },
  // Additional data can be added here
];

const statusFormatter = (status: string) => {
  const statusClass =
    status === "Approuvé" ? "text-green-500" : "text-yellow-500";
  return <span className={statusClass}>{status}</span>;
};

const actionFormatter = (_cell: null) => (
	<div className="flex space-x-2">
		<ButtonEdit />
		<ButtonDelete />
	</div>
);

const Discounts = () => {
  const columns: Column<Coupon>[] = [
    {
      header: "Identifiant",
      name: "id",
      formatter: (value: string) => `#ID: ${value}`,
    },
    { header: "Code", name: "code" },
    { header: "Montant du coupon", name: "amount" },
    { header: "Date d'activation", name: "activationDate" },
    { header: "Date d'expiration", name: "expirationDate" },
    { header: "Statut", name: "status", formatter: statusFormatter },
    { header: "Action", name: "id", formatter: actionFormatter },
  ];

  return (
    <Fragment>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-dark font-semibold">Bons de réduction</h3>
        <div className="flex items-center justify-end gap-3 lg:w-2/3">
          <InputSearch placeholder="Recherchez par nom" />
          <ButtonAddLink to={addAdminPrefix(adminPaths.addDiscount)}>
            Ajouter un coupon
          </ButtonAddLink>
        </div>
      </div>
      <Table<Coupon> data={couponsData} columns={columns} />
    </Fragment>
  );
};

export default Discounts;
