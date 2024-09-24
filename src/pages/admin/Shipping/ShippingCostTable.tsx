import { ButtonDelete, ButtonEdit } from "@/components/ui/button";
import Table, { Column } from "@/components/ui/Table";
import { useGetShippingCostsListQuery } from "@/redux/api/shipping/shipping.api";
import { ShippingCost } from "@/redux/api/shipping/shipping.type";

const ShippingCostTable = () => {
	const { data: result, isLoading } = useGetShippingCostsListQuery({});

	const actionFormatter = () => (
		<div className="flex space-x-2">
			<ButtonEdit />
			<ButtonDelete />
		</div>
	);

	const columns: Column<ShippingCost>[] = [
		{
			header: "Identifiant",
			name: "id",
			formatter: (value: string) => `#ID: ${value}`,
		},
		{ header: "Poids", name: "weight_range" },
		{ header: "Coût de livraison par bateau", name: "cost_sea" },
		{ header: "Coût de livraison par avion", name: "cost_air" },
		{ header: "Action", name: "id", formatter: actionFormatter },
	];

	return (
		<Table<ShippingCost>
			data={result?.data}
			columns={columns}
			isLoading={isLoading}
		/>
	);
};

export default ShippingCostTable;
