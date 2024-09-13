import { ButtonDelete, ButtonEditLink } from "@/components/ui/button";
import Table, { Column } from "@/components/ui/Table";
import icon from "@/assets/images/admin/diamond.png";
import { Category } from "@/redux/api/category/category.type";
import {
	useDeleteCategoryMutation,
	useGetCategorysListQuery,
} from "@/redux/api/category/category.api";
import { useDelete } from "@/hooks/useDelete";
import { addAdminPrefix } from "@/lib/utils";
import { adminPaths } from "@/routes/paths";

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

	const categoryNameFormatter = (cell: string) => (
		<div className="flex items-center gap-2">
			<img
				src={icon}
				alt="Icon"
				className="w-6 h-6 object-cover rounded"
			/>
			<span className="capitalize">{cell}</span>
		</div>
	);

	const actionFormatter = (_cell: string, row: Category) => (
		<div className="flex space-x-2">
			<ButtonEditLink
				to={addAdminPrefix(adminPaths.editCategory)}
				state={row}
			/>
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
		{ header: "Description", name: "description" },
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
