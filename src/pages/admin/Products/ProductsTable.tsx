import Table, { Column } from "@/components/ui/Table";
import {
	ButtonDelete,
	ButtonEditLink,
	ButtonViewLink,
} from "@/components/ui/button";
import {
	useDeleteProductMutation,
	useUpdateProductStatusMutation,
} from "@/redux/api/product/product.api";
import { useDelete } from "@/hooks/useDelete";
import { Product } from "@/redux/api/product/product.type";
import { Category } from "@/redux/api/category/category.type";
import { formatPriceToUsd, getImageUrl } from "@/lib/utils";
import { toast } from "react-toastify";
import { Switch } from "@/components/ui/switch";
import { Shop } from "@/redux/api/shop/shop.type";
import Swal from "sweetalert2";
import { colors } from "@/constants/Colors";

const ProductsTable = ({
	data,
	isLoading,
	isSupplier,
}: {
	data?: Product[];
	isLoading: boolean;
	isSupplier?: boolean;
}) => {
	const [updateProductStatus] = useUpdateProductStatusMutation();
	const [deleteItem] = useDeleteProductMutation();

	const handleDelete = (id: number) => {
		Swal.fire({
			title: "Voulez-vous vraiment supprimer ce produit ?",
			icon: "question",
			showCancelButton: true,
			confirmButtonText: "OUI",
			cancelButtonText: "NON",
			showLoaderOnConfirm: true,
			iconColor: colors.info,
			confirmButtonColor: colors.danger,
			preConfirm: async () => {
				const res = await deleteItem(id);
				if ("data" in res) {
					toast.success("Produit supprimé avec succès");
				} else {
					toast.error("Une erreur est survenue");
				}
			},
		});
	};

	const statusFormatter = (status: string, row: Product) => {
		const handleStatusChange = async (checked: boolean) => {
			const res = await updateProductStatus({
				id: row.id,
				status: checked ? "active" : "inactive",
			});
			if ("data" in res) {
				toast.success("Statut du produit modifié");
			} else {
				toast.error("Une erreur est survenue");
			}
		};
		return (
			<Switch
				checked={status === "active"}
				onCheckedChange={handleStatusChange}
			/>
		);
	};
	const nameProductFormatter = (cell: string, row: Product) => {
		return (
			<div className="flex items-center gap-2">
				<img
					src={getImageUrl(row?.main_image_url)}
					alt={cell}
					className="w-10 object-contain"
				/>
				<span>{cell}</span>
			</div>
		);
	};

	const actionFormatter = (cell: number, row: Product) => (
		<div className="flex items-center gap-2">
			<ButtonViewLink
				to={`/${
					isSupplier ? "fournisseur" : "admin"
				}/produits/${row.id}`}
				state={row}
			/>
			{isSupplier && (
				<ButtonEditLink
					to={`/fournisseur/produits/modifier/${row.id}`}
					state={row}
				/>
			)}
			<ButtonDelete onClick={() => handleDelete(cell)} />
		</div>
	);

	const columns: Column<Product>[] = [
		{ header: "Identifiant", name: "id" },
		{
			header: "Produit",
			name: "name",
			formatter: nameProductFormatter,
		},
		{
			header: "Catégories",
			name: "category",
			formatter: (cell: Category) => cell?.name,
		},
		{
			header: "Boutique",
			name: "shop",
			formatter: (cell: Shop) => cell?.company_name,
		},
		{ header: "Statut", name: "status", formatter: statusFormatter },

		// { header: "Type de produits", name: "type" },
		{
			header: "Prix unitaire",
			name: "price",
			formatter: (cell: number) => formatPriceToUsd(cell),
		},
		{ header: "Actions", name: "id", formatter: actionFormatter },
	];

	return (
		<>
			<Table<Product>
				data={data}
				columns={columns}
				isLoading={isLoading}
			/>
		</>
	);
};

export default ProductsTable;
