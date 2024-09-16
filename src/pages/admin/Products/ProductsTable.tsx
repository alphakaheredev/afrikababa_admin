import { Badge } from "@/components/ui/badge";
import Table, { Column } from "@/components/ui/Table";
import productImg from "@/assets/images/admin/computer.png";
import { ButtonDelete, ButtonEdit } from "@/components/ui/button";
import {
	useDeleteProductMutation,
	useGetProductsListQuery,
} from "@/redux/api/shop/shop.api";
import { useDelete } from "@/hooks/useDelete";
import { Product, Shop } from "@/redux/api/shop/shop.type";
import { Category } from "@/redux/api/category/category.type";

export function Delete({ item }: { item: Product }) {
	const [deleteItem, { isSuccess, isError, error }] =
		useDeleteProductMutation();
	const onDelete = useDelete<Product>({
		item,
		deleteItem,
		isSuccess,
		isError,
		error,
		successMessage: "Produit supprimé",
	});
	return <ButtonDelete onClick={onDelete} />;
}

const ProductsTable = ({ q }: { q?: string }) => {
	const { data: result, isLoading } = useGetProductsListQuery({ q });

	const stockStatusFormatter = (cell: string) => {
		let colorClass = "";

		switch (cell) {
			case "In Stock":
				colorClass = "bg-th-primary";
				break;
			case "Out of Stock":
				colorClass = "bg-red-500";
				break;
			case "Low Stock":
				colorClass = "bg-[#FB8885]";
				break;
			default:
				colorClass = "bg-dark";
		}

		return <Badge className={colorClass}>{cell}</Badge>;
	};

	const nameProductFormatter = (cell: string) => {
		return (
			<div className="flex items-center gap-2">
				<img
					src={productImg}
					alt={cell}
					className="w-10 object-contain"
				/>
				<span>{cell}</span>
			</div>
		);
	};

	const actionFormatter = () => (
		<div className="flex items-center gap-2">
			<ButtonEdit />
			<ButtonDelete />
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
		// { header: "Type de produits", name: "type" },
		{ header: "Prix unitaire", name: "price" },
		// {
		// 	header: "Etat de stock",
		// 	name: "stockStatus",
		// 	formatter: stockStatusFormatter,
		// },
		{ header: "Actions", name: "actions", formatter: actionFormatter },
	];

	return (
		<Table<Product>
			data={result?.data}
			columns={columns}
			isLoading={isLoading}
		/>
	);
};

export default ProductsTable;
