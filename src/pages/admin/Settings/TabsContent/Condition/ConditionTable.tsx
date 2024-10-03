import {
	ButtonAddLink,
	ButtonDelete,
	ButtonEditLink,
} from "@/components/ui/button";
import Table, { Column } from "@/components/ui/Table";
import { useDelete } from "@/hooks/useDelete";
import {
	addAdminPrefix,
	formatConditionTarget,
	formatConditionType,
} from "@/lib/utils";
import {
	useGetConditionsListQuery,
	useDeleteConditionMutation,
} from "@/redux/api/condition/condition.api";
import { Condition } from "@/redux/api/condition/condition.type";
import { adminPaths } from "@/routes/paths";

function Delete({ item }: { item: Condition }) {
	const [deleteItem, { isSuccess, isError, error }] =
		useDeleteConditionMutation();
	const onDelete = useDelete<Condition>({
		item,
		deleteItem,
		isSuccess,
		isError,
		error,
		successMessage: "Condition supprimée",
	});
	return <ButtonDelete onClick={onDelete} />;
}

const ConditionTable = () => {
	const { data: result, isLoading } = useGetConditionsListQuery({});

	const actionFormatter = (_cell: string, row: Condition) => (
		<div className="flex space-x-2">
			<ButtonEditLink
				to={`conditions-et-termes/modifier/${row.id}`}
				state={row}
			/>
			<Delete item={row} />
		</div>
	);

	const columns: Column<Condition>[] = [
		{
			header: "Identifiant",
			name: "id",
			formatter: (value: string) => `#ID: ${value}`,
		},
		{
			header: "Pour les",
			name: "target",
			formatter: (cell) => `${formatConditionTarget(cell)}s`,
		},
		{
			header: "Type",
			name: "type",
			formatter: (cell) => formatConditionType(cell),
		},
		{
			header: "Contenu",
			name: "content",
			formatter: (cell: string) => (
				<div
					className="text-ellipsis whitespace-nowrap"
					dangerouslySetInnerHTML={{
						__html: cell.slice(0, 200),
					}}
				/>
			),
		},
		{ header: "Action", name: "id", formatter: actionFormatter },
	];

	return (
		<>
			<div className="flex items-center justify-end gap-3 mb-5">
				<ButtonAddLink
					to={addAdminPrefix(adminPaths.addCondition)}
				>
					Ajouter une condition
				</ButtonAddLink>
			</div>
			<Table<Condition>
				data={result?.data}
				columns={columns}
				isLoading={isLoading}
			/>
		</>
	);
};

export default ConditionTable;
