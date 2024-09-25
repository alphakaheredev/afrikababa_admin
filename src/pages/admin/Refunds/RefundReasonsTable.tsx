import Table, { Column } from "@/components/ui/Table";
import { ButtonDelete } from "@/components/ui/button";
import { getUserName } from "@/lib/utils";
import { useGetRefundsListQuery } from "@/redux/api/refund/refund.api";
import { Refund } from "@/redux/api/refund/refund.type";

const RefundReasonsTable = () => {
	const { data: result, isLoading } = useGetRefundsListQuery({});
	const actionFormatter = () => <ButtonDelete />;

	const columns: Column<Refund>[] = [
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
		<Table<Refund>
			data={result?.data}
			columns={columns}
			isLoading={isLoading}
		/>
	);
};

export default RefundReasonsTable;
