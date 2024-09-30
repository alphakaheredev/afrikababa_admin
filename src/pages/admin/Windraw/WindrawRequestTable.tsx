import Table, { Column } from "@/components/ui/Table";
import { ButtonDelete } from "@/components/ui/button";
import { getUserName } from "@/lib/utils";
import { useGetWindrawRequestsListQuery } from "@/redux/api/windraw/windraw.api";
import { WindrawRequest } from "@/redux/api/windraw/windraw.type";

const WindrawRequestTable = () => {
	const { data: result, isLoading } = useGetWindrawRequestsListQuery({});
	const actionFormatter = () => <ButtonDelete />;

	const columns: Column<WindrawRequest>[] = [
		{
			header: "Identifiant",
			name: "id",
			formatter: (value: string) => `#ID: ${value}`,
		},
		{
			header: "Nom",
			name: "user",
			formatter: (cell) => getUserName(cell),
		},
		{ header: "Motifs", name: "reason" },
		{ header: "Montant", name: "amount" },
		{ header: "Action", name: "id", formatter: actionFormatter },
	];

	return (
		<Table<WindrawRequest>
			data={result?.data}
			columns={columns}
			isLoading={isLoading}
		/>
	);
};

export default WindrawRequestTable;
