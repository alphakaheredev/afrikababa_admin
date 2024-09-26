import { ButtonDelete, ButtonViewLink } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Table, { Column } from "@/components/ui/Table";
import { useDelete } from "@/hooks/useDelete";
import { getLogoUrl, getUserName } from "@/lib/utils";
import {
	useDeleteShopMutation,
	useGetShopsListQuery,
	useToggleShopStatusMutation,
} from "@/redux/api/shop/shop.api";
import { Shop } from "@/redux/api/shop/shop.type";
import { User } from "@/redux/api/user/user.type";
import { toast } from "react-toastify";

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

	const [toggleShopStatus] = useToggleShopStatusMutation();

	const statusFormatter = (cell: string, row: Shop) => {
		const handleStatusChange = async () => {
			console.log(cell);

			const res = await toggleShopStatus(row.id);
			if ("data" in res) {
				toast.success("Statut de la boutique modifié");
			} else {
				toast.error("Une erreur est survenue");
			}
		};

		return (
			<Switch
				checked={!!cell}
				onCheckedChange={handleStatusChange}
			/>
		);
	};

	const actionFormatter = (_cell: string, row: Shop) => {
		return (
			<div className="flex items-center gap-2">
				<ButtonViewLink
					to={`/admin/boutiques/${row.id}`}
					state={row}
				/>
				<Delete item={row} />
			</div>
		);
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
			name: "products_count",
			formatter: (value: number) => value ?? 0,
		},
		{
			header: "Commande",
			name: "orderitems_count",
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
			name: "is_active",
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
