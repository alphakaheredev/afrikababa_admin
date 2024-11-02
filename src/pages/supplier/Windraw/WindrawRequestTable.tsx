import Table, { Column } from "@/components/ui/Table";
import { ButtonDelete } from "@/components/ui/button";
import { getUserName } from "@/lib/utils";
import { useGetWithdrawalRequestsByShopQuery } from "@/redux/api/shop/shop.api";
import { WindrawRequest } from "@/redux/api/windraw/windraw.type";
import { useAppSelector } from "@/redux/hooks";

const WindrawRequestTable = () => {
	const { shop } = useAppSelector((state) => state.user);
	const { data: result, isLoading } = useGetWithdrawalRequestsByShopQuery({
		id: shop?.id,
	});
	const actionFormatter = () => <ButtonDelete />;

	const columns: Column<WindrawRequest>[] = [
		{
			header: "Identifiant",
			name: "id",
			formatter: (value: string) => `#ID: ${value}`,
		},
		{
			header: "Fournisseur",
			name: "shop",
			formatter: (_cell: string, row: WindrawRequest) =>
				getUserName(row.shop.user),
		},
		{ header: "Montant", name: "amount" },
		{ header: "Méthode de paiement", name: "payment_methode" },
		{ header: "Statut", name: "status" },
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
