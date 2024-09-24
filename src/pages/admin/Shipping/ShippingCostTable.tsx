import { ButtonDelete, ButtonEditLink } from "@/components/ui/button";
import Table, { Column } from "@/components/ui/Table";
import { useDelete } from "@/hooks/useDelete";
import { addAdminPrefix } from "@/lib/utils";
import {
	useDeleteShippingCostMutation,
	useGetShippingCostsListQuery,
} from "@/redux/api/shipping/shipping.api";
import { ShippingCost } from "@/redux/api/shipping/shipping.type";
import { adminPaths } from "@/routes/paths";

function Delete({ item }: { item: ShippingCost }) {
	const [deleteItem, { isSuccess, isError, error }] =
		useDeleteShippingCostMutation();
	const onDelete = useDelete<ShippingCost>({
		item,
		deleteItem,
		isSuccess,
		isError,
		error,
		successMessage: "Coût de livraison supprimé",
	});
	return <ButtonDelete onClick={onDelete} />;
}

const ShippingCostTable = () => {
	const { data: result, isLoading } = useGetShippingCostsListQuery({});

	const actionFormatter = (_cell: string, row: ShippingCost) => (
		<div className="flex space-x-2">
			<ButtonEditLink
				to={addAdminPrefix(
					`${adminPaths.shippingCosts}/modifier/${row.id}`
				)}
				state={row}
			/>
			<Delete item={row} />
		</div>
	);

	const columns: Column<ShippingCost>[] = [
		{
			header: "Identifiant",
			name: "id",
			formatter: (value: string) => `#ID: ${value}`,
		},
		// { header: "Poids", name: "weight_range" },
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
