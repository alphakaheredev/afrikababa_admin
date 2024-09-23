import { Badge } from "@/components/ui/badge";
import Table, { Column } from "@/components/ui/Table";
import { formatAmount } from "@/lib/utils";
import { useGetPaymentsListQuery } from "@/redux/api/payment/payment.api";
import { Payment } from "@/redux/api/payment/payment.type";

const paymentStatusFormatter = (status: string) => {
	let statusClass = "";

	switch (status) {
		case "Paiement réussi":
			statusClass = "text-green-500";
			break;
		case "Paiement en attente":
			statusClass = "text-yellow-500";
			break;
		case "Paiement échoué":
			statusClass = "text-red-500";
			break;
		default:
			statusClass = "text-gray-500";
	}

	return <Badge className={statusClass}>{status}</Badge>;
};

const TransactionsTable = () => {
	const { data: payments, isLoading } = useGetPaymentsListQuery({});
	const columns: Column<Payment>[] = [
		{ header: "Numéro de suivi", name: "tracking_number" },
		{
			header: "Montant",
			name: "payment_amount",
			formatter: (value: number) => formatAmount(value),
		},
		{ header: "Méthode de paiement", name: "payment_method" },
		{
			header: "Statut de paiement",
			name: "payment_status",
			formatter: paymentStatusFormatter,
		},
	];

	return (
		<Table<Payment>
			data={payments?.data}
			columns={columns}
			isLoading={isLoading}
		/>
	);
};

export default TransactionsTable;
