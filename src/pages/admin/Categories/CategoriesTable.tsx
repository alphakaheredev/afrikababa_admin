import { ButtonDelete, ButtonEdit } from "@/components/ui/button";
import Table, { Column } from "@/components/ui/Table";
import noImg from "@/assets/images/admin/no-image.png";
import icon from "@/assets/images/admin/diamond.png";
import { Category } from "@/redux/api/category/category.type";
import {
	useDeleteCategoryMutation,
	useGetCategorysListQuery,
} from "@/redux/api/category/category.api";
import { useDelete } from "@/hooks/useDelete";

export function Delete({ item }: { item: Category }) {
	const [deleteItem, { isSuccess, isError, error }] =
		useDeleteCategoryMutation();
	const onDelete = useDelete<Category>({
		item,
		deleteItem,
		isSuccess,
		isError,
		error,
		successMessage: "Catégorie supprimée",
	});
	return <ButtonDelete onClick={onDelete} />;
}

const CategoriesTable = () => {
	const { data: result, isLoading } = useGetCategorysListQuery({});
	const iconFormatter = () => (
		<img
			src={icon}
			alt="Icon"
			className="w-6 h-6 object-cover rounded"
		/>
	);

	const categoryNameFormatter = (cell: string) => (
		<div className="flex items-center gap-2">
			<img
				src={noImg}
				alt="Product"
				className="object-contain rounded"
			/>
			<span className="capitalize">{cell}</span>
		</div>
	);

	const actionFormatter = (_cell: string, row: Category) => (
		<div className="flex space-x-2">
			<ButtonEdit />
			<Delete item={row} />
		</div>
	);

	const columns: Column<Category>[] = [
		{
			header: "Identifiant",
			name: "id",
			formatter: (value: number) => `#ID-${value}`,
		},
		{
			header: "Catégorie",
			name: "name",
			formatter: categoryNameFormatter,
		},
		{ header: "Icône", name: "icon", formatter: iconFormatter },
		{ header: "Action", name: "id", formatter: actionFormatter },
	];

	return (
		<Table<Category>
			data={result?.data}
			columns={columns}
			isLoading={isLoading}
		/>
	);
};

export default CategoriesTable;
