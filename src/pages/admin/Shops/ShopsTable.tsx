import { Badge } from "@/components/ui/badge";
import { ButtonDelete } from "@/components/ui/button";
import Table, { Column } from "@/components/ui/Table";
import { useDelete } from "@/hooks/useDelete";
import { getLogoUrl, getUserName } from "@/lib/utils";
import {
	useDeleteShopMutation,
	useGetShopsListQuery,
} from "@/redux/api/shop/shop.api";
import { Shop } from "@/redux/api/shop/shop.type";
import { User } from "@/redux/api/user/user.type";

export function Delete({ item }: { item: Shop }) {
	const [deleteItem, { isSuccess, isError, error }] =
		useDeleteShopMutation();
	const onDelete = useDelete<Shop>({
		item,	
		deleteItem,
		isSuccess,
		isError,
		error,
		successMessage: "Boutique supprimée",
	});
	return <ButtonDelete onClick={onDelete} />;
}

const ShopsTable = ({ q }: { q?: string }) => {
	const { data: result, isLoading } = useGetShopsListQuery({ q });

	const statusFormatter = (cell: string = "actif") => {
		let colorClass = "";

		switch (cell) {
			case "Actif":
				colorClass = "bg-green-500 text-white";
				break;
			case "Inactif":
				colorClass = "bg-orange-500 text-white";
				break;
			default:
				colorClass = "bg-gray-500 text-white";
		}

		return <Badge className={`${colorClass}`}>{cell}</Badge>;
	};

	const actionFormatter = (_cell: string, row: Shop) => {
		return <Delete item={row} />;
	};

	const nameBoutiqueFormatter = (cell: string, row: Shop) => {
		return (
			<div className="flex items-center gap-2">
				<div className="bg-dark w-10 h-10 rounded-full flex justify-center items-center p-2">
					<img src={getLogoUrl(row?.logo_url)} alt="icon" />
				</div>
				<span className="capitalize">{cell}</span>
			</div>
		);
	};

	const columns: Column<Shop>[] = [
		{
			header: "Identifiant",
			name: "id",
			formatter: (value: number) => `#ID-${value}`,
		},
		{
			header: "Boutique",
			name: "company_name",
			formatter: nameBoutiqueFormatter,
		},
		{
			header: "Produits",
			name: "total_product",
			formatter: (value: number) => value ?? 0,
		},
		{
			header: "Commande",
			name: "total_order",
			formatter: (value: number) => value ?? 0,
		},
		{
			header: "Nom du propriétaire",
			name: "user",
			formatter: (cell: User) => (
				<span className="capitalize">{getUserName(cell)}</span>
			),
		},
		{
			header: "Statut",
			name: "verified_at",
			formatter: statusFormatter,
		},
		{ header: "Action", name: "id", formatter: actionFormatter },
	];

	return (
		<Table<Shop>
			data={result?.data}
			columns={columns}
			isLoading={isLoading}
		/>
	);
};

export default ShopsTable;
