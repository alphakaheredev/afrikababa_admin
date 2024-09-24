import { ButtonDelete, ButtonEdit } from "@/components/ui/button";
import Table, { Column } from "@/components/ui/Table";
import { useGetShippingsListQuery } from "@/redux/api/shipping/shipping.api";
import { Shipping } from "@/redux/api/shipping/shipping.type";

const ShippingTable = () => {
	const { data: result, isLoading } = useGetShippingsListQuery({});

	const actionFormatter = () => (
		<div className="flex space-x-2">
			<ButtonEdit />
			<ButtonDelete />
		</div>
	);

	const columns: Column<Shipping>[] = [
		{
			header: "Identifiant",
			name: "id",
			formatter: (value: string) => `#ID: ${value}`,
		},
		{ header: "Numéro de lot", name: "batch_number" },
		{ header: "Méthode de livraison", name: "delivery_method" },
		{ header: "Statut", name: "status" },
		{ header: "Action", name: "id", formatter: actionFormatter },
	];

	return (
		<Table<Shipping>
			data={result?.data}
			columns={columns}
			isLoading={isLoading}
		/>
	);
};

export default ShippingTable;
